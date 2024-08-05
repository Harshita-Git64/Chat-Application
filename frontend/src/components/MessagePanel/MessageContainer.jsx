import React, { useEffect } from "react";
import Messages from "./Messages";
import SendMessageBox from "./SendMessageBox";
import { IoChatbubblesOutline } from "react-icons/io5";
import useConversation from "../../zustand/useConversation";
import { useAuthContext } from "../../context/AuthContext";

function MessageContainer() {
  const { selectedConversation, setSelectedConversation } = useConversation(); // contains user detail when got tapped
  useEffect(() => {
    return () => setSelectedConversation(null);
  }, [setSelectedConversation]);

  return (
    <div className="flex flex-col m-3 w-[900px] rounded-md border border-gray-300 bg-message-bg">
      {!selectedConversation ? (
        <NoChatSelected />
      ) : (
        <>
          {/* ProfileHeader */}
          <div className="flex gap-5 items-center backdrop-blur-sm p-2 px-5">
            <img
              src={selectedConversation.profilePic}
              alt="profilepic"
              className="ring-2 ring-offset-base-100  rounded-full ring-offset-1 h-10 w-10"
            ></img>
            <span className="font-medium">{selectedConversation.fullName}</span>
          </div>
          <Messages />
          <SendMessageBox />
        </>
      )}
    </div>
  );
}

const NoChatSelected = () => {
  const { authUser } = useAuthContext();

  return (
    <div className="flex flex-col items-center justify-center text-center backdrop-blur-sm h-full w-full font-medium font-sans text-2xl">
      <p>Welcome {authUser.fullName}👋🏻!!</p>
      <span>Select a chat to start messaging</span>
      <IoChatbubblesOutline className="h-12 w-12" />
    </div>
  );
};
export default MessageContainer;
