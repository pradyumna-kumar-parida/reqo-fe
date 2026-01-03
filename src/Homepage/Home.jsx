import React, { useState } from "react";
import { FaHandPointRight } from "react-icons/fa6";
import Signup from "./Signup";
import Login from "./Login";
const Home = () => {
  const [click, setClick] = useState(false);
  const [login, setLogin] = useState(false);
  const [signup, setSignup] = useState(true);
  console.log("home", click);
  console.log("login", login);
  console.log("signup open", login);

  return (
    <main className="grid grid-rows-2 lg:h-screen  lg:grid-cols-2   ">
      <section className="home px-5 lg:ml-50 flex flex-col mt-19 md:py-5 lg:py-20  ">
        <h1 className={`logo ${click ? "text-[#95d6a4]" : "text-[#d9ca26]"}`}>
          R <span className="reqo">eqo</span>
        </h1>
        <h2 className="text-xl font-bold text-white">
          Chat Only ,{" "}
          <span
            className={`${
              !click ? "text-[#95d6a4]" : "text-[#d9ca26]"
            } text-2xl`}
          >
            When Both Agree....
          </span>
        </h2>
        <p className="text-base sm:text-md mt-5 font-semibold text-white ">
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
      <section className="md:py-4 lg:mr-20 mb-4  ">
        {signup && (
          <Signup clicked={click} signup={signup} setLogin={setLogin} />
        )}
        {login && <Login clicked={click} login={login} setSignup={setSignup} />}
      </section>
    </main>
  );
};

export default Home;
