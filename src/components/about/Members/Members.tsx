import Image from 'next/image'
import { FC } from 'react'

import { Reveal } from '@/components/common/Reveal/Reveal'
import { type Member, presidents } from '@/constants/members'

/**
 * 歴代代表の紹介。発起人（初代）は個別ページがあるのでここには載せない。
 *
 * 英字（2nd President など）はあくまで装飾で、**日本語の役割名・氏名・ふりがなを必ず本文に残す**。
 * 英字だけにすると、日本語で調べた人がたどり着く手がかりが消える。
 * 構造化データ（Person）は発起人の個別ページ側に置いてある。
 */
export const Members: FC = () => (
    <div className='space-y-16'>
        {presidents.map((member, i) => (
            <MemberItem key={member.name} member={member} order={i} />
        ))}
    </div>
)

const MemberItem: FC<{ member: Member; order: number }> = ({ member, order }) => {
    const { en, role, name, reading, faculty, enrolledYear, image, catchphrase, lead, message } = member
    const hasWords = catchphrase !== '' || lead.length > 0 || message.length > 0

    return (
        <Reveal className='space-y-8' delay={order * 80}>
            <div className='flex flex-col gap-6 sm:flex-row sm:gap-10'>
                <div className='mx-auto w-full max-w-48 shrink-0 sm:mx-0 sm:w-48'>
                    <Image
                        {...image}
                        alt={`${role} ${name}（${reading}）`}
                        className='aspect-square w-full object-cover'
                        sizes='(max-width: 640px) 60vw, 192px'
                    />
                </div>
                <div className='flex-1 space-y-2 self-center'>
                    <p className='font-en text-brand-accent text-xs uppercase tracking-[0.35em]'>{en}</p>
                    <p className='text-gray-600 text-sm'>{role}</p>
                    <h3 className='font-title text-heading leading-snug'>
                        {name}
                        <span className='ml-3 align-middle text-base text-gray-600'>{reading}</span>
                    </h3>
                    <p className='text-gray-600 text-sm'>
                        {faculty} {enrolledYear}年入学
                    </p>
                </div>
            </div>

            {hasWords && (
                <div className='space-y-8 sm:pl-58'>
                    {catchphrase && (
                        <div className='space-y-3'>
                            <p className='font-en text-brand-accent text-xs uppercase tracking-[0.3em]'>
                                In a Word
                            </p>
                            <p className='font-title text-lg leading-relaxed'>「{catchphrase}」</p>
                            <div className='space-y-3 text-justify text-gray-700'>
                                {lead.map((line) => (
                                    <p key={line}>{line}</p>
                                ))}
                            </div>
                        </div>
                    )}
                    {message.length > 0 && (
                        <div className='space-y-3 border-gray-200 border-l-2 pl-6'>
                            <p className='font-en text-brand-accent text-xs uppercase tracking-[0.3em]'>
                                To Candidates
                            </p>
                            <p className='font-title text-base'>入会を考えている方へ</p>
                            <div className='space-y-3 text-justify text-gray-700'>
                                {message.map((line) => (
                                    <p key={line}>{line}</p>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            )}
        </Reveal>
    )
}
