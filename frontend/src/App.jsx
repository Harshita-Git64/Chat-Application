import {Navigate,Routes,Route} from "react-router-dom"
import { useState } from 'react'
import './App.css'
import Login from './components/login/Login'
import SignUp from './components/signup/SignUp'
import HomePage from './components/Home/HomePage'
import { Toaster } from "react-hot-toast"
import { useAuthContext } from "./context/AuthContext"

function App() {
  const [count, setCount] = useState(0)
  const { authUser } = useAuthContext();
  
  return (
   <div className=''>
    <Routes>
      <Route path='/' element={authUser ? <HomePage /> : <Navigate to={"/login"} />} />
				<Route path='/login' element={authUser ? <Navigate to='/' /> : <Login />} />
				<Route path='/signup' element={authUser ? <Navigate to='/' /> : <SignUp />} />
    </Routes>
   <Toaster/>
   </div>
  )
}

export default App
