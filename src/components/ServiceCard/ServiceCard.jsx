import React from "react";
import './ServiceCard.css'
const ServiceCard = ({ServicesData , darkMode}) => {
   
  return (
    <>
     <div className="services-container">
      
        <div   className={`service-card ${darkMode ? "dark-mode-services" : ""}`} key={ServicesData.id} >
          <img src={ServicesData.icon} alt="" />
          <h3>{ServicesData.name}</h3>
          <p>{ServicesData.description}</p>
          <h4>price:{ServicesData.price}</h4>
        </div>
      
    </div>
    </>
  );
};

export default ServiceCard;
