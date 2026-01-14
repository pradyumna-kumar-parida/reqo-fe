import React, { useEffect, useState } from "react";
import axios from "axios";
import { baseURL } from "../util";
const AcceptReq = () => {
  const [requestedUsers, setRequests] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const gettingRequests = async () => {
      try {
        const chechReq = await axios.post(
          baseURL + "/user/checkRequest",
          {},
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const result = chechReq.data;
        console.log("accepted req", result);
        setRequests(result?.available_requests);
      } catch (e) {
        console.log("error", e);
      }
    };
    gettingRequests();
  }, []);
  return (
    <>
      <div className="space-y-4  p-6 mt-3">
        {requestedUsers.length > 0 ? (
          requestedUsers?.map((user) => (
            <div
              key={user.id}
              className="flex items-center justify-between bg-[#020617] p-4 rounded-xl shadow-md"
            >
              <div className="flex items-center gap-4">
                <img
                  src="https://i.pravatar.cc/150?img=3"
                  alt="profile"
                  className="w-12 h-12 rounded-full object-cover border border-gray-600"
                />
                <p className="text-white font-medium text-lg">
                  {user?.sender?.firstName} {user?.sender?.lastName}
                </p>
              </div>

              <div className="flex gap-3">
                <button className="px-4 py-2 rounded-lg bg-[#d9ca26] text-black font-medium  cursor-pointer active:scale-105">
                  Accept
                </button>
                <button className="px-4 py-2 rounded-lg bg-red-600 text-white font-medium  cursor-pointer active:scale-105">
                  Cancel
                </button>

                <button className="px-4 py-2 rounded-lg bg-gray-700 text-white hover:bg-gray-600  cursor-pointer active:scale-105">
                  View Profile
                </button>
              </div>
            </div>
          ))
        ) : (
          <h2 className="text-white text-2xl py-4 flex place-self-center">No request found</h2>
        )}
      </div>
    </>
  );
};

export default AcceptReq;
