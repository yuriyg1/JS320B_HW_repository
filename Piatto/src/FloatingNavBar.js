// import React, { useState } from "react";
// import { AiFillFire, AiOutlineClose } from "react-icons/ai";
// import { BiSearch } from "react-icons/bi";
// import { BsPeopleFill } from "react-icons/bs";
// import profileImage from "./media/profile.jpg";
// import "./FloatingNavBar.css";
// import { StarRating } from "./StarRating";
// import YelpAPI from "./YelpAPI";

// function FloatingNav() {
//   const [showSearch, setShowSearch] = useState(false);
//   const [notificationCount, setNotificationCount] = useState(2);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [location, setLocation] = useState("");

//   const toggleSearch = () => {
//     setShowSearch((prevState) => !prevState);
//   };

//   const handleSearchButtonClick = () => {
//     handleSearchSubmit(searchTerm, location);
//   };

//   const handleYelpSearch = () => {
//     YelpAPI({ searchTerm: searchTerm });
//   };

//   return (
//     <div className="floating-nav-container">
//       {!showSearch && (
//         <>
//           <a href="/profile" className="floating-nav-profile-image">
//             <img src={profileImage} alt="Profile" />
//           </a>

//           <button className="floating-nav-icon">
//             <BsPeopleFill />
//           </button>

//           <button className="floating-nav-icon fireIcon">
//             <AiFillFire />
//           </button>

//           <button
//             className="floating-nav-icon floating-nav-search-icon"
//             onClick={toggleSearch}
//           >
//             <BiSearch />
//           </button>
//         </>
//       )}

//       {showSearch && (
//         <form className="floating-nav-icon" onSubmit={(e) => e.preventDefault()}>
//           <button className="floating-nav-icon" onClick={toggleSearch}>
//             <AiOutlineClose />
//           </button>

//           <div className="stars">
//             <StarRating />
//           </div>

//           <input
//             className="textInput searchInput"
//             type="text"
//             placeholder="Search"
//             value={searchTerm}
//             onChange={(event) => setSearchTerm(event.target.value)}
//           />
//           <input
//             className="textInput locationInput"
//             type="text"
//             placeholder="Location"
//             value={location}
//             onChange={(event) => setLocation(event.target.value)}
//           />

//           <button className="floating-nav-icon2" onClick={handleYelpSearch}>
//             <BiSearch />
//           </button>
//         </form>
//       )}
//     </div>
//   );
// }

// export default FloatingNav;