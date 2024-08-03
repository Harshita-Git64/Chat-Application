import React from "react";
import { useAuthContext } from "../../context/AuthContext";
import useConversation from "../../zustand/useConversation";

function Message({message}) {
  const{authUser}=useAuthContext();
  const{selectedConversation,messages}=useConversation();
  const chatUser= selectedConversation._id===message.receiverId;// receiver
  const loggedInUser=authUser._id===message.senderId;// sender(us)
  const chatTheme=loggedInUser?"chat-end":"chat-start"
  const chatBgColor=loggedInUser?" bg-blue-600":" bg-green-500"
  return (

    <div className={`chat ${chatTheme} m-2`}>
      {/* <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS chat bubble component"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
          />
        </div>
      </div> */}
      
      <div className={`chat-bubble text-white ${chatBgColor}`}>{message.message}</div>
      <div className="chat-footer opacity-50">Seen at 12:46</div>
    </div>
  );
}

export default Message;
