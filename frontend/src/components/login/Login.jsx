import React, { useState } from "react";
import useLogin from "../../hooks/useLogin";
import { Link } from "react-router-dom";
import { VscEye } from "react-icons/vsc";
import { VscEyeClosed } from "react-icons/vsc";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [ShowPassword, SetShowPassword] = useState(false);
  const { loading, login } = useLogin();
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(username);
    await login(username, password);
  };

  return (
    <div className="bg-backgroundImg h-screen no-repeat bg-center bg-cover w-screen flex flex-col justify-center items-center">
      <form onSubmit={handleSubmit}>
        <div className="rounded-md border border-gray-500 justify-center items-center p-5 mb-20  bg-red-400">
          <h1 className="text-3xl font-bold text-white mb-8 text-center">
            Login
          </h1>
          {/* <label className="label p-2">
            <span className="text-base label-text ">Username</span>
          </label> */}
          <input
            type="text"
            placeholder="Enter Username"
            className="w-full input input-bordered border-2 border-gray-200 h-10 my-5 bg-slate-100"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          {/* <label className="label p-2">
            <span className="text-base label-text">Password</span>
          </label> */}
          <div className="relative">
            <input
              type={ShowPassword ? "text" : "password"}
              placeholder="Enter Password"
              className="w-full input input-bordered h-10 mt-3 border-2 border-gray-200 bg-slate-100 pr-9"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div
              className="absolute inset-y-0 end-0 flex mt-4 items-center pe-3 text-gray-500"
              onClick={() => SetShowPassword(!ShowPassword)}
            >
              {ShowPassword ? <VscEyeClosed /> : <VscEye />}
            </div>
          </div>
          <p className="m-2 font-serif text-sm font-thin px-3">
            Don't have an account?{" "}
            <Link to="/signup" className="text-blue-700 underline">
              Register here
            </Link>
          </p>

          <button
            className="w-48 p-1 rounded-full font-semibold flex justify-center ml-9 mt-7  text-red-500 bg-white hover:bg-slate-200"
            disabled={loading}
          >
            {loading ? (
              <span className="loading loading-spinner "></span>
            ) : (
              "Login"
            )}
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
