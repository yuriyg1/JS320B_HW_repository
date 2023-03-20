// import React from 'react';
// import './NavStyles.css';

// function NavBar() {
//   return (
//     <nav className="nav">
//       <div className="search">
//         <input type="text" placeholder="Search" className="search-input" />
//         <i className="fas fa-search search-icon"></i>
//       </div>
//       <div className="location">
//         <i className="fas fa-map-marker-alt location-icon"></i>
//       </div>
//     </nav>
//   );
// }

// export default NavBar;






import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import "./NavStyles.css";

function Navbar() {
  return (
    <div className="Navbar">

      <div className="Nav__search">
        <input type="text" placeholder="Search" />
        <AiOutlineSearch className="Nav__locationIcon" />
      </div>

      <div className="Nav__search">
        <input type="text" placeholder="Location" />
        <AiOutlineSearch className="Nav__locationIcon" />
      </div>

    </div>
  );
}

export default Navbar;





