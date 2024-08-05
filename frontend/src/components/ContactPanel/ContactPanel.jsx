import React from 'react'
import SearchBar from './SearchBar'
import ContactList from './ContactList'
import UserInfo from './UserInfo'

function ContactPanel() {
  return (
    <div className='flex flex-col w-1/3 border border-gray-300 rounded-md m-3 bg-slate-50 p-4' >
        <UserInfo/>
        <p className='font-semibold text-xl my-4'>Chats</p>
        <SearchBar/>
        <ContactList/>
    </div>
  )
}

export default ContactPanel