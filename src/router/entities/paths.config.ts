import { HomPaths } from '../../features/hom/routes/hom.paths.ts'
import { ClusterPaths } from '../../features/cluster/routes/cluster.paths.ts'
import { ContactsPaths } from '../../features/contacts/routes/contacts.paths.ts'
import { ServicesPaths } from '../../features/services/routes/services.paths.ts'

export const pathsConfig = {
    ...HomPaths,
    ...ClusterPaths,
    ...ContactsPaths,
    ...ServicesPaths
}
