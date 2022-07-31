import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { quiz } from "../data";
import { useSelector,useDispatch } from "react-redux";
import Quiz from "./Quiz";
import axios from "axios";
import { resetResult, setResult } from "../redux/reducer";
// 20FPBFPhoAnlr3qN
const QuizWrapper = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [qs, setQs] = useState(0);
  const statex : any =  useSelector((state) => state);
  let res = statex.res;
  const checkResults = (arr : Array<Number>)=>{
    let score = 0;
    for(let i=0;i<res.length;i++)
    {
        if(quiz[i].ans === arr[i])
        {
          score++;
        }
    }
    return score;
  }

  const nextQs = async (resp : number)=>{
    dispatch(setResult({index:qs,ans:resp}));
    let copyarr = [...res];
    copyarr[qs] = resp;
    if(qs < quiz.length - 1)
    setQs(qs+1);

    if(qs === quiz.length-1)
    {
      console.log(copyarr);
      
      let score : Number = checkResults(copyarr);

      const resp = await axios.post(`https://quizapp-backend.vercel.app/submitScore`, {
        email: statex.user.email,
        name: statex.user.name,
        score : score
      });
  
      const { data } = await resp;
    
      dispatch(resetResult());

      navigate('/results', { state: { score:score },replace:true },);
    }
  }

  const prevQs = ()=>{
    if(qs > 0)
    setQs(qs-1);
  }


  return (
    <>
      <Quiz no={qs} data={quiz[qs]} total={quiz.length} next={nextQs} prev={prevQs} />
    </>
  );
};

export default QuizWrapper;
