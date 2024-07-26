import React from 'react'
import { IoSearchOutline } from "react-icons/io5";

function SearchBar() {
  return (
    <div className='flex p-4 items-center justify-center gap-3'>
    <input className='border border-gray-400  input input-info w-full' type='text' ></input>
    <button type='submit' className='btn btn-circle bg-blue-300'><IoSearchOutline className='w-8 h-8'/></button>
    
    </div>
  )
}

export default SearchBar