FROM --platform=linux/amd64 node:22.4.0-alpine as base

ENV PNPM_HOME=/pnpm

WORKDIR /app
RUN corepack enable pnpm

FROM base as builder

# 参考: https://stackoverflow.com/questions/70608086/i-am-getting-error-while-converting-my-next-js-project-to-docker
ENV NEXT_PRIVATE_STANDALONE=true

COPY package.json pnpm-lock.yaml ./
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile

ARG MICROCMS_SERVICE_DOMAIN
ARG MICROCMS_API_KEY

COPY . .
RUN pnpm run build

FROM base as production

ENV NODE_ENV=production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder --chown=nextjs:nodejs /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000
ENV PORT 3000

CMD HOSTNAME="0.0.0.0" node server.js
