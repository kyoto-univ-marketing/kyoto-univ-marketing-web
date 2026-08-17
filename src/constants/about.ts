/**
 * 実績数値（会員数・学部学科・プロジェクト）の基準日。
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
 * 会員数そのものは Django から取っているが、内訳はアンケート集計なので
 * 自動では更新されない。集計し直したらここを書き換えること。
 * 合計が100%になるよう、多い順に並べてある。
 */
export const facultyBreakdown = [
    { name: '経済学部', percent: 57.7, color: '#00215b' },
    { name: '工学部', percent: 15.4, color: '#1d4488' },
    { name: '文学部', percent: 5.8, color: '#33609f' },
    { name: '医学部', percent: 5.8, color: '#4b7cb6' },
    { name: '法学部', percent: 3.8, color: '#6697cc' },
    { name: '総合人間学部', percent: 3.8, color: '#84b0dc' },
    { name: '農学部', percent: 3.8, color: '#a3c7e9' },
    { name: '理学部', percent: 1.9, color: '#c1dcf3' },
    { name: '薬学部', percent: 1.9, color: '#dceafa' },
] as const

/**
 * 文系・理系の比率。上の学部内訳から算出している。
 * 理系＝工・医・農・理・薬（15.4＋5.8＋3.8＋1.9＋1.9＝28.8）。
 * 総合人間学部は文理融合のため理系に数えず、文系側に含めている。
 */
export const scienceRatio = [
    { name: '文系', percent: 71.2, color: '#00215b' },
    { name: '理系', percent: 28.8, color: '#a8863d' },
] as const

/** 理系学部の割合を言葉で言うときの表現 */
export const SCIENCE_FACULTY_SHARE = '約3割'

/** 活動拠点マーケハウスの住所。法人登記の所在地と同じ */
export const MAKE_HOUSE_ADDRESS = '京都府京都市左京区田中大堰町13'

/**
 * 地図の埋め込み先。
 * output=embed の形式は API キーが要らないので、鍵の管理が発生しない。
 */
export const MAP_EMBED_SRC = `https://maps.google.com/maps?q=${encodeURIComponent(MAKE_HOUSE_ADDRESS)}&z=16&output=embed`

/**
 * OB・OG と現役生の主な進路・内定先。
 *
 * 個社名は出さない。承諾の確認が要るうえ、載せた企業とそうでない企業の差が出るため。
 * 業種・職種の粒度でとどめておく。
 */
export const careerPaths = [
    '外資系消費財メーカー',
    '戦略コンサルティングファーム',
    '総合商社',
    '政府系金融機関',
    '国家公務員',
    '大手広告代理店',
    'AIスタートアップ',
    '起業',
    '医師',
    '弁護士',
    '公認会計士',
    '研究者',
] as const
