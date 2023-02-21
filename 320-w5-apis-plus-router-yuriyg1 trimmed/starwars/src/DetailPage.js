// import starWarsData from './starwarsChars.json'
import React from 'react';
import './DetailPage.css';
import PropTypes from 'prop-types';

import { useLocation } from 'react-router-dom';

function DetailPage({ data }) {
  const { state } = useLocation();
  // const jedi = starWarsData[state.index];
  const jedi = data.results[state.index];

  return (
    <div className="detail-container">
      <img src={require(`./img/${state.index < 10 ? state.index + 1 : 0}.jpg`)} alt={jedi.name} />
      <h2>{jedi.name}</h2>
      <p>Height: {jedi.height}</p>
      <p>Gender: {jedi.gender}</p>
      <p>Birth Year: {jedi.birth_year}</p>
    </div>
  );
}

export default DetailPage;

DetailPage.propTypes = {
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