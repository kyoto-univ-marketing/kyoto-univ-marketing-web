import { aboutFounderPage, aboutMembersPage } from '@/constants/aboutPages'
import pageLinks from '@/constants/pageLinks'
import { getSiteSettings } from '@/lib/microcms'

import { MailAndSNS } from '../MailAndSNS/MailAndSNS'
import { NextLink } from '../NextLink/NextLink'

/**
 * フッター。
 *
 * 上端の円弧はやめている。直前が紺のCTAになるページでは、円弧の脇に白が残って
 * 「隙間が空いている」ように見えるため。サイト全体で角丸を使っていないことともそろう。
 */
export const Footer = async () => {
    const siteSettings = await getSiteSettings()
    return (
        <footer className='flex w-full flex-col items-center overflow-x-hidden text-primary-foreground'>
            <div className='flex w-full flex-col items-center justify-evenly gap-12 bg-primary px-12 pt-16 pb-12 md:flex-row-reverse md:pb-18'>
                {/* 2列は横ではなく縦に流す（columns）。団体概要の下層を団体概要のすぐ下に続けて並べるため。
                    grid の横並びだと、下層の分だけ団体概要の行だけが高くなり、隣の列がずれる */}
                <ul className='w-full max-w-96 md:columns-2 md:gap-8'>
                    {pageLinks.map((link) => (
                        <li className='mb-4 break-inside-avoid' key={link.href}>
                            <NextLink href={link.href}>{link.text}</NextLink>
                            {/* 団体概要の下層。ヘッダーには入れず、フッターにだけ置く（2026-11-08 本人「団体概要の中の階層に見えるように」）。
                                全ページから発起人の言葉へ1本つながり、「迫田周大」の検索で団体概要と食い合うのを和らげる */}
                            {link.href === '/about' && (
                                <ul className='mt-3 ml-1 space-y-3 border-primary-foreground/30 border-l pl-4 text-primary-foreground/80 text-sm'>
                                    {[aboutFounderPage, aboutMembersPage].map((sub) => (
                                        <li key={sub.href}>
                                            <NextLink href={sub.href}>{sub.text}</NextLink>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>
                <div className='md:max-w-1/2'>
                    <div className='mb-4 hidden font-title text-title md:block'>
                        <span className='inline-block'>京大</span>
                        <span className='inline-block'>マーケティング</span>
                        <span className='inline-block'>研究所</span>
                    </div>
                    <MailAndSNS
                        instagramUrl={siteSettings.instagram_url}
                        mailAddress={siteSettings.mail_address}
                        snsIconSize={24}
                    />
                </div>
            </div>
            <div className='w-full space-y-1 bg-primary px-6 pb-8 text-center text-primary-foreground/70 text-xs'>
                <p>京大マーケティング研究所（一般社団法人マーケティング研究所）</p>
                <p>京都府京都市左京区田中大堰町13 ／ 法人番号 5130005017724</p>
            </div>
        </footer>
    )
}
