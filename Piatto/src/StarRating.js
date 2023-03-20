import React, { useState, useEffect } from 'react';
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs';

export function StarRating({ onChange }) {
  const [selectedStars, setSelectedStars] = useState(0);
  const [starValue, setStarValue] = useState(0);

  const handleStarClick = (value) => {
    if (selectedStars < value) {
      setStarValue(value - 0.5);
    } else {
      setStarValue(value);
    }
  };

  const handleStarHover = (event, value) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;

    if (x <= rect.width / 2) {
      setSelectedStars(value - 0.5);
    } else {
      setSelectedStars(value);
    }
  };

  const handleStarLeave = () => {
    setSelectedStars(starValue);
  };

  useEffect(() => {
    onChange && onChange(starValue);
  }, [starValue, onChange]);

  return (
    <div className="star-filter">
      {[1, 2, 3, 4, 5].map((value) => (
        <span
          key={value}
          className="star"
          onClick={() => handleStarClick(value)}
          onMouseEnter={(event) => handleStarHover(event, value)}
          onMouseLeave={handleStarLeave}
        >
          {selectedStars >= value ? (
            <BsStarFill />
          ) : selectedStars >= value - 0.5 ? (
            <BsStarHalf />
          ) : (
            <BsStar />
          )}
        </span>
      ))}
      {/* <span>{starValue}</span> */}
    </div>
  );
}
