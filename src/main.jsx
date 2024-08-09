import React from 'react'
import ReactDOM from 'react-dom/client'
import { GoogleOAuthProvider } from '@react-oauth/google';

import App from './App.jsx'
// import './index.css'
import './normalize.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  
  <GoogleOAuthProvider clientId="904206566696-358adnfm835o621bume8plmuj64a2oim.apps.googleusercontent.com">
      <React.StrictMode>
          <App />
      </React.StrictMode>
  </GoogleOAuthProvider>
)

 