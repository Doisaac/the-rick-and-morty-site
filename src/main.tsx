import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import TheRickyAndMortySite from './TheRickyAndMortySite.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TheRickyAndMortySite />
  </StrictMode>
)
