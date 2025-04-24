import Global from './Global.json'

// Pages
import Hom_Page from './pages/Hom.json'
import Cluster_Page from './pages/Cluster.json'
import Services_Page from './pages/Services.json'
import Login_Page from './pages/Login.json'

// Card
import Events from './components/events/Contents.json'
import Residents from './components/residents/Contents.json'
import Services from './components/services/Contents.json'

// organizations
import Organizations from './components/organizations/Contents.json'

//aboutTheCluster
import AboutTheCluster from './components/aboutTheCluster/Contents.json'

export const translationRu = {
    ...Global,
    ...Hom_Page, ...Cluster_Page, ...Services_Page, ...Login_Page,
    ...Events, ...Residents, ...Services,
    ...Organizations, ...AboutTheCluster
}