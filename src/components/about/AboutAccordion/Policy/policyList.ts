import Kyo01 from './kyo_01.png'
import Kyo02 from './kyo_02.png'
import Kyo03 from './kyo_03.png'
import Kyo04 from './kyo_04.png'
import { PolicyItem } from './PolicyItem'

export default [
    {
        text: '一.\n資産として、\n経験と学びを紡ぐ',
        stamp: Kyo01,
        stampTop: '50%',
        stampLeft: '50%',
    },
    {
        text: '二.\n"京都発"の\n価値を創る',
        stamp: Kyo02,
        stampTop: '50%',
        stampLeft: '50%',
    },
    {
        text: '三.\n理論と実践、\n学生と社会\nを結ぶ',
        stamp: Kyo03,
        stampTop: '33%',
        stampLeft: '50%',
    },
    {
        text: '四.\n今やりたい、\n今しかできない\nことを現す',
        stamp: Kyo04,
        stampTop: '40%',
        stampLeft: '50%',
    },
] as const satisfies PolicyItem[]
