import React from "react";
import ContactPanel from "../ContactPanel/ContactPanel";
import MessageContainer from "../MessagePanel/MessageContainer";

export default function HomePage() {
  return (
    <div className="flex h-screen bg-backgroundImg">
      <ContactPanel />
      <MessageContainer />
    </div>
  );
}
