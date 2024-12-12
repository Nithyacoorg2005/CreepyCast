import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar'; // Import your Navbar component
import './Signup.css';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignedIn, setIsSignedIn] = useState(false); // State to track signup status
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('http://localhost:5000/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, email, password }),
    });

    if (response.ok) {
      setIsSignedIn(true); // Update state to indicate signup success
      navigate('/main'); // Redirect to the main page
    } else {
      alert('Signup failed, please try again.');
    }
  };

  return (
    <div  style={{marginLeft:"300px"}}className="signup-container">
      {isSignedIn && <Navbar />} {/* Conditionally render Navbar */}
      
      {/* Background Video */}
      <video autoPlay muted loop className="background-video">
        <source
          src="https://videos.pexels.com/video-files/855570/855570-hd_1920_1080_25fps.mp4"
          type="video/mp4"
        />
      </video>

      {/* Signup Form */}
      <div className="signup-form-container">
        <h1>Welcome to CreepyCast</h1>
        <p>Sign up to unlock your spooky adventure.</p>

        <form onSubmit={handleSubmit} className="signup-form">
          <div className="input-container">
            <label htmlFor="username">👻 Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter a spooky alias..."
              required
            />
          </div>

          <div className="input-container">
            <label htmlFor="email">📧 Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email..."
              required
            />
          </div>

          <div className="input-container">
            <label htmlFor="password">🔒 Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Create a secure password..."
              required
            />
          </div>

          <button type="submit" className="submit-btn">
            🦇 Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
