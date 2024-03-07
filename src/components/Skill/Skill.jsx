import React from "react";
import "./Skill.css";
import { useInView } from "react-intersection-observer";
import skillsData from "../../skills";
const Skill = ({ darkMode }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  return (
    <div
      className={`skill-section ${darkMode ? "dark-mode" : ""}`}
      id="Skill"
    >
      <h1>
        My <span> Proficiency </span> Showcase{" "}
      </h1>
      <div className="Skill-container">
        {skillsData.map((category, categoryIndex) => (
          <div className={category.category.replace(/\s+/g, '-')} key={categoryIndex}>
            <h1>{category.category}</h1>
            {category.skills.map((res, skillIndex) => (
              <div className="skill-bar" key={skillIndex} ref={ref}>
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
        ))}
      </div>
    </div>
  );
};

export default Skill;
