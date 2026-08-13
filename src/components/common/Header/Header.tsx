import { FC } from 'react'
import { Navigation } from '../Navigation/Navigation'

export interface HeaderProps {}

/**
 * ヘッダー。
 *
 * トップページで一度は透過にしたが、ヒーローの写真に手を加えない方針にしたため
 * （＝白膜がなく文字が読めない）、常に紺の帯に戻した。
 * ヒーローの紺のパネルと地続きに見える利点もある。
 */
export const Header: FC<HeaderProps> = ({ ...props }) => {
    return (
        <header className='sticky top-0 z-50 bg-primary' id='header'>
            <Navigation />
        </header>
    )
}
