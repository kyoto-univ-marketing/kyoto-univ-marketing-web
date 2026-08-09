/**
 * 画像URLを https に直す。
 *
 * Django（Cloud Run）はプロキシの後ろにいるため、自分が https で配信されていることを
 * 知らず、メディアのURLを `http://` で返してくる。サイトは https なので、そのまま
 * 使うとブラウザが混在コンテンツとして遮断し、画像が表示されない。
 */
export const toHttps = (url: string): string => url.replace(/^http:\/\//, 'https://')
