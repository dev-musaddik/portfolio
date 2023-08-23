import React from "react";
import "./Card.css";
const Card = ({darkMode,item}) => {
  return (
    <div className={`card-container ${darkMode ? "dark-mode-portfolio-card" : ""}`} >
      <div className="img-sec">
        <img src={item.imageurl} alt="alt" />
        
      </div>
      <div className="des-sec">
        <h3>{item.name}</h3>
        <p>
         {item.description}
        </p>
        <button> <a href={item.projectLink} style={{textDecoration:'none'}}>View</a></button>
      </div>
    </div>
  );
};

export default Card;
