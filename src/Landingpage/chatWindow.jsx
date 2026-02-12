import React from "react";
import { CiMenuKebab } from "react-icons/ci";
const ChatWindow = ({ user }) => {
  console.log("userrrr", user.firstName);

  return (
    <div className="h-full w-full flex flex-col">
      {/* Chat Header */}
      <div className="flex items-center justify-between gap-3 p-4 bg-[#95d6a4]">
        <span className="flex gap-3 items-center">
          <img
            src="https://i.pravatar.cc/40"
            alt="user"
            className="w-10 h-10 rounded-full"
          />
          <span className="flex flex-col gap-0">
            <p className="font-bold text-xl  text-black">
              {user?.firstName} {user?.lastName}
            </p>
            <h6 className="text-gray-600 text-sm">Online</h6>
          </span>
        </span>
        <i className="text-black font-extrabold text-2xl cursor-pointer">
          <CiMenuKebab />
        </i>
      </div>

      {/* Messages */}
      <div className="flex-1 p-4 space-y-3 overflow-y-auto bg-white">
        <div className="self-start bg-[#020617] px-3 py-2 rounded-lg w-fit">
          Hero bhai
        </div>

        <div className="self-end bg-[#9fa2a580] text-black px-3 py-2 rounded-lg w-fit ml-auto">
          Hello 😄 ,How are you ?
        </div>
      </div>

      {/* Input */}
      <div className="p-4 bg-[#0f172a] flex gap-2">
        <input
          type="text"
          placeholder="Type a message"
          className=" type flex-1 px-4 py-3 rounded-full  outline-none "
        />
        <button className="bg-[#95d6a4]  text-lg font-semibold px-6 py-1 text-black cursor-pointer active:scale-105 rounded-full">
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatWindow;

