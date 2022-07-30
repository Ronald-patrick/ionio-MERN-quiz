import { useState } from "react";
import { quiz } from "../data";
import Quiz from "./Quiz";

const QuizWrapper = () => {
  const [qs, setQs] = useState(0);
  const [res,setRes] = useState(new Array(quiz.length).fill(-1));

  const nextQs = (resp : number)=>{
    res[qs] = resp;
    setRes(res);
    
    if(qs < quiz.length - 1)
    setQs(qs+1);

    if(qs === quiz.length-1)
    console.log(res);
  }

  const prevQs = ()=>{
    if(qs > 0)
    setQs(qs-1);
  }


  return (
    <>
      <Quiz no={qs} data={quiz[qs]} total={quiz.length} next={nextQs} prev={prevQs} res={res}  />
    </>
  );
};

export default QuizWrapper;
