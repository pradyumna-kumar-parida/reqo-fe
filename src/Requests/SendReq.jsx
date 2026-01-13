import React, { useEffect, useState } from "react";
import axios from "axios";
import { baseURL } from "../util";
const SendReq = () => {
  const [users, setUsers] = React.useState([])
  const token = localStorage.getItem("token")
  useEffect(() => {
    const allusers = async () => {
      const userlist = await axios.post(baseURL + "/user/alluser", {}, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      setUsers(userlist.data?.userlist)
    }
    allusers()
  }, [])
  console.log("users", users);
  return (
    <>
      <div className="space-y-4  p-6 mt-3">
        {users?.map((user) => (
          <div
            key={user.id}
            className="flex items-center justify-between bg-[#020617] p-4 rounded-xl shadow-md"
          >
            {/* Left: Profile */}
            <div className="flex items-center gap-4">
              <img
                src="https://i.pravatar.cc/150?img=2"
                alt="profile"
                className="w-12 h-12 rounded-full object-cover border border-gray-600"
              />
              <p className="text-white font-medium text-lg">{user?.firstName} {user?.lastName}</p>
            </div>

            {/* Right: Buttons */}
            <div className="flex gap-3">
              <button className="px-4 py-2 rounded-lg bg-[#95d6a4] text-black font-medium  cursor-pointer active:scale-105">
                Send
              </button>

              <button className="px-4 py-2 rounded-lg bg-gray-700 text-white hover:bg-gray-600  cursor-pointer active:scale-105">
                View Profile
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default SendReq