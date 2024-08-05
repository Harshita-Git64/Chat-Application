import React from "react";
import { IoSearchOutline } from "react-icons/io5";

function ProfileHeader() {
  return (
    <div className="flex gap-5 items-center backdrop-blur-sm p-2 ">
      <span>
        <IoSearchOutline className="w-8 h-8" />
      </span>
      <span>John Doe</span>
    </div>
  );
}

export default ProfileHeader;
