import React from 'react';
import './ConfirmationContainer.css';

const ConfirmationContainer = () => {
  const handleRefresh = () => {
    window.location.reload(); // Reload the page
  };

  return (
    <div className="confirmation-container">
      <h2>Thank You for Your Reservation</h2>
      <p>Your booking has been confirmed.</p>
      <button className="return-button" onClick={handleRefresh}>
        Return to Home
      </button>
    </div>
  );
};

export default ConfirmationContainer;
