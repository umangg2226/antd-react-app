import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { DarkModeProvider, DrawerProvider } from './context'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <DarkModeProvider>
      <DrawerProvider>
        <App />
      </DrawerProvider>
    </DarkModeProvider>
  </React.StrictMode>
)

reportWebVitals()
