import React, { useState } from 'react';
import './TopContainer.css'; 
import ReservationForm from './Reservation/ReservationForm'; 
import food from "../images/food.png";

const TopContainer = () => {
  const [showReservationForm, setShowReservationForm] = useState(false);

  const handleReserveClick = () => {
    setShowReservationForm(true);
  };

  return (
    <div className="top-container">
      <div className="top-text">
        <h1>Little Lemon Chicago</h1>
        <p>We are a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
        <button className="reserve-button" onClick={handleReserveClick}>Reserve Table</button>
      </div>
      <div className="top-image">
        <img src={food} alt="Food" />
      </div>
      {showReservationForm && <ReservationForm />}
    </div>
  );
};

export default TopContainer;

