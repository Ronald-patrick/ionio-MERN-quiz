import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Home = () => {
  const statex : any =  useSelector((state) => state);
  return (
    <div className="flex justify-center items-center mt-[70px]">
      <div className="flex flex-col justify-center items-center bg-white shadow-md p-10">
        <h1 className="text-2xl font-bold">Welcome {statex.user.name}</h1>
        <Link
          to="/quiz"
          className="bg-iblue text-white flex py-2 px-8 border-2 rounded-xl text-md mt-4"
        >
          Start Quiz
        </Link>
      </div>
    </div>
  );
};

export default Home;
