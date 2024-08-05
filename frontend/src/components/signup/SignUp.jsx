import React, { useState } from "react"; 
import useSignup from "../../hooks/useSignup";
import GenderCheckBox from "./GenderCheckBox";
import { Link } from "react-router-dom";
import { VscEye } from "react-icons/vsc";
import { VscEyeClosed } from "react-icons/vsc";


function SignUp() {

const[inputs,setInput]=useState({
  fullName:"",
  username:"",
  password:"",
  confirmPassword:"",
  gender:""
})
const {loading,signup}=useSignup();
const [ShowPassword,SetShowPassword]=useState(false)
const [ShowConfirmPassword,SetConfirmPassword]=useState(false)

const handleGenderChange=(gender)=>{
  setInput({...inputs,gender})
}

async function handleSubmit(e){
e.preventDefault()
await signup(inputs)
}
  return (
    <div className="bg-backgroundImg bg-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.2)) h-screen no-repeat bg-center bg-cover w-screen flex flex-col justify-center items-center p-4">
      <form onSubmit={handleSubmit}>
        <div className="rounded-md border border-gray-500 justify-center items-center p-6 mb-10 backdrop-blur bg-red-400">
                   <h1 className="text-3xl font-bold text-white mb-8 flex justify-center">Register</h1>
        <label className="label">
            <span className="text-base label-text ">FullName</span>
          </label>
          <input
            type="text"
            placeholder="Enter your FullName"
            className="w-full input input-bordered h-10 bg-slate-100"
            value={inputs.fullName}
            onChange={(e)=>setInput({...inputs,fullName:e.target.value})}
          />

          <label className="label">
            <span className="text-base label-text ">Username</span>
          </label>
          <input
            type="text"
            placeholder="Enter username"
            className="w-full input input-bordered h-10  bg-slate-100"
            value={inputs.username}
            onChange={(e)=>setInput({...inputs,username:e.target.value})}
          />

         
  
  <div className="relative">
  <label className="label">
            <span className="text-base label-text">Password</span>
          </label>
          <input
            type={ShowPassword?"text":"password"}
            placeholder="Enter Password"
            className="w-full input input-bordered h-10  border-2 border-gray-200 bg-slate-100  pr-9"
            value={inputs.password}
            onChange={(e)=>setInput({...inputs,password:e.target.value})}/>
            <div className="absolute inset-y-0 end-0 flex mt-10 items-center pe-3 text-gray-500" onClick={()=>SetShowPassword(!ShowPassword)}>{ShowPassword? <VscEyeClosed/>:<VscEye/>}</div>
         </div>

         <div className="relative">
  <label className="label">
            <span className="text-base label-text">Confirm Password</span>
          </label>
          <input
            type={ShowConfirmPassword?"text":"password"}
            placeholder="Retype Password"
            className="w-full input input-bordered h-10  border-2 border-gray-200 bg-slate-100  pr-9"
            value={inputs.confirmPassword}
            onChange={(e)=>setInput({...inputs,confirmPassword:e.target.value})}/>
            <div className="absolute inset-y-0 end-0 flex mt-10 items-center pe-3 text-gray-500" onClick={()=>SetConfirmPassword(!ShowConfirmPassword)}>{ShowConfirmPassword? <VscEyeClosed/>:<VscEye/>}</div>
         </div>

         
           <GenderCheckBox onClickCheckBox={handleGenderChange} selectedGender={inputs.gender}/>
          <p className="label-text font-serif text-sm font-thin px-5">Already have an account? <Link to='/login'  className="text-blue-700 underline">Login here </Link></p>
         
            <button className='w-48 p-1 rounded-full mt-4 border text-red-500 bg-white font-semibold text-center ml-8 hover:bg-slate-200' disabled={loading}>
							{loading ? <span className='loading loading-spinner'></span> : "Sign Up"}
						</button>
        </div>
      </form>

      
    </div>
  );
}

export default SignUp;
