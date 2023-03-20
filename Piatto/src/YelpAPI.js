import React, { useState } from 'react';
import { AiFillFire, AiOutlineClose } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { BsPeopleFill } from "react-icons/bs";
import profileImage from "./media/profile.jpg";
import "./FloatingNavBar.css";
import "./YelpAPI.css";
import { StarRating } from "./StarRating";
import './App.css';
import PropTypes from 'prop-types';

const YelpAPI = (props) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [location, setLocation] = useState('');
  const [showSearch, setShowSearch] = useState(false);
  const [formHidden, setFormHidden] = useState(true);
  const [starValue, setStarValue] = useState(0);

  const handleStarRatingChange = (value) => {
    setStarValue(value);
  };

  const toggleSearch = (e) => {
    e.preventDefault()
    setShowSearch((prevState) => !prevState);
    setFormHidden((prevState) => !prevState);
  };

  const handleYelpSearch = async () => {    
    if (searchTerm === '' || location === '') { 
      return;
    }

    const minRating = starValue / 5 + 1;
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    const yelpApiUrl = `https://api.yelp.com/v3/businesses/search?term=${searchTerm}&location=${location}&min_rating=${minRating}&limit=10`;
    const response = await fetch(proxyUrl + yelpApiUrl, {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json();
    setSearchTerm('');
    props.handleYelpData(data.businesses); // call the handleYelpData function passed as a prop
  };

  

  return (
    <>
    <div className="floating-nav-container">
      {!showSearch && (
        <>
          <button className="floating-nav-profile-image">
            <img src={profileImage} alt="Profile" />
          </button>

          <button className="floating-nav-icon">
            <BsPeopleFill />
          </button>

          <button className="floating-nav-icon fireIcon">
            <AiFillFire />
          </button>

          <button
            className="floating-nav-icon floating-nav-search-icon"
            onClick={toggleSearch}
          >
            <BiSearch />
          </button>
        </>
      )}

      {showSearch && (
        <form className={`floating-nav-icon ${formHidden ? "" : "formVisible"}`} onSubmit={(e) => e.preventDefault()}>
          <button className="floating-nav-icon" onClick={toggleSearch}>
            <AiOutlineClose />
          </button>

          <div className="stars">
            <StarRating onChange={handleStarRatingChange} />
          </div>

          <input
            className="textInput searchInput"
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
            required
          />
          <input
            className="textInput locationInput"
            type="text"
            placeholder="Location"
            value={location}
            onChange={(event) => setLocation(event.target.value)}
            required
          />

          <button className="floating-nav-icon2" onClick={handleYelpSearch}>
            <BiSearch />
          </button>
        </form>
      )}
    </div>
  </>

  );
};

export default YelpAPI;

YelpAPI.propTypes = {
  handleYelpData: PropTypes.func.isRequired,
  };

