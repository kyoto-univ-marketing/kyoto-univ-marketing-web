import type { MetadataRoute } from 'next'

/**
 * 以前は /_next/static/media/ を拒否していたが外している。
 * ここには静的に読み込んでいる写真が入るため、拒否すると画像検索に載らない。
 *
 * 拒否するのは、検索から来ても意味のない2つだけ。
 * - /articles/draft … 未公開記事のプレビュー。公開前の下書きが検索に載ると困る
 * - /contact/success … 送信後の完了画面。中身のないページが検索結果に並ぶのを防ぐ
 *
 * robots.txt は「巡回しないでほしい」の申告でしかないので、
 * 各ページ側にも noindex を付けて二重にしている。
 */
export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: ['/articles/draft', '/contact/success'],
        },
        sitemap: 'https://kyodaimarketing.com/sitemap.xml',
    }
}
