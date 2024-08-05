import React, { useState } from "react";
import { LuSendHorizonal } from "react-icons/lu";
import useSendMessage from "../../hooks/useSendMessage";

function SendMessageBox() {
  const [message, SetText] = useState("");
  const { loading, sendMessage } = useSendMessage();
  const handleMessages = async (e) => {
    e.preventDefault();
    if (!message) return;
    await sendMessage(message);
    SetText("");
  };

  return (
    <form className="px-4 my-3" onSubmit={handleMessages}>
      <div className="w-full relative ">
        <input
          type="text"
          className="border text-sm rounded-lg block w-full p-2.5  bg-gray-700 border-gray-600 text-white pr-10"
          name={message}
          placeholder="Send a message"
          value={message}
          onChange={(val) => SetText(val.target.value)}></input>
        <button
          type="submit"
          className="absolute inset-y-0 end-0 flex items-center pe-3 text-gray-300">
          <LuSendHorizonal className="w-6 h-5" />
        </button>
      </div>
    </form>
  );
}

export default SendMessageBox;
