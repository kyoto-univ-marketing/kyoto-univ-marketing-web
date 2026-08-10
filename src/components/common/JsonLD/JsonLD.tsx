import type { Thing, WithContext } from 'schema-dts'

export interface JsonLDProps<T extends Thing> {
    id: string
    json: WithContext<T>
}

/**
 * 構造化データ。
 *
 * next/script ではなく素の script タグで出す。next/script は既定でページ読み込み後に
 * 差し込まれるため、サーバーが返す HTML そのものには構造化データが入らない。
 * 検索エンジンに確実に拾わせるには、最初の HTML に含まれている必要がある。
 */
export const JsonLD = <T extends Thing>({ id, json }: JsonLDProps<T>) => (
    // biome-ignore lint/security/noDangerouslySetInnerHtml: 構造化データはこの方法でしか埋め込めない
    <script dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }} id={id} type='application/ld+json' />
)
