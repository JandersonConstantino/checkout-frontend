import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from 'core/App'

const element = document.getElementById('root') as HTMLElement
const root = ReactDOM.createRoot(element)

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
