import React from "react";
import "./About.css";
import { useState, useEffect } from "react";
// import Photo from "./../../img/musaddikfainal.png";
const About = ({ darkMode }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [more, setMore] = useState(false);
  const setMoreFn = () => {
    if (more === false) {
      setMore(true);
    } else setMore(false);
  };
  useEffect(() => {
    // On page load, animate the About section to be expanded.
    if (!isExpanded) {
      setTimeout(() => {
        setIsExpanded(true);
      }, 1000);
    }
  }, [isExpanded]);
  return (
    <div
      id="About"
      className={`about-section ${darkMode ? "dark-mode" : ""}`}
    >

      <div className="about-right">
        <div className="about-header">
          <h1
            style={{
              color: "blue",
              fontWeight: "bold",
              padding: "10px",
              fontFamily: "arial",
            }}
          >
            WHO <span style={{ color: "orange", fontWeight: "bold" }}>AM</span>{" "}
            I
          </h1>
          <button
            className="about-button"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? "Collapse" : "Expand"}
          </button>
        </div>
        <div
          className={
            isExpanded ? "about-content-expanded" : "about-content-collapsed"
          }
        >
          <p>
            👋 Greetings! I'm Musaddik, a passionate and driven individual
            hailing from the serene town of Rajbari in beautiful Bangladesh. As
            a devoted Muslim boy, I find inspiration in faith and use it to
            guide my journey in the world of technology.
          </p>
          <p>
            📚 Education has been a cornerstone of my life, and I am currently
            pursuing my studies in Computer Science and Technology at the
            esteemed Jhenaidah Polytechnic Institute. Since my early days in
            class 9, I embarked on a remarkable journey in the world of
            programming that has led me to where I am today.
          </p>
          <p>
            💻 My love for technology has manifested in various roles and
            skills. I am not just a student; I am a developer and a programmer.
            My proficiency extends to the realm of C programming, where I have
            honed my skills to craft efficient and innovative solutions.
          </p>
          
          <div id="hide">
            {more ? (
              <>
              <p>
            🌐 But my skills don't stop there. I'm well-versed in the languages
            that power the web - HTML, CSS, and JavaScript. The art of creating
            captivating user interfaces became a fascination for me, and I've
            honed my craft as a UI designer. Additionally, I've embraced modern
            frameworks like Bootstrap and the dynamic React framework,
            empowering me to bring engaging and responsive web experiences to
            life.
          </p>
                <p>
                  🚀 Beyond the boundaries of academics and programming, I
                  thrive on challenges and growth. Each line of code written is
                  a testament to my commitment to excellence. The projects I've
                  undertaken are a reflection of my dedication to both function
                  and aesthetics.
                </p>
                <p>
                  . 🌍 As an aspiring technologist, I aim not just to achieve
                  personal success, but to contribute positively to my community
                  and beyond. My faith, education, and skills are the foundation
                  upon which I intend to build a future that bridges the gap
                  between innovation and social responsibility.
                </p>
                <p>
                  📌 Let's connect and collaborate to create a world where
                  technology enriches lives and transcends boundaries. Whether
                  it's code or creativity, I'm ready to make a difference.
                </p>
                <u
                  style={{ color: "blue", marginLeft: "10px" }}
                  onClick={() => setMoreFn()}
                >
                  less.....
                </u>
              </>
            ) : (
              <>
                <u
                  style={{ color: "blue", marginLeft: "10px" }}
                  onClick={() => setMoreFn()}
                >
                  more.....
                </u>
              </>
            )}
          </div>
          <h4 style={{ marginLeft: "20px" }}>
            Warm regards,
            <br />
            Musaddik
          </h4>
          <button
            className="pulsating-glow-button "
            style={{
              transition: ".3s",
              backgroundColor: "orange",
              width: "150px",
              marginLeft:'10px',
            }}
          >
            Download CV
          </button>
        </div>
        <div
          className="about-button"
          style={{ display: "flex", justifyContent: "start" }}
        >
          
        </div>
      </div>
    </div>
  );
};

export default About;
