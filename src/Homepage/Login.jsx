import axios from "axios";
import React, { useEffect, useState } from "react";
import { baseURL } from "../util";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import { useNavigate } from "react-router-dom";
const Login = (props) => {
  const { clicked, login, setSignup } = props;
  const [error, setError] = useState("");
  const [loader, setLoader] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [sucess, setSucess] = useState("");
  useEffect(() => {
    setSignup(false);
  }, [login]);
  const naviagte = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validate = () => {
    if (!formData.email) return "Email is required";

    if (!formData.password) return "Password is required";
    return ""; // ✅ important
  };
  useEffect(() => {
    if (!error && !sucess) return;

    const timer = setTimeout(() => {
      setError("");
      setSucess("");
    }, 4000); // 4 seconds

    return () => clearTimeout(timer);
  }, [error, sucess]);

  const handlelogin = async (e) => {
    e.preventDefault();

    const errorMessage = validate();

    if (errorMessage) {
      setError(errorMessage);
      return;
    }

    setError("");
    setLoader(true);

    const payload = {
      user_email: formData.email,

      user_pw: formData.password,
    };

    try {
      const result = await axios.post(baseURL + "/user/login", payload);
      setSucess(result.data?.message);
      setFormData({
        email: "",
        password: "",
      });
      localStorage.setItem("token", result.data?.token);
      localStorage.setItem("user", JSON.stringify(result.data?.user));
      setTimeout(() => {
        naviagte("/landingsection");
      }, 2000);
    } catch (err) {
      setError("Login failed. Please try again.");
    } finally {
      setLoader(false);
    }
  };

  return (
    <>
      {loader ? (
        <Box sx={{ display: "flex", placeSelf: "center", color: "red" }}>
          <CircularProgress />
        </Box>
      ) : (
        <div className="  h-full grid items-center mt-13 px-3 sm:px-10 self-center">
          <form
            method="dialog"
            action=""
            className={`form flex flex-col gap-8 px-6 py-10 sm:py-8 sm:px-20 bg-black border-[5px] ${
              clicked ? "border-[#95d6a4]" : "border-[#d9ca26]"
            } rounded-2xl`}
          >
            {(sucess || error) && (
              <Stack sx={{ width: "100%" }} spacing={2}>
                {sucess && (
                  <Alert variant="filled" severity="success">
                    {sucess}
                  </Alert>
                )}
                {error && (
                  <Alert variant="filled" severity="error">
                    {error}
                  </Alert>
                )}
              </Stack>
            )}
            <div>
              <h2>Email</h2>
              <input
                type="email"
                name="email"
                className={`${clicked ? "warn" : "input"}`}
                onChange={handleChange}
                value={formData.email}
              />
            </div>

            <div>
              <h2>Password</h2>
              <input
                type="password"
                name="password"
                value={formData.password}
                className={`${clicked ? "warn" : "input"}`}
                onChange={handleChange}
              />
            </div>

            <div className="flex place-items-center flex-col ">
              <p className="text-white text-center text-sm cursor-pointer ">
                Don't have an account ?{" "}
                <b
                  className="text-teal-300 font-semibold text-md"
                  onClick={() => setSignup(true)}
                >
                  Signup
                </b>
              </p>
              <button
                onClick={handlelogin}
                className={`${
                  clicked ? "bg-[#95d6a4]" : "bg-[#d9ca26]"
                } font-medium text-lg flex  py-1 px-4 rounded-md cursor-pointer active:scale-105  mt-2`}
              >
                login
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default Login;
