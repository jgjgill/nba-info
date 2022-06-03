import ReactDOM from 'react-dom/client'
import React from 'react'

import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

import reportWebVitals from './reportWebVitals'
import './styles/index.scss'
import App from 'routes'

const queryClient = new QueryClient({
  defaultOptions: { queries: { refetchOnMount: false, suspense: true } },
})

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  // <React.StrictMode>
  <QueryClientProvider client={queryClient}>
    <ReactQueryDevtools />
    <App />
  </QueryClientProvider>
  // </React.StrictMode>
)

reportWebVitals()
