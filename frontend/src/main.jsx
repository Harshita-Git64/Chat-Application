import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import { AuthContextProvider } from './context/AuthContext'
import { SocketContextProvider } from './context/SocketContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  
    <BrowserRouter>
    <AuthContextProvider>
    <SocketContextProvider>
    <App />
    </SocketContextProvider>    
    </AuthContextProvider>
    </BrowserRouter>
    
)
