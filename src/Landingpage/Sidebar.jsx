import axios from "axios";
import React, { useEffect, useState } from "react";
import { baseURL } from "../util";

const Sidebar = ({ setSelectedChat }) => {
  const token = localStorage.getItem("token");
  const [friendsList, setFriends] = useState([]);
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    const friends = async () => {
      try {
        const api = await axios.post(
          baseURL + "/user/friendList",
          {},
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );
        setFriends(api.data?.friends);
      } catch (e) {
        console.log("error", e);
      }
    };
    friends();
  }, []);
  console.log("friendslist", friendsList);
  const handleSelect = (id) => {
    localStorage.setItem("selectedUser", JSON.stringify(id)); // optional (for refresh)
    setSelectedChat(id); // 🔥 THIS triggers re-render
  };
  return (
    <div className="h-full flex flex-col w-full">
      <div className="px-3 py-5">
        <input
          type="text"
          placeholder="Search your friends..."
          className=" type p-3 rounded-md  outline-none"
        />
      </div>

      <div className="flex-1 overflow-y-auto">
        {friendsList.length > 0 ? (
          friendsList.map((friend, i) => (
            <div
              className={`flex items-center gap-3 p-4 ${activeIndex === i && "bg-white text-black"} cursor-pointer`}
              key={friend._id}
              onClick={() => {
                handleSelect(friend);
                setActiveIndex(i);
              }}
            >
              <img
                src="https://i.pravatar.cc/35"
                alt="user"
                className="w-9 h-9 rounded-full"
              />
              <div>
                <p className="font-medium">
                  {friend?.firstName} {friend?.lastName}
                </p>
                <p className="text-sm text-gray-400 truncate">HR has...</p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center">No friends found</p>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
