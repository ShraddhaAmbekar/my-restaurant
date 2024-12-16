import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/Book.css";
import axios from 'axios';

const Book = () => {
  const navigate = useNavigate(); // Hook to navigate to different pages

  // State to manage form data and errors
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    selectedPersons: "",
    bookingDate: "",
  });
  
  const [error, setError] = useState("");  // To handle error messages
  const [bookingSuccess, setBookingSuccess] = useState(false);  // For success message

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();  // Prevent form from refreshing the page

    // Validation for required fields
    if (!formData.name || !formData.phone || !formData.email || !formData.selectedPersons || !formData.bookingDate) {
      setError("Please fill in all fields.");
      setBookingSuccess(false);  // Reset booking success
      return;
    }

    setError("");  // Clear error message
    setBookingSuccess(true);  // Set booking success flag

    try {
      // Send the form data to the mock API
      const response = await axios.post(
        'https://675bdd409ce247eb1937a917.mockapi.io/restaurant/bookingdata',
        formData
      );
      
      // On success
      setBookingSuccess(true);
      setError("");  // Clear any errors

      // Redirect to BookingConfirmation page after a successful booking
      setTimeout(() => {
        navigate("/booking-confirmation");
      }, 2000); // Delay for 2 seconds before redirecting
    } catch (err) {
      // Handle error if the API request fails
      setError('Error occurred during booking');
      setBookingSuccess(false);  // Reset success flag
    }
  };

  return (
    <section className="book_section layout_padding">
      <div className="container">
        <div className="heading_container">
          <h2>Book A Table</h2>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="form_container">
              <form onSubmit={handleSubmit}>
                {/* Name Input */}
                <div>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>

                {/* Phone Input */}
                <div>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Phone Number"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>

                {/* Email Input */}
                <div>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Your Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                {/* Persons Selection */}
                <div>
                  <select
                    className="form-control nice-select wide"
                    value={formData.selectedPersons}
                    onChange={handleChange}
                    name="selectedPersons"
                  >
                    <option value="" disabled>
                      How many persons?
                    </option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>

                {/* Booking Date */}
                <div>
                  <input
                    type="date"
                    className="form-control"
                    name="bookingDate"
                    value={formData.bookingDate}
                    onChange={handleChange}
                  />
                </div>

                {/* Error and Success Messages */}
                {error && <div style={{ color: "red" }}>{error}</div>}
                {bookingSuccess && (
                  <div style={{ color: "green" }}>Booking Successful!</div>
                )}

                {/* Submit Button */}
                <div className="btn_box">
                  <button type="submit">Book Now</button>
                </div>
              </form>
            </div>
          </div>

          {/* Google Map Section */}
          <div className="col-md-6">
            <div className="map_container">
              <iframe
                src="https://www.google.com/maps/embed?pb=your_map_embed_code"
                allowFullScreen
                loading="lazy"
                style={{ width: "100%", height: "400px", border: "0" }}
                title="Google Maps"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Book;
