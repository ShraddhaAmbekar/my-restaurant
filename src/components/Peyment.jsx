import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Payment = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const item = location.state; // Item data passed from the MenuItemDetail page
  const [quantity, setQuantity] = useState(1);
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");

  // If no item is passed, return to home or menu page
  if (!item) {
    return <p>No item data available. Please navigate from the Menu page.</p>;
  }

  // Calculate total price
  const priceWithoutSymbol = parseFloat(item.price.slice(1)); // Remove "$" symbol and convert to float
  const totalPrice = (priceWithoutSymbol * quantity).toFixed(2);

  // Handle form submission (payment)
  const handlePayment = async (e) => {
    e.preventDefault();

    // Create payment object
    const paymentData = {
      cardNumber,
      expiryDate,
      cvv,
      itemName: item.name,
      totalPrice,
    };

    // Simulate sending data to the backend (API)
    try {
      // Simulate API call to a backend payment processor
      const response = await fakeApiCall(paymentData);

      // Assuming the payment was successful
      if (response.status === "success") {
        alert(`Payment successful for ${item.name}. Total: $${totalPrice}`);
        navigate("/thank-you"); // Redirect to a Thank You page or any success page
      } else {
        alert("Payment failed. Please try again.");
      }
    } catch (error) {
      alert("Payment failed. Please try again.");
    }
  };

  // Fake API call function (simulating backend interaction)
  const fakeApiCall = (paymentData) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate a successful payment response
        resolve({ status: "success", message: "Payment processed" });
      }, 2000); // Simulating a delay of 2 seconds
    });
  };

  return (
    <div className="payment-page" style={{ backgroundColor: "#222", color: "#fff", padding: "20px" }}>
      <h1 style={{ textAlign: "center" }}>Payment</h1>
      
      {/* Order Summary */}
      <div className="order-summary" style={{ marginTop: "20px", textAlign: "center" }}>
        <h2>Order Summary</h2>
        <div>
          <h3>{item.name}</h3>
          <p>Quantity: {quantity}</p>
          <p>Total Price: ${totalPrice}</p>
        </div>
      </div>

      {/* Payment Form */}
      <div className="payment-form" style={{ marginTop: "40px", textAlign: "center" }}>
        <h2>Payment Details</h2>
        <form onSubmit={handlePayment}>
          <div style={{ marginBottom: "20px" }}>
            <label htmlFor="cardNumber" style={{ fontSize: "1.2em", marginBottom: "10px" }}>Card Number</label><br />
            <input
              type="text"
              id="cardNumber"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              placeholder="Enter card number"
              style={{ padding: "10px", width: "300px", fontSize: "1.1em" }}
              required
            />
          </div>
          
          <div style={{ marginBottom: "20px" }}>
            <label htmlFor="expiryDate" style={{ fontSize: "1.2em", marginBottom: "10px" }}>Expiration Date</label><br />
            <input
              type="month"
              id="expiryDate"
              value={expiryDate}
              onChange={(e) => setExpiryDate(e.target.value)}
              style={{ padding: "10px", width: "150px", fontSize: "1.1em" }}
              required
            />
          </div>

          <div style={{ marginBottom: "20px" }}>
            <label htmlFor="cvv" style={{ fontSize: "1.2em", marginBottom: "10px" }}>CVV</label><br />
            <input
              type="text"
              id="cvv"
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
              placeholder="CVV"
              style={{ padding: "10px", width: "150px", fontSize: "1.1em" }}
              required
            />
          </div>

          <button
            type="submit"
            style={{
              padding: "10px 20px",
              fontSize: "1.2em",
              backgroundColor: "#ffcc00",
              color: "#000",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer"
            }}
          >
            Pay Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Payment;
