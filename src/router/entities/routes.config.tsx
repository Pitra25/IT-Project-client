import NotFound404 from '../../pages/NotFound404'
import Layout from '../../containers/Layout'

import { pathsConfig } from '@/pathsConfig'
import RouterProtect from '../RouterProtect.tsx'

import { homeRoutes } from '../../features/hom/routes/hom.routes.tsx'
import { clusterRoutes } from '../../features/cluster/routes/cluster.routes.tsx'
import { contactsRoutes } from '../../features/contacts/routes/contacts.routes.tsx'
import { servicesRoutes } from '../../features/services/routes/services.routes.tsx'
import { adminRoutes } from "../../features/admin/routes/admin.routes.tsx"
import { authRoutes } from '../../features/auth/routes/auth.routes.tsx'

export const routesConfig = [
    {
        element: <RouterProtect />,
        errorElement: <NotFound404 />,
        children: [
            {
                path: pathsConfig.home,
                element: <Layout />,
                children: [
                    ...homeRoutes,
                    ...clusterRoutes,
                    ...contactsRoutes,
                    ...servicesRoutes,
                    ...adminRoutes,
                    ...authRoutes
                ]
            }
        ]
    }
]
