import { useState } from 'react';

function ReviewFilter() {
  const [selectedStars, setSelectedStars] = useState(0);

  const handleStarClick = (value) => {
    setSelectedStars(value);
  };

  return (
    <div className="star-filter">
      {[1, 2, 3, 4, 5].map((value) => (
        <span
          key={value}
          className={`star ${value <= selectedStars ? "selected" : ""}`}
          onClick={() => handleStarClick(value)}
        />
      ))}
    </div>
  );
}

export default ReviewFilter;
