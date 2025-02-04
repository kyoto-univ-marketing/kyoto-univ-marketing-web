FROM --platform=linux/amd64 oven/bun:alpine as base


WORKDIR /app

FROM base as builder

# 参考: https://stackoverflow.com/questions/70608086/i-am-getting-error-while-converting-my-next-js-project-to-docker
ENV NEXT_PRIVATE_STANDALONE=true

COPY package.json bun.lock ./
RUN bun install --frozen-lockfile

ARG MICROCMS_SERVICE_DOMAIN
ARG MICROCMS_API_KEY
ARG NEXT_PUBLIC_MEASUREMENT_ID
ARG CONTACT_FORM_API_URL

COPY . .
RUN bun run build

FROM base as production

ENV NODE_ENV=production

RUN addgroup --system --gid 1001 bunjs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder --chown=nextjs:bunjs /app/public ./public
COPY --from=builder --chown=nextjs:bunjs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:bunjs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000
ENV PORT 3000

CMD HOSTNAME="0.0.0.0" bun run server.js
