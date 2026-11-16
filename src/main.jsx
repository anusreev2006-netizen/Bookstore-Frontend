import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { GoogleOAuthProvider } from '@react-oauth/google'
import ShareContext from './contextAPI/ShareContext.jsx'
import RouteGaurd from './contextAPI/RouteGaurd.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <GoogleOAuthProvider clientId='1023719483450-ddvmbp8cdputlj1fndnr6s89p853mo7c.apps.googleusercontent.com'>
      
     <ShareContext>
      <RouteGaurd>
       <App /> 
      </RouteGaurd>
     </ShareContext>
    </GoogleOAuthProvider>
    </BrowserRouter>
    
  </StrictMode>,
)
