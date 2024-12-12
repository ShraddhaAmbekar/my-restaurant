import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router";

const SignIn = () => {
  // State to store form data
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic form validation
    if (!username || !password) {
      setError("Both fields are required.");
    } else {
      setError("");
      // Simulate authentication (you can replace this with real API call)
      console.log("Signing in with:", username, password);
      
      // Redirect or show a success message
      alert("Sign In Successful!"); // Replace with actual logic for redirect or dashboard
    }
  };

  return (
    <div className="container-fluid vh-100 bg-dark d-flex justify-content-center align-items-center">
      <div className="col-lg-4 col-md-6 col-sm-8 p-4 rounded shadow-lg" style={{ backgroundColor: "#333" }}>
        <h2 className="text-white text-center mb-4">Sign In</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="username" className="form-label text-white">Username</label>
            <input
              type="text"
              className="form-control"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter username"
              style={{ backgroundColor: "#444", color: "white", borderColor: "#555" }}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label text-white">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              style={{ backgroundColor: "#444", color: "white", borderColor: "#555" }}
            />
          </div>

          {error && <div className="text-danger mb-3">{error}</div>}

          <button type="submit" className="btn btn-primary w-100 py-2" style={{ backgroundColor: "#ff7f00", borderColor: "#ff7f00" }}>
            Sign In
          </button>
        </form>
        <div className="text-center mt-3">
          <p className="text-white">Don't have an account? <Link to="/signup" className="text-warning">Sign Up</Link></p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
