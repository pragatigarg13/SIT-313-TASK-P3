import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./SignUp.css";

function SignUp() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    setMessage("");

    // Check whether passwords match
    if (password !== confirmPassword) {
      setMessage("Passwords do not match.");
      return;
    }

    try {
      // Send user details to the backend
      const response = await fetch("http://localhost:5000/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          password
        })
      });

      const data = await response.json();

      if (response.ok) {
        alert(data.message);
        navigate("/login");
      } else {
        setMessage(data.message);
      }

    } catch (error) {
      setMessage("Unable to connect to the server. Please try again.");
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-box">

        <h2>Create a DEV@Deakin Account</h2>

        <form onSubmit={handleSignUp}>

          <div className="signup-field">
            <label>First Name*</label>
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>

          <div className="signup-field">
            <label>Last Name*</label>
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>

          <div className="signup-field">
            <label>Email*</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="signup-field">
            <label>Password*</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength="6"
            />
          </div>

          <div className="signup-field">
            <label>Confirm password*</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>

          {message && (
            <p className="error-message">{message}</p>
          )}

          <button type="submit">Create</button>

        </form>

        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>

      </div>
    </div>
  );
}

export default SignUp;