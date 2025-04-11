import { AdminPaths } from './admin.paths.ts'
import Admin from "../pages";

export const adminRoutes = [
    {
        path: AdminPaths.admin,
        element: <Admin />
    }
]
