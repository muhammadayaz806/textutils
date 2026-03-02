import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import { useState } from "react";

function App() {

  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === "light"){
      setMode("dark"); 
      document.body.style.backgroundColor = "grey";
    }else{
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  }

  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
      <div className="container my-3">
        <TextForm heading="Enter text to analyze below" mode={mode}/>
      </div>
      {/* <About /> */}
    </>
  );
}

export default App;
