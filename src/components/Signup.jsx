import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const SignUp = () => {
  // State to store form data
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic form validation
    if (!username || !email || !password || !confirmPassword) {
      setError("All fields are required.");
    } else if (password !== confirmPassword) {
      setError("Passwords do not match.");
    } else {
      setError("");
      // Simulate user registration (replace this with actual API call)
      console.log("Registering user with:", username, email, password);

      // Redirect or show success message
      alert("Sign Up Successful!"); // Replace with actual logic for redirect or dashboard
    }
  };

  return (
    <div className="container-fluid vh-100 bg-dark d-flex justify-content-center align-items-center">
      <div className="col-lg-4 col-md-6 col-sm-8 p-4 rounded shadow-lg" style={{ backgroundColor: "#333" }}>
        <h2 className="text-white text-center mb-4">Sign Up</h2>
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
            <label htmlFor="email" className="form-label text-white">Email Address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email"
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

          <div className="mb-3">
            <label htmlFor="confirmPassword" className="form-label text-white">Confirm Password</label>
            <input
              type="password"
              className="form-control"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm password"
              style={{ backgroundColor: "#444", color: "white", borderColor: "#555" }}
            />
          </div>

          {error && <div className="text-danger mb-3">{error}</div>}

          <button type="submit" className="btn btn-primary w-100 py-2" style={{ backgroundColor: "#ff7f00", borderColor: "#ff7f00" }}>
            Sign Up
          </button>
        </form>
        <div className="text-center mt-3">
          <p className="text-white">Already have an account? <a href="/sign-in" className="text-warning">Sign In</a></p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
