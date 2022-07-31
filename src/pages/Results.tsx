import { Link, useLocation } from "react-router-dom";
import { logoutUser } from "../redux/reducer";
import { useNavigate } from "react-router-dom";

interface State{
  score : number
}

const Results = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const state : any =  location.state;

  return (
    <div className="flex justify-center items-center mt-[70px] mb-[100px]">
      <div className="flex flex-col justify-center items-center bg-white pt-6 w-[80%] shadow-md">
        <div className="text-coolgray2 mb-5">Quiz Completed</div>
        <h1 className="text-2xl font-bold">Good Job !</h1>

        <img src="results.png" alt="" />
        
        <div className="text-coolgray2 mb-5 text-xl">You Scored <span className="font-bold">{state.score}/5</span> points</div>

        <div className="flex justify-between items-center px-4 w-full mt-10">
          <button onClick={()=>{
              logoutUser();
              navigate('/',{replace:true});
          }} className="text-iblue font-bold">Logout</button>
          <div className="flex justify-center items-center mb-4">
            <Link to="/compare" className=" flex py-2 px-8 border-2 rounded-xl text-md font-bold mr-6">
              Compare Results
            </Link>
          </div>
        </div>


      </div>
    </div>
  );
};

export default Results;
