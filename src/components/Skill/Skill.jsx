import React from "react";
import "./Skill.css";
import { useInView } from "react-intersection-observer";
import { Programming, UiDesign, WedDevelopment } from "../../skills";
const Skill = ({ darkMode }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  return (
    <div
      className={`skill-section ${darkMode ? "dark-mode-home" : ""}`}
      id="Skill"
    >
      <h1>My <span> Proficiency </span> Showcase </h1>
      <div className="Skill-container">
        <div className="Programming">
          <h1>Programming</h1>
          {Programming.map((res, index) => (
            <div className="skill-bar" key={index} ref={ref}>
              <div className="skill-name">{res.skillName}</div>
              <div className={`bar ${inView ? "animate" : ""}`}>
                <div
                  className="fill"
                  style={{ width: inView ? `${res.percentage}%` : "0%" }}
                ></div>
              </div>
            </div>
          ))}
        </div>
        <div className="Web Development">
        <h1>Web Development</h1>
        {WedDevelopment.map((res, index) => (
            <div className="skill-bar" key={index} ref={ref}>
              <div className="skill-name">{res.skillName}</div>
              <div className={`bar ${inView ? "animate" : ""}`}>
                <div
                  className="fill"
                  style={{ width: inView ? `${res.percentage}%` : "0%" }}
                ></div>
              </div>
            </div>
          ))}
        </div>
        <div className="UI Design">
        <h1>UI Design</h1>
        {UiDesign.map((res, index) => (
            <div className="skill-bar" key={index} ref={ref}>
              <div className="skill-name">{res.skillName}</div>
              <div className={`bar ${inView ? "animate" : ""}`}>
                <div
                  className="fill"
                  style={{ width: inView ? `${res.percentage}%` : "0%" }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skill;
