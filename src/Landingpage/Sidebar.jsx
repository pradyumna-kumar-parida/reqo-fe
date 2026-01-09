import React from "react";

const Sidebar = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  const fullName = user
    ? `${user.firstName.toUpperCase()} ${user.lastName.toUpperCase()}`
    : "";

  return (
    <div className="h-full flex flex-col">
      {/* Profile Header */}
      <div className="flex items-center gap-3 p-4 bg-black">
        <img
          src="https://cdn-icons-png.flaticon.com/128/19006/19006438.png"
          alt="profile"
          className="w-10 h-10 rounded-full"
        />
        <span className="font-semibold text-white">{fullName}</span>
      </div>
      <div className="px-3 py-5">
        <input
          type="text"
          placeholder="Search your friends..."
          className="p-3 rounded-md  bg-[#2a3942] outline-none"
        />
      </div>

      {/* Chat List */}
      <div className="flex-1 overflow-y-auto">
        <ChatItem name="Niku 😁" message="Hero bhai" />
        <ChatItem name="Raja" message="Aare bhai..." />
        <ChatItem name="Apna" message="HR has..." />
      </div>
    </div>
  );
};

const ChatItem = ({ name, message }) => (
  <div className="flex items-center gap-3 p-4 hover:bg-[#5154552a] cursor-pointer">
    <img
      src="https://i.pravatar.cc/35"
      alt="user"
      className="w-9 h-9 rounded-full"
    />
    <div>
      <p className="font-medium">{name}</p>
      <p className="text-sm text-gray-400 truncate">{message}</p>
    </div>
  </div>
);

export default Sidebar;
