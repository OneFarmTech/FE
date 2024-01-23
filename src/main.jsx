import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './assets/styles/index.css'
import { ThemeProvider } from '@material-tailwind/react'
import { Provider } from 'react-redux'
import store from './redux/store.js'
import { Toaster } from 'react-hot-toast';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <Provider store={store}>
        <Toaster />
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
)
