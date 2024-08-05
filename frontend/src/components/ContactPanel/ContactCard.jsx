import React from "react";
import useConversation from "../../zustand/useConversation";
import { useSocketContext } from "../../context/SocketContext";

function ContactCard({ user, lastIdx }) {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const isSelectedUser = selectedConversation?._id === user._id;
  const { onlineUsers } = useSocketContext();
  const isOnline = onlineUsers.includes(user._id);
  console.log("all online users", onlineUsers);

  return (
    <>
      <div
        className={`flex gap-6 hover:bg-sky-300 items-center rounded-lg cursor-pointer p-1 ${
          isSelectedUser ? "bg-sky-300" : " "
        }`}
        onClick={() => setSelectedConversation(user)}
      >
        <div
          className={`avatar ${
            isOnline ? "online" : " "
          } ring-2 ring-offset-base-100 rounded-full ring-offset-1 h-10 w-10 `}
        >
          <img src={user.profilePic} alt="profilepic"></img>
        </div>
        <p className="font-medium">{user.fullName}</p>
      </div>
      {!lastIdx && <div className="divider h-1 my-0"></div>}
    </>
  );
}

export default ContactCard;
