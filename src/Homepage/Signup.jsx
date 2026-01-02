import React from 'react'

const Signup = (props) => {
  const { clicked, setclicked } = props
  console.log("SIgn", clicked);

  return (
    <div className="  h-full grid items-center px-10">
      <form
        action=""
        className={`form flex flex-col gap-8 py-3 px-20 bg-black border-[5px] ${clicked ? "border-[#95d6a4]" : "border-[#d9ca26]"
          } rounded-2xl`}

      >
        <div>
          <h2>First Name</h2>
          <input type="text" className={`${clicked ? "warn" : "input"}`} />
        </div>
        <div>
          <h2>Last Name</h2>
          <input type="text" className={`${clicked ? "warn" : "input"}`} />
        </div>
        <div>
          <h2>Email</h2>
          <input type="email" className={`${clicked ? "warn" : "input"}`} />
        </div>
        <div>
          <h2>Phone Number</h2>
          <input type="text" className={`${clicked ? "warn" : "input"}`} />
        </div>
        <div>
          <h2>Password</h2>
          <input type="text" className={`${clicked ? "warn" : "input"}`} />
        </div>

        <div className="flex place-items-center flex-col ">
          <p className="text-white text-center text-sm ">
            Already have an account ?{" "}
            <a href="" className="text-red-600 font-semibold text-md">
              Login
            </a>
          </p>
          <button className={`${clicked ? "bg-[#95d6a4]" : "bg-[#d9ca26]"} font-medium text-lg flex  py-1 px-4 rounded-md cursor-pointer hover:scale-105  mt-2`}>
            Signup
          </button>
        </div>
      </form>
    </div>
  );
}

export default Signup