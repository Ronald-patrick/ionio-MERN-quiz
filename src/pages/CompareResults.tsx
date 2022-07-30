import React from "react";

const CompareResults = () => {
  return (
    <div className="flex justify-center items-center mt-[70px] mb-[100px]">
      <div className="flex flex-col justify-center items-start bg-white w-[600px] shadow-md p-8 rounded-lg">
        <h1 className="font-bold text-2xl">Other Results</h1>

        <div className="flex justify-between w-full border-b-2 mt-5 pb-2 ">
          <div className="flex flex-col">
            <h1 className="font-bold">Rohan Sawant</h1>
            <div>rohan@gmail.com</div>
          </div>

          <div className="font-bold">3/5</div>
        </div>

        <div className="flex justify-between w-full border-b-2 mt-5 pb-2 ">
          <div className="flex flex-col">
            <h1 className="font-bold">Meet Parmar</h1>
            <div>meet@gmail.com</div>
          </div>

          <div className="font-bold">4/5</div>
        </div>


        <div className="flex justify-between w-full border-b-2 mt-5 pb-2 ">
          <div className="flex flex-col">
            <h1 className="font-bold">Elon Musk</h1>
            <div>elon@gmail.com</div>
          </div>

          <div className="font-bold">2/5</div>
        </div>

      </div>
    </div>
  );
};

export default CompareResults;
