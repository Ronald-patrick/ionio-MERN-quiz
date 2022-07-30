import React from "react";

interface Ops {
    id: number;
    name: String;
    desc: String;
  }

  interface Props{
    ops : Ops
  }

const QuizItem = (props : Props) => {
  return (
    <div className="border-2 rounded-lg flex justify-start items-center w-[80%] h-[100px] my-2 cursor-pointer">
      <div className="border-2 w-6 h-6 rounded-full mx-5"></div>
      <div className="flex flex-col">
        <h1>{props.ops.name}</h1>
        <div className="text-coolgray2">{props.ops.desc}</div>
      </div>
    </div>
  );
};

export default QuizItem;
