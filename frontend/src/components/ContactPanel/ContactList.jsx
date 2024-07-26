import React from 'react'
import ContactCard from './ContactCard'

function ContactList() {
  return (
    <div className='flex flex-col gap-1 w-full overflow-auto relative'>
      <ContactCard/>
      <ContactCard/>
      <ContactCard/>
      <ContactCard/>
      <ContactCard/>
      <ContactCard/>
      <ContactCard/>
      <ContactCard/>
      <ContactCard/>
      <ContactCard/>

     
    </div>
  )
  
}

export default ContactList