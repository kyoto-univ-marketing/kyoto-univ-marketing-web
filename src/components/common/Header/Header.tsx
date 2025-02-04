import { FC } from 'react'
import { Navigation } from '../Navigation/Navigation'

export interface HeaderProps {}

export const Header: FC<HeaderProps> = ({ ...props }) => {
    return (
        <header className='sticky top-0 z-50' id='header'>
            <Navigation />
        </header>
    )
}
