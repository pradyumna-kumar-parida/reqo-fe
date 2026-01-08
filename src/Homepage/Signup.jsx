import axios from "axios";
import React, { useEffect, useState } from "react";
import { baseURL } from "../util";

const Signup = (props) => {
  const { clicked, signup, setLogin } = props;
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    phone_number: "",
    email: "",
    password: "",
  });
  console.log("hello i singed up");
  useEffect(() => {
    setLogin(false);
  }, [signup]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validate = () => {
    if (!formData.first_name) {
      setError("first name is required");
      return false;
    }
    if (!formData.last_name) {
      setError("last name is required");
      return false;
    }
    if (!formData.email) {
      setError("email is required");
      return false;
    }
    if (!formData.phone_number) {
      setError("phone number is required");
      return false;
    }
    if (!formData.password) {
      setError("password is badly required");
      return false;
    }
  };
  const handleSignup = async (e) => {
    e.preventDefault();
    const errorMessage = validate();
    if (errorMessage) {
      setError(errorMessage);
      alert(error); // this will now show correctly
      return;
    }
    console.log("errorrrr", error);

    const payload = {
      firstName: formData.first_name,
      lastName: formData.last_name,
      email: formData.email,
      number: formData.phone_number,
      password: formData.password,
    };
    try {
      const result = await axios.post(baseURL + "/user/signup", payload);
      console.log("1", result.data?.message);
      console.log("2", result.data);

      alert(result.data?.message);
      setError("");
      setFormData({
        first_name: "",
        last_name: "",
        phone_number: "",
        email: "",
        password: "",
      });
    } catch (err) {
      console.log("Sign up failed", err);
    }
  };
  return (
    <div className="  h-full grid items-center mt-13 px-3 sm:px-10 self-center">
      <form
        method="post"
        action=""
        className={`form flex flex-col gap-8 px-6 py-5 sm:py-10 sm:px-20 bg-black border-[5px] ${
          clicked ? "border-[#95d6a4]" : "border-[#d9ca26]"
        } rounded-2xl`}
      >
        <h2
          className={`${
            clicked ? "text-[#95d6a4]" : "text-[#d9ca26]"
          } font-bold`}
        >
          {error.toUpperCase()}
        </h2>
        <div>
          <h2>First Name</h2>
          <input
            type="text"
            name="first_name"
            className={`${clicked ? "warn" : "input"}`}
            onChange={handleChange}
            value={formData.first_name}
          />
        </div>
        <div>
          <h2>Last Name</h2>
          <input
            type="text"
            name="last_name"
            className={`${clicked ? "warn" : "input"}`}
            onChange={handleChange}
            value={formData.last_name}
          />
        </div>
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
          <h2>Phone Number</h2>
          <input
            type="number"
            name="phone_number"
            className={`${clicked ? "warn" : "input"}`}
            onChange={handleChange}
            value={formData.phone_number}
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
          <p className="text-white text-center text-sm ">
            Already have an account ?{" "}
            <b
              className="text-red-600 font-semibold text-md cursor-pointer "
              onClick={() => {
                setLogin(true);
              }}
            >
              Login
            </b>
          </p>
          <button
            type="submit"
            onClick={handleSignup}
            className={`${
              clicked ? "bg-[#95d6a4]" : "bg-[#d9ca26]"
            } font-medium text-lg flex  py-1 px-4 rounded-md cursor-pointer active:scale-105  mt-2`}
          >
            Signup
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
