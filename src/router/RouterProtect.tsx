import { type FC } from 'react'
import { Outlet } from 'react-router-dom'

import { Header, Footer} from '@/components'
import {ContentWrapper, RouterProtectWrapper} from "./RouterProtect.styled.ts";

const RouterProtect: FC = () => {
    return (
        <RouterProtectWrapper>
            <Header />
            <ContentWrapper>
                <Outlet />
            </ContentWrapper>
            <Footer />
        </RouterProtectWrapper>
    )
}

export default RouterProtect
