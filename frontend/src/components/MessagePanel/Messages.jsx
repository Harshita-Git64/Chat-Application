import React, { useEffect, useRef } from "react";
import Message from "./Message";
import useGetMessages from "../../hooks/useGetMessages";
import MessageSkeleton from "../MessageSkeleton";
import useListenMessages from "../../hooks/useListenMessages";

function Messages() {
  const { messages, loading } = useGetMessages();
  useListenMessages();
  const lastMsgRef = useRef();
  useEffect(() => {
    setTimeout(() => {
      lastMsgRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 1000);
  }, [messages]);
  console.log("messages are", messages);
  return (
    <div className="flex-1 justify-end overflow-auto items-end">
      {!loading &&
        messages.length > 0 &&
        messages.map((message) => (
          <div key={message._id} ref={lastMsgRef}>
            <Message message={message} />
          </div>
        ))}
      {loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}
      {!loading && messages.length === 0 && (
        <p className="text-center">Send a message to start the conversation</p>
      )}
    </div>
  );
}

export default Messages;
