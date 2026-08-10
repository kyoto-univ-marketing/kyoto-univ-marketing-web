/**
 * 実績数値（部員数・学部学科・プロジェクト）の基準日。
 *
 * Django の更新日時ではなくここの値を表示する。更新日時を使うと、
 * 数値の誤字を直しただけでも「〜年〜月現在」がその日に変わってしまうため。
 *
 * 数値を集計し直したら、Django 側の数値と合わせてここも更新すること。
 */
export const STATS_AS_OF = '2026年7月'

/**
 * 所属学部の内訳（協賛提案資料 v6 の集計に基づく）。
 *
 * 部員数そのものは Django から取っているが、内訳はアンケート集計なので
 * 自動では更新されない。集計し直したらここを書き換えること。
 * 合計が100%になるよう、多い順に並べてある。
 */
export const facultyBreakdown = [
    { name: '経済', percent: 57.7 },
    { name: '工', percent: 15.4 },
    { name: '文', percent: 5.8 },
    { name: '医', percent: 5.8 },
    { name: '法', percent: 3.8 },
    { name: '総人', percent: 3.8 },
    { name: '農', percent: 3.8 },
    { name: '理', percent: 1.9 },
    { name: '薬', percent: 1.9 },
] as const

/** 理系学部（工・医・農・理・薬）の割合。総人は文理融合のため含めない */
export const SCIENCE_FACULTY_SHARE = '約3割'
