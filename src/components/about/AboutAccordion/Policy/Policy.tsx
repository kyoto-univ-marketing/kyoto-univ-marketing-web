import { FC } from 'react'

export interface PolicyProps {}

export const Policy: FC<PolicyProps> = ({ ...props }) => {
    return (
        <div className='space-y-12 p-4 text-2xl'>
            <div>
                <p>
                    一.
                    <br />
                    資産として、
                    <br />
                    経験と学びを紡ぐ
                </p>
            </div>
            <div>
                <p>
                    二.
                    <br />
                    &quot;京都発&quot;の
                    <br />
                    価値を創る
                </p>
            </div>
            <div>
                <p>
                    三.
                    <br />
                    理論と実践、
                    <br />
                    学生と社会
                    <br />
                    を結ぶ
                </p>
            </div>
            <div>
                <p>
                    四.
                    <br />
                    今やりたい、
                    <br />
                    今しかできない
                    <br />
                    ことを現す
                </p>
            </div>
        </div>
    )
}
