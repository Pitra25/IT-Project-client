import { HomePaths } from '../../features/hom/routes/hom.paths.ts'
import { ClusterPaths } from '../../features/cluster/routes/cluster.paths.ts'
import { ContactsPaths } from '../../features/contacts/routes/contacts.paths.ts'
import { ServicesPaths } from '../../features/services/routes/services.paths.ts'
import { AdminPaths } from "../../features/admin/routes/admin.paths.ts"
import { authPaths } from '../../features/auth/routes/auth.paths.ts'

export const pathsConfig = {
    ...HomePaths,
    ...ClusterPaths,
    ...ContactsPaths,
    ...ServicesPaths,
    ...AdminPaths,
    ...authPaths
}
