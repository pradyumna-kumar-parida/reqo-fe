import React, { useEffect, useState } from "react";
import MenuReqo from "../Landingpage/Menu";
import axios from "axios";
import { baseURL } from "../util";
import SendReq from "./SendReq";
import AcceptReq from "./AcceptReq";


const RequestPage = () => {
  const [sendRq, setSendRq] = useState(true)
  const [recRq, setRecRq] = useState(false)


  return (
    <>
      <div className="h-screen w-full flex">

        <div className="w-[10%] ">
          <MenuReqo />
        </div>
        <div className="min-h-screen bg-[#0f172a] w-[90%] overflow-y-scroll  ">
          <div className="bg-[#0f172a] px-6 py-5 border-b border-white  font-semibold  sticky z-20  top-0 flex justify-between items-center">
            <span>
              <h2 className="text-white text-2xl ">
                Friend Requests
              </h2>
              <p className="text-[#d9ca26] text-md mt-2">
                {sendRq ? "In the Friend Requests section, you can find new friends Send invite to connect and start interacting.." : "Review the friend requests you’ve received. Accept an invite to become friends, or cancel the invite if you’re not interested"}

              </p>
            </span>
            <span className="flex gap-3">
              <button className="px-4 py-2 rounded-lg bg-white shadow-md text-black font-medium  cursor-pointer active:scale-105" onClick={() => {
                setSendRq(true)
                setRecRq(false)
              }
              }>Sent Requests</button>
              <button className="px-4 py-2 rounded-lg bg-white text-red-600 shadow-md font-medium  cursor-pointer active:scale-105" onClick={() => {
                setSendRq(false)
                setRecRq(true)
              }
              }>Received Requests</button>
            </span>
          </div>

          {sendRq && (
            <SendReq />
          )}
          {recRq && (
            <AcceptReq />
          )}
        </div>
      </div>
    </>
  );
};

export default RequestPage;
