import React, { useState } from "react";
import Proptypes from 'prop-types';
import './App.css';
// import "bootstrap/dist/css/bootstrap.min.css";

const RentalCards = ({ rentals }) => {
  const [selectedRentals, setSelectedRentals] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const selectRental = (rental) => {
    setSelectedRentals([...selectedRentals, rental]);
  };

  const removeFromCart = (rental) => {
    setSelectedRentals(selectedRentals.filter((ren) => ren.id !== rental.id));
  };

  const toggleCart = () => {
    setShowCart(!showCart);
  };


  return (
    <div className="container">
      <div className="header">
        <h3 className="rental-title">Rental Items</h3>
        <div className="container2">
          {selectedRentals.length > 0 && (
            <div className="cartQuant">
              {selectedRentals.length}
            </div>
          )}
          <div
            onClick={toggleCart}
            className="cart"
          >
            <span label="cart">
              🛒
            </span>
          </div>
        </div>
      </div>
      <div className="rentals">
        {rentals.map((rental) => (
          <div
            key={rental.id}
            className="rental"
          >
            <div className="image-box">
              <img src={rental.image} alt={rental.title} className="rental-image"/>
            </div>

            <h4 className="rental-card-title">{rental.title}</h4>
            <p className="location">📍{rental.location.city}, {rental.location.country}</p>
            <p className="rental-card-price">{rental.rating.stars}★ ({rental.rating.reviews})</p>
            <p className="rental-card-price">${rental.payment.cost}/day</p>

            <div className="options"> 
              <span>{rental.host.name} </span>
              {rental.host.isSuperhost && <span className="superhost" title="Superhost">⚜️</span>}
              {rental.payment.description === "Free cancellation" && (
                <span className="freeCancellation" title="Free Cancellation">🔮</span>
              )}
            </div>

            <button
              onClick={() => selectRental(rental)}
              //if rental on in cart, disable add-to-cart button
              className={`add-to-cart-btn ${selectedRentals.includes(rental) ? "disabled" : ""}`}
              disabled={selectedRentals.includes(rental)}
            >
              Add to cart
            </button>

          </div>
        ))}
      </div>

      {showCart && (
        <div className="cart-container">

          <div className="close-container">
            <span
              className="close-icon"
              onClick={toggleCart}
              label="close"
            >
              ❌
            </span>
          </div>

          {selectedRentals.map((selectedRental) => (
            <div key={selectedRental.id} className="cart-item">
                <div className="cart-item-image">
                  <img src={selectedRental.image} alt={selectedRental.title} className="cart-item-img"/>
                </div>
                <div className="cart-item-details">
                  <p className="cart-item-title">{selectedRental.title}</p>
                  <p className="cart-item-price">${selectedRental.payment.cost}/day</p>
                </div>
                <div className="remove-icon-container">     
                  <button onClick={() => removeFromCart(selectedRental)} className="remove-from-cart-btn">
                    🗑
                  </button>
            </div>
            </div>

          ))}
          <div className="cart-total">
            <p>Total: ${selectedRentals.reduce((totall, currentt) => totall + currentt.payment.cost, 0)}</p>
            <button className="checkout-btn">Check Out</button>
          </div>
        </div > 
      )}

    </div>
  )
}
export default RentalCards;




RentalCards.propTypes = {
  rentals: Proptypes.arrayOf(Proptypes.shape({
    title: Proptypes.string.isRequired,
    houseType: Proptypes.string.isRequired,
    image: Proptypes.string.isRequired,
    location: Proptypes.shape({
      city: Proptypes.string.isRequired,
      country: Proptypes.string.isRequired
    }),
    payment: Proptypes.shape({
      cost: Proptypes.number.isRequired,
      description: Proptypes.string.isRequired
    }),
    host: Proptypes.shape({
      name: Proptypes.string.isRequired,
      isSuperhost: Proptypes.bool.isRequired
    }),
    rating: Proptypes.shape({
      stars: Proptypes.number.isRequired,
      reviews: Proptypes.number.isRequired
    })
  })).isRequired
};





