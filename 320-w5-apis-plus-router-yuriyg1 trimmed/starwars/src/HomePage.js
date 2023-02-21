// import starWarsData from './starwarsChars.json'
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';
import PropTypes from 'prop-types';

function HomePage({ data }) {
    const navigate = useNavigate();
  
    return (
      <div className="card-container">
        {/* {starWarsData.map((jedi, index) => ( */}
        {data.results.map((jedi, index) => (
          <div className="card" key={index}>

            <img
              src={require(`./img/${index < 10 ? index + 1 : 0}.jpg`)}
              alt={jedi.name}
            />
            
            <h2>{jedi.name}</h2>
            <button onClick={() => navigate('/detail', { state: { index: index } })}>Details</button>
          </div>
        ))}
      </div>
    );
  }
  
  export default HomePage;

  HomePage.propTypes = {
    data: PropTypes.shape({
      count: PropTypes.number.isRequired,
      next: PropTypes.string,
      previous: PropTypes.string,
      results: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string.isRequired,
          height: PropTypes.string.isRequired,
          mass: PropTypes.string.isRequired,
          hair_color: PropTypes.string.isRequired,
          skin_color: PropTypes.string.isRequired,
          eye_color: PropTypes.string.isRequired,
          birth_year: PropTypes.string.isRequired,
          gender: PropTypes.string.isRequired,
          homeworld: PropTypes.string.isRequired,
          films: PropTypes.arrayOf(PropTypes.string).isRequired,
          species: PropTypes.arrayOf(PropTypes.string).isRequired,
          vehicles: PropTypes.arrayOf(PropTypes.string).isRequired,
          starships: PropTypes.arrayOf(PropTypes.string).isRequired,
          created: PropTypes.string.isRequired,
          edited: PropTypes.string.isRequired,
          url: PropTypes.string.isRequired,
        })
      ).isRequired,
    }).isRequired,
  };