import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/Book.css"

const Book = () => {
  const navigate = useNavigate(); // Hook to navigate to different pages

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [selectedPersons, setSelectedPersons] = useState("");
  const [bookingDate, setBookingDate] = useState("");
  const [error, setError] = useState("");
  const [bookingSuccess, setBookingSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "phone":
        setPhone(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "selectedPersons":
        setSelectedPersons(value);
        break;
      case "bookingDate":
        setBookingDate(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !phone || !email || !selectedPersons || !bookingDate) {
      setError("Please fill in all fields.");
      setBookingSuccess(false);
    } else {
      setError("");
      setBookingSuccess(true);

      // Redirect to BookingConfirmation page after successful booking
      setTimeout(() => {
        navigate("/booking-confirmation");
      }, 2000); // Delay navigation to show the success message
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
                <div>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Name"
                    name="name"
                    value={name}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Phone Number"
                    name="phone"
                    value={phone}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Your Email"
                    name="email"
                    value={email}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <select
                    className="form-control nice-select wide"
                    value={selectedPersons}
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
                <div>
                  <input
                    type="date"
                    className="form-control"
                    name="bookingDate"
                    value={bookingDate}
                    onChange={handleChange}
                  />
                </div>

                {error && <div style={{ color: "red" }}>{error}</div>}
                {bookingSuccess && (
                  <div style={{ color: "green" }}>Booking Successful!</div>
                )}

                <div className="btn_box">
                  <button type="submit">Book Now</button>
                </div>
              </form>
            </div>
          </div>
          <div className="col-md-6">
            <div className="map_container">
             {/* google map */}
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
