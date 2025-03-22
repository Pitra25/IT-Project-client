import { createRoot } from 'react-dom/client'
import { ToastContainer } from 'react-toastify'
import { App } from 'antd'
import './i18n';
//import { useStores } from 'hooks/useStores'
import { ThemeProvider } from 'styled-components'
import RouterProvider from './router/RouterProvider'
import GlobalStyle from './assets/css/global.ts'

import { baseTheme } from './core'
import 'dayjs/locale/ru.js'
import 'antd/dist/reset.css'
import 'react-toastify/dist/ReactToastify.css'
import '@coreui/coreui/dist/css/coreui.min.css'
import './assets'

const container = document.getElementById('root') as HTMLElement
const root = createRoot(container)

//const { uiStore } = useStores()

root.render(
    <ThemeProvider theme={baseTheme}>
        <App>
            <ToastContainer autoClose={2000} theme='dark'/>
            <RouterProvider />
            <GlobalStyle />
        </App>
    </ThemeProvider>
)
