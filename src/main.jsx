import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './assets/styles/index.css'
import { ThemeProvider } from '@material-tailwind/react'
import { Provider } from 'react-redux'
import store from './redux/store.js'
import { Toaster } from 'react-hot-toast';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <Provider store={store}>
        <Toaster />
        <App />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
)
