import React, { useState } from "react"; 
import useLogin from "../../hooks/useLogin";
import { Link } from "react-router-dom";


function Login() {
const[username,setUsername]=useState("")
const[password,setPassword]=useState("")
const{loading,login}=useLogin();
const handleSubmit=async(e)=>{
e.preventDefault();
console.log(username)
await login(username,password)
}

  return (
    <div className="bg-hero h-screen no-repeat bg-center bg-cover w-screen flex flex-col justify-center items-center p-4">
      <h1 className="text-3xl font-bold text-black mb-8 font-serif">Login</h1>

      <form onSubmit={handleSubmit}>
        <div className="rounded-md border border-gray-500 justify-center items-center p-5 mb-20 backdrop-blur bg-orange-300">
          <label className="label p-2">
            <span className="text-base label-text ">Username</span>
          </label>
          <input
            type="text"
            placeholder="Enter username"
            className="w-full input input-bordered h-10"
            value={username}
            onChange={(e)=>setUsername(e.target.value)}
          />

          <label className="label p-2">
            <span className="text-base label-text">Password</span>
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            className="w-full input input-bordered h-10"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
          />

          <p className="m-2 font-serif">Don't have an account? <Link to='/signup'>Register here</Link> 
          </p>
         
          {/* <button className='btn btn-block btn-sm mt-2'>
							Login
						</button> */}
            <button className='btn btn-block btn-sm mt-2' disabled={loading}>
							{loading ? <span className='loading loading-spinner '></span> : "Login"}
						</button>
        </div>
      </form>

      
    </div>
  );
}

export default Login;
