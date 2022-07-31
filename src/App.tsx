import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Header from "./components/Header";
import Register from "./pages/Register";
import QuizWrapper from "./pages/QuizWrapper";
import Results from "./pages/Results";
import CompareResults from "./pages/CompareResults";
import { useSelector } from "react-redux";

interface stateX{
  isAuthenticated: boolean,
  user : {} | null
}

function App() {
  const statex : any=  useSelector((state) => state);
  
  return (
    <>
    <Header/>
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/quiz" element={<QuizWrapper/>} />
        <Route path="/results" element={<Results/>} />
        <Route path="/compare" element={<CompareResults/>} />
        {statex.isAuthenticated ? <Route path="/" element={<Home/>} />  : <Route path="/" element={<Login/>} /> }
        
      </Routes>
    </>
  );
}

export default App;
