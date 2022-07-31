import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [cpass, setCpass] = useState("")

  const registerUser = async ()=>{
    if(cpass !== pass)
    {
      alert("passwords dont match");
      return;
    }
    if(name.length === 0 || pass.length === 0)
    {
      alert("Fields are empty");
      return;
    }

    if(pass.length < 6)
    {
      alert("Password too short, Minimum 6 characters required");
      return;
    }



    const res = await axios.post(`https://quizapp-backend.vercel.app/auth/register`, {
      name : name,
      email: email,
      password: pass,
    });

    const { data } = await res;

    console.log(data);

    navigate("/login");
  }

  return (
    <div className="flex justify-center items-center mt-[70px]">
      <div className="flex justify-center items-center bg-white p-2 pt-6 w-[60%] shadow-md">
        <img src="register.png" className="w-[40%] mr-6" alt="" />
        <div className="flex flex-col justify-center items-start w-[40%]">
          <h1 className="font-bold text-xl my-4">Create your Free Account</h1>

          <div className="my-2 w-full">
            <h2 className="text-sm">Your name</h2>
            <input value={name} onChange={(e)=>{
              setName(e.target.value);
            }} type="text" className="bg-[#F9FAFB] px-4 py-2 text-sm rounded-xl w-full" placeholder="Ronald Patrick" />
          </div>

          <div className="my-2 w-full">
            <h2 className="text-sm">Your email</h2>
            <input value={email} onChange={(e)=>{
              setEmail(e.target.value);
            }} type="email" className="bg-[#F9FAFB] px-4 py-2 text-sm rounded-xl w-full" placeholder="name@example.com" />
          </div>

          <div className="my-2 w-full">
            <h2 className="text-sm">Password</h2>
            <input value={pass} onChange={(e)=>{
              setPass(e.target.value);
            }} type="password" className="bg-[#F9FAFB] px-4 py-2 text-sm rounded-xl w-full" placeholder="*********" />
          </div>

          <div className="my-2 w-full">
            <h2 className="text-sm">Confirm Password</h2>
            <input value={cpass} onChange={(e)=>{
              setCpass (e.target.value);
            }} type="password" className="bg-[#F9FAFB] px-4 py-2 text-sm rounded-xl w-full" placeholder="*********" />
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
              I accept the <span className="text-iblue">Terms and Conditions</span> 
            </label>
          </div>
          <button onClick={registerUser} className="w-full text-center bg-iblue rounded-lg py-2 my-2 text-white">Create Account</button>
        </div>
      </div>
    </div>
  );
};

export default Register;
