import React, { useState } from "react";
import "./Services.css";
// import ServiceCard from './ServiceCard/ServiceCard';
import { servicesData } from "../../serviceData";
import ServiceCard from "../ServiceCard/ServiceCard";

const Services = ({ darkMode }) => {
  const [selectedButton, setSelectedButton] = useState(null);
  const [premiumClicked, setPremiumClicked] = useState(false);
  const [standardClicked, setStandardClicked] = useState(false);
  const [basicClicked, setBasicClicked] = useState(false);
  const [info, setInfo] = useState(servicesData);
  const levelCheck = (level) => {
    setSelectedButton(level);
    console.log(info)
    
    if (level === "Premium" && !premiumClicked) {
      const updatedInfo = servicesData.map(item => ({
        ...item,     // Spread the existing properties of the item
        price:`$${(item.price * 4).toFixed(2)}`   // Update only the price property
      }));
       setInfo(updatedInfo)
       setPremiumClicked(true);
       setStandardClicked(false);
      //  setPremiumClicked(false)
       setBasicClicked(false);
      
             
    }
    if (level === "Standard" && !standardClicked) {
      const updatedInfo = servicesData.map(item => ({
        ...item,     // Spread the existing properties of the item
        price:`$${(item.price * 1.5).toFixed(2)}`  // Update only the price property
      }));
       setInfo(updatedInfo)
       setStandardClicked(true);
      //  setStandardClicked(false);
       setPremiumClicked(false)
       setBasicClicked(false);
      
             
    }
    if (level === "Basic" && !basicClicked) {
      const updatedInfo = servicesData.map(item => ({
        ...item,     // Spread the existing properties of the item
        price:`$${(item.price * 1).toFixed(2)}`   // Update only the price property
      }));
       setInfo(updatedInfo)
       setBasicClicked(true);
       setStandardClicked(false);
       setPremiumClicked(false)
      //  setBasicClicked(false);
       
      
             
    }
  };

  return (
    <div
      id="Services"
      className={`services-container ${darkMode ? "dark-mode" : ""}`}
    >
      <div className={`title`}>
        <h1
          style={{
            fontWeight: "bold ",
            fontSize: "1.5rem",
            padding: "5px",
            color: "blue",
          }}
        >
          Provide
          <span
            style={{
              padding: "5px",
              color: "yellow",
              fontWeight: "bold",
              fontSize: "2rem",
            }}
          >
            Service
          </span>
        </h1>
      </div>
      <div className="card-level" style={{position:'sticky'}}>
        <span onClick={() => levelCheck("Basic")} style={{ backgroundColor: selectedButton === "Basic" ? "blue" : "" }}>Basic</span>
        <span onClick={() => levelCheck("Standard")} style={{ backgroundColor: selectedButton === "Standard" ? "blue" : "" }}>Standard</span>
        <span onClick={() => levelCheck("Premium")} style={{ backgroundColor: selectedButton === "Premium" ? "blue" : "" }}>Premium</span>
      </div>
      <div className="services-card">
        {info.map((service, index) => (
          <ServiceCard ServicesData={service} darkMode={darkMode} />
        ))}
      </div>
    </div>
  );
};

export default Services;
