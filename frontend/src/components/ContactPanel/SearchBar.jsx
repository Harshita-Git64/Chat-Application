import React, { useState } from 'react'
import { IoSearchOutline } from "react-icons/io5";
import useGetConversations from '../../hooks/useGetConversations';
import useConversation from '../../zustand/useConversation';
import toast from 'react-hot-toast';

function SearchBar() {
  const[searchUser,setSearchUser]=useState("")
  const{userList}=useGetConversations();
  const {setSelectedConversation}=useConversation();

  const handleSubmit=(e)=>{
    e.preventDefault()
    if(!searchUser)return;
    if(searchUser.length<3){
      return toast.error("search terms must be atleast 3 characters long")
    }
    const selectedUser=userList.find((user)=>user.fullName.toLowerCase().includes(searchUser.toLowerCase()));
    if (selectedUser) {
			setSelectedConversation(selectedUser);
			setSearchUser("");
		} 
    else toast.error("No such user found!");
   
  }
  return (
    // <div className='flex items-center justify-center gap-3 mb-10'>
      <form className='flex items-center justify-center gap-3 mb-10' onSubmit={handleSubmit}>
    <input className='border border-gray-300 input input-info w-full' type='text' value={searchUser} onChange={(e)=>setSearchUser(e.target.value)}></input>
    <button type='submit' className='btn btn-circle bg-blue-300'><IoSearchOutline className='w-8 h-8'/></button>
    </form>
    // </div>
  )
}

export default SearchBar