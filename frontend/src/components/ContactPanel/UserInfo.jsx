import React from "react";
import { FiLogOut } from "react-icons/fi";
import useLogout from "../../hooks/useLogout";
import { useAuthContext } from "../../context/AuthContext";

function UserInfo() {
  const { loading, logout } = useLogout();
  const { authUser } = useAuthContext();
  console.log("UserInfo", authUser);
  return (
    <div className="flex justify-between items-center">
      <div className="flex gap-4">
        <img
          src={authUser.profilePic}
          alt="profilepic"
          className="ring-2 ring-offset-base-100  rounded-full ring-offset-1 h-10 w-10"
        ></img>
        <p className="font-semibold text-lg mt-1">{authUser.fullName}</p>
      </div>

      <div
        tabIndex={0}
        role="button"
        className="btn text-gray-500  "
        title="logout"
        onClick={logout}
      >
        <FiLogOut />
      </div>
    </div>
  );
}

export default UserInfo;
