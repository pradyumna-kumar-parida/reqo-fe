import React, { useEffect, useState } from "react";
import axios from "axios";
import { baseURL } from "../util";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
const SendReq = () => {
  const [users, setUsers] = React.useState([]);
  const [requested_userid, setReqUserId] = useState(null);
  const [reqSent, setreqSent] = useState(false);
  const token = localStorage.getItem("token");
  useEffect(() => {
    const allusers = async () => {
      try {
        const userlist = await axios.post(
          baseURL + "/user/alluser",
          {},
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setUsers(userlist.data?.userlist);
      } catch (e) {
        console.log("error", e);
      }
    };
    allusers();
  }, []);

  useEffect(() => {
    if (!requested_userid) return;
    console.log("tap key", requested_userid);
    console.log("hiii");

    const handleSendRequest = async () => {
      const payload = {
        receiverId: requested_userid,
      };
      try {
        const sendreq = await axios.post(
          baseURL + "/user/sendRequest",
          payload,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (sendreq.status === 201) {
          setreqSent(true);
          console.log("hiii");
        }
      } catch (e) {
        console.log("Error", e);
      }
    };
    handleSendRequest();
  }, [requested_userid]);
  useEffect(() => {
    if (!reqSent) return;

    const timer = setTimeout(() => {
      setreqSent(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, [reqSent]);

  console.log("users", users);
  console.log("sent", reqSent);
  return (
    <>
      {reqSent && (
        <Stack
          sx={{
            position: "fixed",
            top: 20,
            left: "50%",
            transform: "translateX(-50%)",
            width: "320px",
            zIndex: 1300,
          }}
          spacing={2}
        >
          <Alert variant="filled" severity="success">
            Request sent successfully!
          </Alert>
        </Stack>
      )}
      <div className="space-y-4  p-6 mt-3">
        {users?.map((user) => (
          <div
            key={user._id}
            className="flex items-center justify-between bg-[#020617] p-4 rounded-xl shadow-md"
          >
            {/* Left: Profile */}
            <div className="flex items-center gap-4">
              <img
                src="https://i.pravatar.cc/150?img=2"
                alt="profile"
                className="w-12 h-12 rounded-full object-cover border border-gray-600"
              />
              <p className="text-white font-medium text-lg">
                {user?.firstName} {user?.lastName}
              </p>
            </div>

            {/* Right: Buttons */}
            <div className="flex gap-3">
              <button
                className="px-4 py-2 rounded-lg bg-[#95d6a4] text-black font-medium  cursor-pointer active:scale-105"
                onClick={() => setReqUserId(user._id)}
              >
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
  );
};

export default SendReq;
