import React, { useEffect, useState } from "react";
import axios from "axios";
import { baseURL } from "../util";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

const AcceptReq = () => {
  const [requestedUsers, setRequests] = useState([]);
  const [alert, setAlert] = useState({ type: "", message: "" });
  const token = localStorage.getItem("token");

  // ✅ Fetch requests
  const fetchRequests = async () => {
    try {
      const res = await axios.post(
        baseURL + "/user/checkRequest",
        {},
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setRequests(res.data?.available_requests || []);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  // ✅ Accept / Cancel handler
  const handleAction = async (type, requestId) => {
    try {
      await axios.post(
        `${baseURL}/user/${type}Request/${requestId}`,
        {},
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      setAlert({
        type: type === "accept" ? "success" : "error",
        message:
          type === "accept"
            ? "Request has been accepted"
            : "Request has been cancelled",
      });

      fetchRequests(); // 🔁 refresh list
    } catch (e) {
      console.error(e.response?.data || e.message);
    }
  };

  // ✅ Auto-hide alert
  useEffect(() => {
    if (!alert.message) return;

    const timer = setTimeout(() => {
      setAlert({ type: "", message: "" });
    }, 3000);

    return () => clearTimeout(timer);
  }, [alert]);

  return (
    <>
      {alert.message && (
        <Stack
          sx={{
            position: "fixed",
            top: 20,
            left: "50%",
            transform: "translateX(-50%)",
            width: "320px",
            zIndex: 1300,
          }}
        >
          <Alert variant="filled" severity={alert.type}>
            {alert.message}
          </Alert>
        </Stack>
      )}

      <div className="space-y-4 p-6 mt-3">
        {requestedUsers.length > 0 ? (
          requestedUsers.map((user) => (
            <div
              key={user._id}
              className="flex items-center justify-between bg-[#020617] p-4 rounded-xl shadow-md"
            >
              <div className="flex items-center gap-4">
                <img
                  src="https://i.pravatar.cc/150"
                  alt="profile"
                  className="w-12 h-12 rounded-full border border-gray-600"
                />
                <p className="text-white font-medium text-lg">
                  {user.sender.firstName} {user.sender.lastName}
                </p>
              </div>

              <div className="flex gap-3">
                <button
                  className="px-4 py-2 rounded-lg bg-[#d9ca26] text-black font-medium"
                  onClick={() => handleAction("accept", user._id)}
                >
                  Accept
                </button>

                <button
                  className="px-4 py-2 rounded-lg bg-red-600 text-white font-medium"
                  onClick={() => handleAction("cancel", user._id)}
                >
                  Cancel
                </button>

                <button className="px-4 py-2 rounded-lg bg-gray-700 text-white">
                  View Profile
                </button>
              </div>
            </div>
          ))
        ) : (
          <h2 className="text-white text-4xl text-center">No request found</h2>
        )}
      </div>
    </>
  );
};

export default AcceptReq;
