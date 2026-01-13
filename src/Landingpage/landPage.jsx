import React from "react";
import Sidebar from "./Sidebar";
import ChatWindow from "./chatWindow";
import MenuReqo from "./Menu";
export default function LandPage() {
  return (
    <>
      <div className="h-screen w-screen flex bg-[#0b141a] text-white">
        {/* Menu */}
        <div className="w-[10%]">
          <MenuReqo />
        </div>

        {/* Sidebar */}
        <div className="w-[20%]  border-r border-gray-700">
          <Sidebar />
        </div>

        {/* Chat Window (auto fill) */}
        <div className="flex-1">
          <ChatWindow />
        </div>
      </div>
    </>
  );
}
