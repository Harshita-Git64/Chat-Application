import React, { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

function useSignup() {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  const signup = async ({
    fullName,
    username,
    password,
    confirmPassword,
    gender,
  }) => {
    const isValid = handleValidations({
      fullName,
      username,
      password,
      confirmPassword,
      gender,
    });
    if (!isValid) return;
    setLoading(true);
    console.log("signup details", {
      fullName,
      username,
      password,
      confirmPassword,
      gender,
    });
    try {
      const res = await fetch("https://chat-application-7raa.onrender.com/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName,
          username,
          password,
          confirmPassword,
          gender,
        }),
      });

      // Check if the response status is not OK
      if (!res.ok) {
        console.log("!res.ok");
        throw new Error(`HTTP Error! status: ${res.status}`);
      }

      // Parse the JSON response
      const data = await res.json();
      console.log(data);

      if (data.error) {
        console.log("!data.error");
        throw new Error(data.error);
      }
      localStorage.setItem("chat-user", JSON.stringify(data));
      setAuthUser(data);
    } catch (error) {
      console.error("Error occurred:", error);
      toast.error("Error: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, signup };
}

function handleValidations({
  fullName,
  username,
  password,
  confirmPassword,
  gender,
}) {
  if (!fullName || !username || !password || !confirmPassword || !gender) {
    toast.error("Fields can't be empty");
    return false;
  }
  if (password.length < 6) {
    toast.error("Password should atleast 6 characters long");
    return false;
  }
  if (password != confirmPassword) {
    toast.error("Passwords does not match");
    return false;
  }
  toast.success("User Registered Successfully");
  return true;
}
export default useSignup;
