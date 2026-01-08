import React, { useEffect, useState } from "react";
import { FaHandPointRight } from "react-icons/fa6";
import Signup from "./Signup";
import Login from "./Login";
import { baseURL } from "../util";
import axios from "axios";
const Home = () => {
  const [click, setClick] = useState(false);
  const [login, setLogin] = useState(false);
  const [signup, setSignup] = useState(true);
  console.log("home", click);
  console.log("login", login);
  console.log("signup open", login);
  useEffect(() => {
    const welcome = async () => {
      const api = await axios.post(baseURL + "/user/welcome");
      const result = await api.data;
      console.log("result", result);
    };
    welcome();
  }, []);
  return (
    <main className="grid min-h-screen grid-cols-1 lg:grid-cols-2 overflow-hidden">
      <section className="home flex flex-col  justify-center px-5 md:px-10 lg:px-20">
        <h1 className={`logo ${click ? "text-[#95d6a4]" : "text-[#d9ca26]"}`}>
          R <span className="reqo">eqo</span>
        </h1>
        <h2 className="text-xl lg:text-5xl sm:text-3xl font-bold text-white">
          Chat Only ,{" "}
          <span
            className={`${
              !click ? "text-[#95d6a4]" : "text-[#d9ca26]"
            } text-2xl`}
          >
            When Both Agree....
          </span>
        </h2>
        <p className="text-base sm:text-lg  lg:text-xl mt-5 font-semibold text-white ">
          Reqo is a request-based chatting platform where conversations start
          only after mutual acceptance. Send a chat request, wait for approval,
          and talk only when the other person is ready. Simple. Respectful.
          Controlled
        </p>
        <button
          className={`mt-12 ${
            click ? "bg-[#95d6a4]" : "bg-[#d9ca26]"
          } font-medium text-2xl flex gap-5  items-center self-baseline py-2 px-6 rounded-md cursor-pointer active:bg-[#95d6a4] active:scale-105`}
          onClick={() => setClick(!click)}
        >
          Let's talk today{" "}
          <i className="text-3xl">
            <FaHandPointRight />
          </i>
        </button>
      </section>
      <section className="h-max lg:h-screen md:py-8 lg:mr-20  grid items-center ">
        {signup && (
          <Signup clicked={click} signup={signup} setLogin={setLogin} />
        )}
        {login && <Login clicked={click} login={login} setSignup={setSignup} />}
      </section>
    </main>
  );
};

export default Home;
