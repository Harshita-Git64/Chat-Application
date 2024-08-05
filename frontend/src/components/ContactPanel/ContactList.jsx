import React from "react";
import ContactCard from "./ContactCard";
import useGetConversations from "../../hooks/useGetConversations";

function ContactList() {
  const { loading, userList } = useGetConversations();
  console.log("Allusers", userList);
  return (
    <div className="flex flex-col gap-1 w-full overflow-auto relative">
      {userList.map((user, idx) => (
        <ContactCard
          key={user._id}
          user={user}
          lastIdx={idx === userList.length - 1}
        />
      ))}
      {loading ? (
        <span className="loading loading-spinner mx-auto"></span>
      ) : null}
    </div>
  );
}

export default ContactList;
