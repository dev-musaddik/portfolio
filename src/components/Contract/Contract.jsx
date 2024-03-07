import React, { useEffect, useState } from "react";
import "./Contract.css";
import { AiFillGithub,AiOutlineMail,AiOutlineFacebook,AiOutlineWhatsApp } from 'react-icons/ai';
import {BsFillTelephoneFill} from 'react-icons/bs'
import { CiLocationOn } from 'react-icons/ci';
import {GiSelfLove} from 'react-icons/gi'
const Contract = ({ darkMode }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };
  useEffect(() => {
    if (submitted) {
      const timer = setTimeout(() => {
        setSubmitted(false);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [submitted]);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div id="Contract" className={`${darkMode ? "dark-mode" : ""}`}>
      <div className={`contact-container ${darkMode ? "dark-mode" : ""}`}>
        <div className="contact-card">
          <h2>Get in touch</h2>
          <p>If you have any questions, feel free to reach out!</p>
          {submitted && (
            <p className="success-message">
              Thank you for your message! I'll be in touch soon.
            </p>
          )}
          <div className="contract-box-and-map">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="  Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={`${darkMode ? "dark-mode" : ""}`}></input>
                
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="  Your Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`${darkMode ? "dark-mode" : ""}`}></input>
              
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  placeholder="  Your Message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className={`${darkMode ? "dark-mode" : ""}`}>

                  </textarea>
              </div>
              <button type="submit">Send Message</button>
            </form>
            <div className="google-map">
              <iframe
                title="Google Map"
                src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7304.3578846532555!2d89.65597629999999!3d23.7409975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1692373496747!5m2!1sen!2sbd`}
                height="300"
                frameBorder="0"
                style={{ border: 0 }}
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="0"
              ></iframe>
            </div>
          </div>
          <div className={`con-info ${darkMode ? "dark-mode" : ""}`}>
            <div className="icons">
              
               <h3> <AiFillGithub  /><a href="https://github.com/dev-musaddik/musaddik">Github</a></h3>
               <h3><AiOutlineMail  /><a href="mailto:musaddikh13@gmail.com">Email</a></h3>
               <h3><AiOutlineFacebook  /><a href="https://www.facebook.com/m.musaddik.h">Facebook</a></h3>
               <h3><AiOutlineWhatsApp /><a href="https://wa.me/qr/S3BWNP7EO567E1">WhatsApp</a></h3>
               
            </div>
            <div className="phone">
             <BsFillTelephoneFill />  <h3><a href="tel:01757346415">+880 1757346415</a></h3>
            </div>
            <div className="address">
            <CiLocationOn /> 
            <h3>Sreepur,Rajbari In Banglabesh</h3>
            </div>
            
          </div>
          <p style={{textAlign:'center',width:'100%' ,display:'flex',alignItems:'center',justifyContent:'center'}}>
                        Made with <GiSelfLove/> by musaddik | © copyright 2023
                    </p>
        </div>
      </div>
    </div>
  );
};

export default Contract;
