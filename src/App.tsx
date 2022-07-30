import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Header from "./components/Header";
import Register from "./pages/Register";
import QuizWrapper from "./pages/QuizWrapper";
import Results from "./pages/Results";
import CompareResults from "./pages/CompareResults";

function App() {
  return (
    <>
    <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/quiz" element={<QuizWrapper/>} />
        <Route path="/results" element={<Results/>} />
        <Route path="/compare" element={<CompareResults/>} />
      </Routes>
    </>
  );
}

export default App;
