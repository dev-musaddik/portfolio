import React from "react";
import "./Portfolio.css";
import Card from "../Card/Card";
import { productData } from "../../portfolioData";

const Portfolio = ({ darkMode }) => {
  return (
    <div id="Portfolio" className={`${darkMode ? "dark-mode" : ""}`}>
      <div className="title">
        <h1
          style={{
            fontWeight: "bold ",
            fontSize: "1.5rem",
         
            padding: "5px 0 0px 0",
            color: "red",
          }}
        >
          My{" "}
          <span
            style={{
              padding: "5px",
              color: "blue",
              fontWeight: "bold",
              fontSize: "2rem",
            }}
          >
            Some
          </span>{" "}
          Projects
        </h1>
      </div>
    
      <div className="portfolio-card">
        {productData.map((item, index) => (
          <Card darkMode={darkMode} key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
