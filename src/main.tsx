import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './Home.tsx'
import '@progress/kendo-theme-material/dist/material-nova.css'
import './index.css'

// Set Telerik license from environment variable
const license = (import.meta as any).env?.TELERIK_LICENSE
if (license) {
  // @ts-ignore - Telerik license setup
  ;(window as any).kendo = (window as any).kendo || {}
  ;(window as any).kendo.licenseKey = license
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Home />
  </StrictMode>,
)

