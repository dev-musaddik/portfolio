import React, { useState } from "react";
import "./Navbar.css";
import Logo from "./../../img/mhLogo.png";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { FaSun, FaMoon } from 'react-icons/fa';
import { Link } from "react-scroll";
const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  
  const toggleMenu = () => {
     if (menuOpen === false) {
      setMenuOpen(true);
    } else setMenuOpen(false);
  };

  return (
    <>
    <div  className={`${darkMode ? "dark-mode-navbar" : ""}`} id="Navbar">
        <div className="n-laft">
          <img src={Logo} alt="i'm logo" />
        </div>
        <div className="n-right">
        <label className="switch">
                <input type="checkbox" checked={darkMode} onChange={toggleDarkMode} />
                <span className="slider">
                  <div className="mode">{darkMode ? <FaMoon color="blue" /> : <FaSun color="yellow" />}</div>
                    
                </span>
            </label>
          
          <div
            className="mobile"
            id="menu"
            style={{ display: "none" }}
            onClick={toggleMenu}
          >
            {menuOpen ? (
              <AiOutlineClose size={60}  id="menu-color-change" />
            ) : (
              <AiOutlineMenu size={60} id="menu-color-change" />
            )}
          </div>
          <div className={`n-link ${menuOpen ? 'active' :''}`}>
            <ul
              style={{ listStyle: "none" }}
              className={`${menuOpen ? "open" : ""}`}
              id={`${darkMode ? "dark-mode" : ""}`}
            >
              <li>
                <Link spy={true} to="Home" smooth={true} onClick={toggleMenu}>
                  Home
                </Link>
              </li>
              <li>
                <Link spy={true} to="About" smooth={true} onClick={toggleMenu}>
                  About
                </Link>
              </li>
              <li>
                <Link
                  spy={true}
                  to="Portfolio"
                  smooth={true}
                  onClick={toggleMenu}
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  spy={true}
                  to="Skill"
                  smooth={true}
                  onClick={toggleMenu}
                >
                  Skills
                </Link>
              </li>
              <li>
                <Link
                  spy={true}
                  to="Services"
                  smooth={true}
                  onClick={toggleMenu}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  spy={true}
                  to="Hobbies"
                  smooth={true}
                  onClick={toggleMenu}
                >
                  Hobbies
                </Link>
              </li>
              <li>
                <Link
                  spy={true}
                  to="Contract"
                  smooth={true}
                  className="pulsating-glow-button "
                  onClick={toggleMenu}
                >
                  Contract
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
