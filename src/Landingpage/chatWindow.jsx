import React from "react";
import { CiMenuKebab } from "react-icons/ci";
const ChatWindow = () => {
  return (
    <div className="h-full flex flex-col">
      {/* Chat Header */}
      <div className="flex items-center justify-between gap-3 p-4 bg-[#95d6a4]">
        <span className="flex gap-3 items-center">
          <img
            src="https://i.pravatar.cc/40"
            alt="user"
            className="w-10 h-10 rounded-full"
          />
          <span className="font-bold text-xl text-black">Niku 😁</span>
        </span>
        <i className="text-black font-extrabold text-2xl cursor-pointer">
          <CiMenuKebab />
        </i>
      </div>

      {/* Messages */}
      <div className="flex-1 p-4 space-y-3 overflow-y-auto bg-white">
        <div className="self-start bg-[#202c33] px-3 py-2 rounded-lg w-fit">
          Hero bhai
        </div>

        <div className="self-end bg-[#95d6a4]  text-black px-3 py-2 rounded-lg w-fit ml-auto">
          Hello 😄 ,How are you ?
        </div>
      </div>

      {/* Input */}
      <div className="p-4 bg-[#202c33] flex gap-2">
        <input
          type="text"
          placeholder="Type a message"
          className="flex-1 px-4 py-2 rounded-full bg-[#2a3942] outline-none"
        />
        <button className="bg-[#95d6a4] font-semibold px-4 py-2 text-black cursor-pointer active:scale-105 rounded-full">
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatWindow;
