import React from "react";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className="flex justify-center items-center mt-[70px]">
      <div className="flex justify-center items-center bg-white p-2 w-[60%] py-10 shadow-md">
        <img src="login.png" className="w-[40%] mr-6" alt="" />
        <div className="flex flex-col justify-center items-start w-[40%]">
          <h1 className="font-bold text-xl my-4">Sign In</h1>

          <div className="my-2 w-full">
            <h2 className="text-sm">Your email</h2>
            <input type="text" className="bg-[#F9FAFB] px-4 py-2 text-sm rounded-xl w-full" placeholder="name@example.com" />
          </div>

          <div className="my-2 w-full">
            <h2 className="text-sm">Password</h2>
            <input type="password" className="bg-[#F9FAFB] px-4 py-2 text-sm rounded-xl w-full" placeholder="*********" />
          </div>

          <div className="form-check my-2">
            <input
              className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-coolgray checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <label
              className="form-check-label inline-block text-gray-800 text-sm"
              htmlFor="flexCheckDefault"
            >
              Remember me
            </label>
          </div>

          <Link to="/quiz" className="w-full text-center bg-iblue rounded-lg py-2 my-2 text-white">Sign In</Link>
          <div className="w-full flex justify-center items-center my-2">
            <div className="w-[60px] h-[1px] bg-iblue"></div>
          </div>
          <Link to="/register" className="text-center w-full rounded-lg py-1 my-2 text-iblue font-bold">Sign Up</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
