import { FC } from 'react'
import { Navigation } from '../Navigation/Navigation'
import { HeaderShell } from './HeaderShell'

export interface HeaderProps {}

export const Header: FC<HeaderProps> = ({ ...props }) => {
    return (
        <HeaderShell>
            <Navigation />
        </HeaderShell>
    )
}
