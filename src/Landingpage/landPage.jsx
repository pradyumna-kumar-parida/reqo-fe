import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import ChatWindow from "./chatWindow";
import MenuReqo from "./Menu";
import logo from "../../public/chat.png";
export default function LandPage() {
  const [selectedChat, setSelectedChat] = useState(
    localStorage.getItem("selectedUser")
  );
  return (
    <>
      <div className="h-screen w-screen flex bg-[#0b141a] text-white">
        {/* Menu */}
        <div className="w-[10%]">
          <MenuReqo />
        </div>

        {/* Sidebar */}
        <div className="w-[20%] bg-[#0f172a]   border-r border-gray-700">
          <Sidebar setSelectedChat={setSelectedChat} />
        </div>

        {/* Chat Window (auto fill) */}
        <div className="flex-1 bg-[#0f172a52]   ">
          {selectedChat ? (
            <ChatWindow user={selectedChat} />
          ) : (
            <div className="h-full flex flex-col items-center justify-center text-center">
              <img src={logo} alt="Reqo Logo" className="w-56 mb-2" />

              <h2 className="text-4xl font-semibold text-white">Reqo</h2>

              <p className="mt-2 text-base text-slate-300">
                Make friends & chat instantly
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
