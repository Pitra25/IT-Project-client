import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { App } from 'antd'
import { ThemeProvider } from 'styled-components'
import { store } from './store/configureStore.ts'
import RouterProvider from './router/RouterProvider'
import './i18n';

import { baseTheme } from './core'
import GlobalStyle from './assets/css/global.ts'
import 'antd/dist/reset.css'
import 'react-toastify/dist/ReactToastify.css'
import '@coreui/coreui/dist/css/coreui.min.css'
import './assets/'

const container = document.getElementById('root') as HTMLElement
const root = createRoot(container)

root.render(
    <Provider store={ store }>
        <ThemeProvider theme={ baseTheme }>
            <App>
                <RouterProvider />
                <GlobalStyle />
            </App>
        </ThemeProvider>
    </Provider>
)
