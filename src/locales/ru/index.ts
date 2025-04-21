import Global from './Global.json'

// Pages
import Hom from './pages/Hom.json'
import Cluster from './pages/Cluster.json'
import Services from './pages/Services.json'
import Login from './pages/Login.json'

// Card
import Events from './components/events/Contents.json'
import Residents from './components/residents/Contents.json'

// organizations
import Organizations from './components/organizations/Contents.json'

export const translationRu = {
    ...Global,
    ...Hom, ...Cluster, ...Services, ...Login,
    ...Events, ...Residents,
    ...Organizations,
}