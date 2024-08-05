import React, { useState } from "react";
import toast from "react-hot-toast";
import useConversation from "../zustand/useConversation";

function useSendMessage() {
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selectedConversation } = useConversation();

  const sendMessage = async (message) => {
    setLoading(true);
    try {
      const res = await fetch(
        `http://localhost:5000/api/message/send/${selectedConversation._id}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ message }),
          credentials: "include",
        }
      );
      const data = await res.json();
      // console.log("data",data)
      if (data.error) {
        throw new Error(data.error);
      }
      await setMessages([...messages, data]);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  return { loading, sendMessage };
}

export default useSendMessage;
