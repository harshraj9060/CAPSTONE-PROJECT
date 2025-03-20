import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; 

const SignupForm = () => {
  const [username, setUsername] = useState('');
  const [passwordHash, setPasswordHash] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    const userPayload = {
      userID: 0, 
      username: username,
      passwordHash: passwordHash, 
      email: email,
      role: role,
      createdAt: new Date().toISOString() 
    };

    try {
      const response = await axios.post('https://localhost:7114/api/Auth/register', userPayload, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (response.status === 200 || response.status === 201) {
        alert('Signup successful!');
        navigate('/login'); 
      } else {
        alert('Signup failed. Please try again.');
      }
    } catch (error) {
      console.error('Error during signup:', error.response?.data || error.message);
      alert(`Signup failed: ${error.response?.data?.message || 'An unexpected error occurred.'}`);
    }
  };

  return (
    <div className="signup-form">
      <h2>Register</h2>
      <form onSubmit={handleSignup}>
        <div>
          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            placeholder="Enter your username"
          />
        </div>

        <div>
          <label>Password</label>
          <input
            type="password"
            value={passwordHash}
            onChange={(e) => setPasswordHash(e.target.value)}
            required
            placeholder="Enter your password"
          />
        </div>

        <div>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Enter your email"
          />
        </div>

        <div>
          <label>Role</label>
          <input
            type="text"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            required
            placeholder="Enter role (Attendee, Admin, Organizer)"
          />
        </div>

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignupForm;
