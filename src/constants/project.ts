export const projectTagList = ['マーケティング支援', '共同プロジェクト', 'オリジナルプロジェクト'] as const

/** プロジェクト名に付与された終了の目印（Django側で名前末尾に付与する） */
export const ARCHIVED_PROJECT_MARKER = '【終了】'

/** 終了済み（アーカイブ）プロジェクトかどうかを判定する */
export const isArchivedProject = (name: string) => name.includes(ARCHIVED_PROJECT_MARKER)

/** 表示用に終了の目印を取り除く */
export const stripArchivedMarker = (name: string) => name.replaceAll(ARCHIVED_PROJECT_MARKER, '').trim()
