import React, { useEffect } from "react";

const Login = (props) => {
  const { clicked, login, setSignup } = props;
  useEffect(() => {
    setSignup(false);
  }, [login]);

  return (
    <div className="  h-full grid items-center mt-13 px-3 sm:px-10 self-center">
      <form
        method="dialog"
        action=""
        className={`form flex flex-col gap-8 px-6 py-10 sm:py-8 sm:px-20 bg-black border-[5px] ${
          clicked ? "border-[#95d6a4]" : "border-[#d9ca26]"
        } rounded-2xl`}
      >
        <div>
          <h2>Email</h2>
          <input type="email" className={`${clicked ? "warn" : "input"}`} />
        </div>

        <div>
          <h2>Password</h2>
          <input type="text" className={`${clicked ? "warn" : "input"}`} />
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
            className={`${
              clicked ? "bg-[#95d6a4]" : "bg-[#d9ca26]"
            } font-medium text-lg flex  py-1 px-4 rounded-md cursor-pointer active:scale-105  mt-2`}
          >
            login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
