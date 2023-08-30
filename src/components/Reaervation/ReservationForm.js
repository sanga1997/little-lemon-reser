import React, { useState } from 'react';
import './ReservationForm.css'; 
import ConfirmationContainer from './ConfirmationContainer'; 

const ReservationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    date: '',
    time: '',
    numOfPeople: '',
  });

  const [formSubmitted, setFormSubmitted] = useState(false); // Add this state

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="reservation-form">
      {formSubmitted ? (
        <ConfirmationContainer />
      ) : (
        <>
          <h2>Reserve a Table</h2>
          <p>Personal Information</p>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="tel"
              name="phoneNumber"
              placeholder="Phone Number"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
            />
            <p>Reservation Information</p>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
            />
            <select
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
            >
              <option value="" disabled>Select Time</option>
              <option value="12h00">12:00 PM</option>
              <option value="13h00">01:00 PM</option>
              <option value="18h00">06:00 PM</option>
              <option value="19h00">07:00 PM</option>
              <option value="20h00">08:00 PM</option>
              <option value="21h00">09:00 PM</option>
              <option value="22h00">10:00 PM</option>
            </select>
            <input
              type="number"
              name="numOfPeople"
              placeholder="Number of People"
              value={formData.numOfPeople}
              onChange={handleChange}
              required
            />
            <button type="submit" className="submit-button">Submit</button>
          </form>
        </>
      )}
    </div>
  );
};

export default ReservationForm;


              