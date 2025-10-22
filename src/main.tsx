import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './Home.tsx'
import '@progress/kendo-theme-material/dist/material-nova.css'
import './index.css'

// Kendo license is handled by the KENDO_UI_LICENSE environment variable during build
// The license key should be set in Netlify as KENDO_UI_LICENSE

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Home />
  </StrictMode>,
)

