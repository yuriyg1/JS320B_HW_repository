import React, { useState } from 'react';
import RatingStars from './RatingStars';
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md';
import './List.css';

const List = ({ data, handleSelectRestaurant }) => {
  const [favorites, setFavorites] = useState([]);

  const handleAddToFavorites = (restaurant) => {
    setFavorites([...favorites, restaurant]);
  };

  const isFavorite = (restaurant) => {
    return favorites.some((fav) => fav.id === restaurant.id);
  };

  return (
    <div className="restaurant-list">
      {data.map((restaurant) => (
        <div
          key={restaurant.id}
          className="restaurant-card"
          onClick={() => handleSelectRestaurant(restaurant)}
        >
          <div className="restaurant-card-header">
            <img
              src={restaurant.image_url}
              alt={restaurant.name}
              className="restaurant-image"
            />
            {isFavorite(restaurant) ? (
              <MdFavorite
                className="favorite-icon"
                onClick={(e) => {
                  e.stopPropagation();
                  setFavorites(favorites.filter((fav) => fav.id !== restaurant.id));
                }}
              />
            ) : (
              <MdFavoriteBorder
                className="favorite-icon"
                onClick={(e) => {
                  e.stopPropagation();
                  handleAddToFavorites(restaurant);
                }}
              />
            )}
          </div>
          <div className="restaurant-card-body">
            <h2 className="restaurant-title">{restaurant.name}</h2>
            <p className="restaurant-address">
              {restaurant.location.address1}, {restaurant.location.address2}
              <br />
              {restaurant.location.city}, {restaurant.location.state}{' '}
              {restaurant.location.zip_code}
            </p>
            <RatingStars rating={restaurant.rating} />
          </div>
          <p className="restaurant-distance">
            {`${(restaurant.distance / 1609.344).toFixed(2)} miles`}
          </p>
        </div>
      ))}
    </div>
  );
};

export default List;