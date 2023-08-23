import { useEffect, useState } from "react";
import "./App.css";
import About from "./components/About/About";
import Contract from "./components/Contract/Contract";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Services from "./components/Services/Services";
import { HashLoader } from "react-spinners";
import Portfolio from "./components/Portfolio/Portfolio"
import { BsMessenger} from 'react-icons/bs';
import {CgScrollV}from 'react-icons/cg';
import Skill from "./components/Skill/Skill";
import { Link } from "react-scroll";
import Hobbies from "./components/Hobbies/Hobbies";
function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [loading, setLoading] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
 

  return (
    <>
      {loading ? (
        
        <div
          style={{
            width: "100%",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            
          }}
        >
          <HashLoader color="#4C5270" />
        </div>
      ) : (
        <div className={`App ${darkMode ? "dark-mode" : ""}`}>
          <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          <Home darkMode={darkMode} />
          <div className="for-icons-container">
          <About darkMode={darkMode} />
          <Portfolio darkMode={darkMode}/>
          <Skill darkMode={darkMode} skillName="HTML" percentage={90}/>
          <Services darkMode={darkMode} />
          <Hobbies darkMode={darkMode}/>
          <Contract darkMode={darkMode} />
          
          </div>
          <h1 id="massage-app">
          <Link
                  spy={true}
                  to="Contract"
                  smooth={true} >
            <BsMessenger id="dj" size={50} color="#441456"/>
            </Link>
            
            
            </h1>
            <h1 id="scroll-icons">
          <Link
                  spy={true}
                  to="Navbar"
                  smooth={true} >
            <CgScrollV id="dj" size={50} color="orange"/>
            </Link>
            
            
            </h1>
        </div>
      )}
    </>
  );
}

export default App;
