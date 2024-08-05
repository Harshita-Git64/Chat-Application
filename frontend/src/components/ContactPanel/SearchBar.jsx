import React, { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import useGetConversations from "../../hooks/useGetConversations";
import useConversation from "../../zustand/useConversation";
import toast from "react-hot-toast";

function SearchBar() {
  const [searchUser, setSearchUser] = useState("");
  const { userList } = useGetConversations();
  const { setSelectedConversation } = useConversation();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!searchUser) return;
    if (searchUser.length < 3) {
      return toast.error("search terms must be atleast 3 characters long");
    }
    const selectedUser = userList.find((user) =>
      user.fullName.toLowerCase().includes(searchUser.toLowerCase())
    );
    if (selectedUser) {
      setSelectedConversation(selectedUser);
      setSearchUser("");
    } else toast.error("No such user found!");
  };
  return (
    <form
      className="flex items-center justify-center gap-2 mb-10"
      onSubmit={handleSubmit}
    >
      <input
        className="border border-gray-300 input input-info w-full"
        type="text"
        placeholder="Search User"
        value={searchUser}
        onChange={(e) => setSearchUser(e.target.value)}
      ></input>
      <button
        type="submit"
        className="rounded-full h-10 w-12 flex justify-center items-center"
      >
        <IoSearchOutline className="h-6 w-6" />
      </button>
    </form>
  );
}

export default SearchBar;
