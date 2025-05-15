import { type FC } from 'react'
import { Navigate, Outlet, useLocation  } from 'react-router-dom'

import { Header, Footer} from '@/components'
import { pathsConfig } from '@/pathsConfig'
import { useAuth } from '../features/auth/hooks/useAuth'
import { ContentWrapper, RouterProtectWrapper } from "./RouterProtect.styled.ts"

const RouterProtect: FC = () => {
    const { isAuth } = useAuth()
    const { pathname } = useLocation()

    // if (!isAuth && (pathname === pathsConfig.admin)) {
    //     return <Navigate to={pathsConfig.home} replace />
    // }

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
