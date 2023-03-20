import React from 'react';
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs';

const RatingStars = ({ rating }) => {
  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<BsStarFill key={i} />);
      } else if (i - rating === 0.5) {
        stars.push(<BsStarHalf key={i} />);
      } else {
        stars.push(<BsStar key={i} />);
      }
    }
    return stars;
  };

  return <div className="restaurant-rating">{renderStars()}</div>;
};

export default RatingStars;
