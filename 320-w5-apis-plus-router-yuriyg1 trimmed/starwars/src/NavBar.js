// import React, { useState } from "react";
import React from "react";
import { Link } from 'react-router-dom';
import homeLightBG from './media/homeLightBG.jpeg';
import LightBG from './media/LightBG.jpeg';
// import DarkBG from './media/DarkBG.jpeg';
import "./Navbar.css";

function Navbar() {
  // const [isDarkMode, setIsDarkMode] = useState(false);

  // const makeItDark = () => {
  //   setIsDarkMode(!isDarkMode);
  // };

  return (
    // <nav className={isDarkMode ? "dark" : "light"}>
    <>
      <span className="home">
        <Link to="/">
          <img src={homeLightBG} alt="Logo" style={{ width: "50px", height: "50px" }} />
        </Link>
      </span>

      <span className="ambientMode">
        {/* <button onClick={makeItDark}> */}
          {/* <img src={isDarkMode ? DarkBG : LightBG} alt="ambient mode button" style={{ width: "50px", height: "50px"}} /> */}
          <img src={LightBG} alt="ambient mode button" style={{ width: "50px", height: "50px"}} />
        {/* </button> */}
      </span>
      </>  
    // </nav>
  );
}

export default Navbar;
