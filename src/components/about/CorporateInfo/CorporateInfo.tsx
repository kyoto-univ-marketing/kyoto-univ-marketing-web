import { SectionHeading } from '@/components/common/SectionHeading/SectionHeading'
import { STATS_AS_OF } from '@/constants/about'
import { getSiteSettings } from '@/lib/microcms'

/**
 * 法人概要。
 *
 * 協賛や取材の検討で訪れた企業は、まずここで実在性を確認する。
 * 登記で確認できた事実だけを載せること（推測で埋めない）。
 * 連絡先は microCMS の site_settings から取り、フッターと食い違わないようにする。
 */
export const CorporateInfo = async () => {
    const siteSettings = await getSiteSettings()
    // 主たる呼称はあくまで「京大マーケティング研究所」。法人名は括弧で添える
    const items = [
        { label: '名称', value: '京大マーケティング研究所（一般社団法人マーケティング研究所）' },
        { label: '法人番号', value: '5130005017724' },
        { label: '所在地', value: '京都府京都市左京区田中大堰町13' },
        { label: '登記', value: '2026年7月（学生団体としての設立は2024年3月）' },
        { label: '代表理事', value: '三上 透輝' },
    ]

    return (
        <section>
            <SectionHeading en='Corporate' index={5}>
                法人概要
            </SectionHeading>
            <div>
                <dl className='divide-y divide-gray-200 border-gray-200 border-t border-b'>
                    {items.map(({ label, value }) => (
                        <div className='flex flex-col gap-1 px-4 py-4 sm:flex-row sm:gap-6' key={label}>
                            <dt className='shrink-0 text-gray-600 text-sm sm:w-28'>{label}</dt>
                            <dd className='flex-1'>{value}</dd>
                        </div>
                    ))}
                    <div className='flex flex-col gap-1 px-4 py-4 sm:flex-row sm:gap-6'>
                        <dt className='shrink-0 text-gray-600 text-sm sm:w-28'>お問い合わせ</dt>
                        <dd className='flex-1 break-all'>
                            <a className='underline underline-offset-4' href={`mailto:${siteSettings.mail_address}`}>
                                {siteSettings.mail_address}
                            </a>
                        </dd>
                    </div>
                    <div className='flex flex-col gap-1 px-4 py-4 sm:flex-row sm:gap-6'>
                        <dt className='shrink-0 text-gray-600 text-sm sm:w-28'>目的</dt>
                        <dd className='flex-1 text-sm leading-relaxed'>
                            当法人は、自己実現と社会貢献の両立を志す京都大学の学生を中心とした若者を対象に、自らのビジョンを発見し追求する力を育む場を提供することにより、ビジネス・行政・文化等あらゆる分野において次代の社会の仕組みを構想し実現する人材を輩出することを目的とする。
                            <span className='mt-2 block text-gray-600 text-xs'>（定款 第3条）</span>
                        </dd>
                    </div>
                </dl>
                {/* 代表理事は任期で変わるため、いつ時点の情報かを明示する */}
                <p className='mt-3 px-4 text-right text-gray-600 text-xs'>※{STATS_AS_OF}現在</p>
                <p className='mt-6 px-4 text-gray-600 text-sm'>
                    学生団体としての活動が先にあり、法人はその運営基盤として設立したものです。
                </p>
            </div>
        </section>
    )
}
