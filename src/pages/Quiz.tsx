import { useState } from "react";
import { ArrowSmRightIcon, ArrowSmLeftIcon } from "@heroicons/react/outline";

interface Ops {
  id: number;
  name: String;
  desc: String;
}

interface Props {
  no: number;
  data: {
    title: string;
    options: Array<Ops>;
    ans: number;
  };
  total: number;
  next: (resp: number) => void;
  prev: () => void;
  res: Array<number>;
}

const Quiz = (props: Props) => {
  const [op, setOp] = useState(props.res[props.no]);
  console.log(op);
  
  const data = props.data;

  return (
    <div className="flex justify-center items-center mt-[70px] mb-[100px]">
      <div className="flex flex-col justify-center items-start bg-white pl-10 pt-6 w-[80%] shadow-md">
        <div className="text-coolgray2">
          Question {props.no + 1} of {props.total}
        </div>

        <h1 className="font-bold text-3xl mt-5 mb-3">{data.title}</h1>
        <div className="text-coolgray2 mb-5">Answer the Question!</div>

        {data.options.map((e) => (
          <div onClick={()=>{setOp(e.id)}} className={`${e.id === op ? "border-2 border-iblue" : "border-2" }  rounded-lg flex justify-start items-center w-[80%] h-[100px] my-2 cursor-pointer`} key={e.id}>
            <div className={`border-2 w-6 h-6 rounded-full mx-5 ${e.id === op && 'border-iblue'}`}></div>
            <div className="flex flex-col">
              <h1>{e.name}</h1>
              <div className="text-coolgray2">{e.desc}</div>
            </div>
          </div>
        ))}

        <div className="flex justify-between items-center px-4 w-full mt-10">
          <button className="text-iblue font-bold">Logout</button>
          <div className="flex justify-center items-center mb-4">
            <button
              className=" flex py-2 px-8 border-2 rounded-xl text-md font-bold mr-6"
              onClick={()=>{
                props.prev();
                if(props.no !== 0)
                setOp(props.res[props.no-1]);
              }}
            >
              <ArrowSmLeftIcon className="w-6 h-6 mr-2" />
              Back
            </button>
            <button
              className="bg-iblue text-white flex py-2 px-8 border-2 rounded-xl text-md mr-4"
              onClick={() =>{
                props.next(op);
                if(props.no < props.total)
                setOp(props.res[props.no+1]);
                else
                setOp(-1);
              }}
            >
              <ArrowSmRightIcon className="w-6 h-6 mr-2" />
              {props.no + 1 === props.total ? "Finish" : "Next"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
