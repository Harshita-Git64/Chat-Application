import React from 'react'
import { FiLogOut } from "react-icons/fi";

function UserInfo() {
  return (
    <div className='flex justify-between items-center'>
        <p >Harshita Paliwal</p>
        <div className="dropdown dropdown-bottom ">
  <div tabIndex={0} role="button" className="btn"><FiLogOut /></div>
  <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box shadow">
    <li><a>Logout</a></li>
  </ul>
</div>
    </div>
  )
}

export default UserInfo