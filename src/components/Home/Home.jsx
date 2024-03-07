import React from "react";
import "./Home.css";
import Typed from "react-typed";
import Photo from "../../img/mp.png";
import { Link } from "react-scroll";

const Home = ({ darkMode }) => {
  return (
    <div id="Home" className={`${darkMode ? "dark-mode" : ""}`}>
      <div className="container">
        <div className="left-side">
          <h5>WELLCOME TO MY WORLD</h5>
          <h2>
            <span>Hi,I'm </span>
            <span className="name">Musaddik Hosen</span>
          </h2>
          <Typed
            className="font-weight-bold Typed"
            style={{ color: `${darkMode ? "black" : "white"} ` }}
            strings={[
              " A Muslim Boy",
              " A Student",
              " A Self Learner",
              " A Developer",
              " A Programmer",
              " An UI Designer",
              " An Engineer",
            ]}
            typeSpeed={150}
            backSpeed={70}
            loop
          />
          <p>
            I'm Musaddik, a Muslim student and aspiring developer from Rajbari,
            Bangladesh. Currently studying computer science at Jhenaidah
            Polytechnic Institute, my programming journey began in class 9, and
            I now excel in languages like C, HTML, CSS, and JavaScript, along
            with UI design. Proficient in the "React" framework, I'm passionate
            about both front-end and back-end development. My faith and love for
            technology define my path as I continue to learn and grow.
          </p>
          <div className="button-g">
           
            <button
              className="pulsating-glow-button "
              style={{ transition: ".3s", backgroundColor: "blue" }}
            >
              <Link spy={true} to="About" smooth={true}>
                  WHOAMI
                </Link>
            </button>
          </div>
        </div>
        <div className="right_side">
          <img id={`${darkMode ? "dark-mode-img" : ""}`} style={{boxShadow:'-5px -5px 10px red'}} src={Photo} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
