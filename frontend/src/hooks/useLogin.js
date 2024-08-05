import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { useAuthContext } from '../context/AuthContext';
const API_URL = process.env.REACT_APP_API_URL;

function useLogin() {

const [loading,setLoading]=useState(false)
const { setAuthUser } = useAuthContext();

const login=async(username,password)=>{
const isValid=handleValidations(username,password)
if(!isValid) return;
console.log(username,password)
setLoading(true)
try {
    // const res = await fetch("http://localhost:5000/api/auth/login", {
        const res = await fetch(`${API_URL}//api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
        credentials: "include", 
    });
    const data = await res.json();
    if (data.error) {
        throw new Error(data.error);
    }
    localStorage.setItem("chat-user", JSON.stringify(data));
    setAuthUser(data);
    
} catch (error) {
    toast.error(error.message);
} finally {
    setLoading(false);
}
}
 return {loading,login}
}
function handleValidations(username,password){
   
    if(!username || !password ){
        toast.error("Fields can't be empty")
        return false;
    }
    if(password.length<6){
        toast.error("Password should not be less than 6 characters")
        return false;
    }
   return true;
}
export default useLogin;