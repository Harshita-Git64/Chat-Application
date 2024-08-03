import React from 'react'
import ContactPanel from '../ContactPanel/ContactPanel'
import MessageContainer from '../MessagePanel/MessageContainer'

export default function HomePage() {
  return (
    <div className='flex outline-dotted m-1 h-screen rounded-sm bg-slate-200'>

<ContactPanel/>
<MessageContainer/>

    </div>
  )
}
