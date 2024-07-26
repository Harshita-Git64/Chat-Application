import React from 'react'
import { IoSearchOutline } from "react-icons/io5";

function ContactCard() {
  return (
    <>
    <div className='flex gap-5 hover:bg-slate-400 items-center rounded-lg cursor-pointer'>
   <button type='submit' className='btn btn-circle bg-blue-300'><IoSearchOutline className='w-8 h-8'/></button>
   <p>John Doe</p>
    </div>
    <div className='divider h-1 my-0 py-0'></div>
    </>
  )
}

export default ContactCard