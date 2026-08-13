import { FC, ReactNode } from 'react'

export interface HeadingSubProps {
    children: ReactNode
}

/**
 * 見出しのうち、主題ではない部分を小さく淡くする。
 *
 * 「活動拠点：マーケハウス」の「活動拠点：」や、「セカンド原体験とは」の「とは」など、
 * 覚えて帰ってほしい言葉に添えているだけの部分に使う。
 *
 * 覚えてほしい言葉のほうに色や線を足すやり方は取らない。
 * 金にすると派手すぎ、下線は PageTitle の金の罫と二重になるため。
 * 添え物を引くほうが、言葉そのものが主役として残る。
 */
export const HeadingSub: FC<HeadingSubProps> = ({ children }) => (
    <span className='text-[0.72em] text-gray-500'>{children}</span>
)
