import React, { useEffect, useState } from "react";
import axios from "axios";

interface Data{
  name: String,
  email : String,
  score : Number
}

const CompareResults = () => {

  const [data, setData] = useState<Data[]>([])

  const getData = async ()=>{
    const res = await axios('https://quizapp-backend.vercel.app/getScores');
    const { data } = await res;

    console.log(data);
    setData(data.reverse())
  }

  useEffect(() => {
    getData();
  }, [])
  
  return (
    <div className="flex justify-center items-center mt-[70px] mb-[100px]">
      <div className="flex flex-col justify-center items-start bg-white w-[600px] shadow-md p-8 rounded-lg">
        <h1 className="font-bold text-2xl">Other Results</h1>

        {data.map((e,id)=>{
          return (
            <div key={id} className="flex justify-between w-full border-b-2 mt-5 pb-2 ">
            <div className="flex flex-col">
              <h1 className="font-bold">{e.name}</h1>
              <div>{e.email}</div>
            </div>
            <div className="font-bold"><>{e.score}/5</></div>
          </div>
          )
        })}

      </div>
    </div>
  );
};

export default CompareResults;
