import dayjs from 'dayjs'
import timezone from 'dayjs/plugin/timezone'
import utc from 'dayjs/plugin/utc'

dayjs.extend(utc)
dayjs.extend(timezone)

/**
 * 記事の掲載日を日本時間で整形する。
 *
 * microCMS は日時を UTC で持っている。管理画面で「2026年7月23日 0:00」と入れると
 * 実際には 2026-07-22T15:00:00Z が保存されるため、そのまま整形すると
 * サーバー（UTC）では前日の日付になる。必ずこの関数を通すこと。
 */
export const formatArticleDate = (date: string) => dayjs(date).tz('Asia/Tokyo').format('YYYY.MM.DD')

/** 掲載日が最近かどうか（New バッジの判定に使う） */
export const isRecentArticle = (date: string, withinDays = 7) =>
    dayjs(date).isAfter(dayjs().subtract(withinDays, 'day'))
