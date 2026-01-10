import React from "react";
import MenuReqo from "../Landingpage/Menu";

const users = [
  {
    id: 1,
    name: "Niku",
    photo: "https://i.pravatar.cc/150?img=1",
  },
  {
    id: 2,
    name: "Raja",
    photo: "https://i.pravatar.cc/150?img=2",
  },
  {
    id: 3,
    name: "Apna",
    photo: "https://i.pravatar.cc/150?img=3",
  },
];

const RequestPage = () => {
  return (
    <>
    <div className="h-screen w-full">

      {/* <div className="w-[15%] ">
        <MenuReqo />
      </div> */}
      <div className="min-h-screen bg-[#0f172a] p-6 w-[85%]  ">
        <h2 className="text-white text-2xl font-semibold mb-6">
          Friend Requests
        </h2>

        <div className="space-y-4">
          {users.map((user) => (
            <div
              key={user.id}
              className="flex items-center justify-between bg-[#020617] p-4 rounded-xl shadow-md"
            >
              {/* Left: Profile */}
              <div className="flex items-center gap-4">
                <img
                  src={user.photo}
                  alt="profile"
                  className="w-12 h-12 rounded-full object-cover border border-gray-600"
                />
                <p className="text-white font-medium text-lg">{user.name}</p>
              </div>

              {/* Right: Buttons */}
              <div className="flex gap-3">
                <button className="px-4 py-2 rounded-lg bg-green-500 text-black font-medium hover:bg-green-400 transition">
                  Send Request
                </button>

                <button className="px-4 py-2 rounded-lg bg-gray-700 text-white hover:bg-gray-600 transition">
                  View Profile
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
};

export default RequestPage;
