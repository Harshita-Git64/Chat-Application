import React from 'react'
import SearchBar from './SearchBar'
import ContactList from './ContactList'
import UserInfo from './UserInfo'

function ContactPanel() {
  return (
    <div className='flex flex-col w-1/3 border border-red-400 rounded-md m-3 bg-slate-50 p-4' >
        <UserInfo/>
        <p>chats</p>
        <SearchBar/>
        <div className='divider px-3'></div>
        <ContactList/>
       

    </div>
  )
}

export default ContactPanel