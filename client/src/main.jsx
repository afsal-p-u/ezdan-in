import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
// import axios from 'axios'

import './index.css'
import App from './App.jsx'
import { AuthContextProvider } from './contexts/AuthContext.jsx'
import { CartContextProvider } from './contexts/CartContext.jsx'

// axios.defaults.baseURL = "http://localhost:5000/api"

createRoot(document.getElementById('root')).render(
  <AuthContextProvider>
    <CartContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CartContextProvider>
  </AuthContextProvider>
)
