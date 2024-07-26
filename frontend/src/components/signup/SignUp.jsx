import React, { useState } from "react"; 
import useSignup from "../../hooks/useSignup";
import GenderCheckBox from "./GenderCheckBox";


function SignUp() {

const[inputs,setInput]=useState({
  fullName:"",
  username:"",
  password:"",
  confirmPassword:"",
  gender:""
})
const{loading,signup}=useSignup();

async function handleSubmit(e){
e.preventDefault()
await signup(inputs)

}
  return (
    <div className="bg-hero bg-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.2)) h-screen no-repeat bg-center bg-cover w-screen flex flex-col justify-center items-center p-4">
      <h1 className="text-3xl font-bold text-black mb-8 font-serif">SignUp</h1>

      <form onSubmit={handleSubmit}>
        <div className="rounded-md border border-gray-500 justify-center items-center p-5 mb-20 backdrop-blur bg-orange-300">

        <label className="label p-2">
            <span className="text-base label-text ">FullName</span>
          </label>
          <input
            type="text"
            placeholder="Enter FullName"
            className="w-full input input-bordered h-10"
            value={inputs.fullName}
            onChange={(e)=>setInput({...inputs,fullName:e.target.value})}
          />


          <label className="label p-2">
            <span className="text-base label-text ">Username</span>
          </label>
          <input
            type="text"
            placeholder="Enter username"
            className="w-full input input-bordered h-10"
            value={inputs.username}
            onChange={(e)=>setInput({...inputs,username:e.target.value})}
          />

          <label className="label p-2">
            <span className="text-base label-text">Password</span>
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            className="w-full input input-bordered h-10"
            value={inputs.password}
            onChange={(e)=>setInput({...inputs,password:e.target.value})}
          />
  
          <label className="label p-2">
            <span className="text-base label-text">Confirm Password</span>
          </label>
          <input
            type="password"
            placeholder="Enter Confirm Password"
            className="w-full input input-bordered h-10"
            value={inputs.confirmPassword}
            onChange={(e)=>setInput({...inputs,confirmPassword:e.target.value})}
          />
           <GenderCheckBox/>
          <p className="mt-2 text-base label-text">Already have an account? Login here </p>
         
          <button className='btn btn-block btn-sm mt-2 text-base label-text'>
							SignUp
						</button>
        </div>
      </form>

      
    </div>
  );
}

export default SignUp;
