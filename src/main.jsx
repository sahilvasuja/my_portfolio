import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='bg-green-600 h-screen'>

    <App />
    </div>
  </StrictMode>,
)
