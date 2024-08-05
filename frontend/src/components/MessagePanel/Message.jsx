import React from "react";
import { useAuthContext } from "../../context/AuthContext";
import useConversation from "../../zustand/useConversation";
import { extractTime } from "../../utils/extractTime";

function Message({ message }) {
  const { authUser } = useAuthContext();
  const { selectedConversation, messages } = useConversation();
  const chatUser = selectedConversation._id === message.receiverId; // receiver
  const formattedTime = extractTime(message.createdAt);
  const loggedInUser = authUser._id === message.senderId; // sender(us)
  const chatTheme = loggedInUser ? "chat-end" : "chat-start";
  const chatBgColor = loggedInUser ? " bg-blue-600" : " bg-green-500";
  return (
    <div className={`chat ${chatTheme} m-2`}>
      <div className={`chat-bubble text-white ${chatBgColor}`}>
        {message.message}
      </div>
      <div className="chat-footer opacity-80 text-xs">{formattedTime}</div>
    </div>
  );
}

export default Message;
