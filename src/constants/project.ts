export const projectTagList = ['マーケティング支援', '共同プロジェクト', 'オリジナルプロジェクト'] as const

/**
 * 終了したプロジェクトの目印。管理画面でプロジェクト名の末尾に付ける。
 *
 * サイト上の札と同じ「実績」にしてある。管理画面で名前を見たときに、
 * 表示がどうなるかがそのまま分かるようにするため。
 * バックエンドに項目を足せないので、名前に含める方式にしている。
 */
export const ARCHIVED_PROJECT_MARKER = '【実績】'

/** 以前使っていた目印。付いたままのものが残っていても実績として扱う */
const LEGACY_ARCHIVED_MARKERS = ['【終了】'] as const

const ALL_ARCHIVED_MARKERS = [ARCHIVED_PROJECT_MARKER, ...LEGACY_ARCHIVED_MARKERS]

/** 終了したプロジェクトかどうかを判定する。表示は分類の中で「実績」の札を付ける */
export const isArchivedProject = (name: string) => ALL_ARCHIVED_MARKERS.some((marker) => name.includes(marker))

/** 表示用に目印を取り除く */
export const stripArchivedMarker = (name: string) =>
    ALL_ARCHIVED_MARKERS.reduce((acc, marker) => acc.replaceAll(marker, ''), name).trim()
