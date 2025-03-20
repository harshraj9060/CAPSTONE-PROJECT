// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios'; 

// const SignupForm = () => {
//   const [username, setUsername] = useState('');
//   const [passwordHash, setPasswordHash] = useState('');
//   const [email, setEmail] = useState('');
//   const [role, setRole] = useState('');
//   const navigate = useNavigate();

//   const handleSignup = async (e) => {
//     e.preventDefault();

//     const userPayload = {
//       userID: 0, 
//       username: username,
//       passwordHash: passwordHash, 
//       email: email,
//       role: role,
//       createdAt: new Date().toISOString() 
//     };

//     try {
//       const response = await axios.post('http://localhost:5247/api/Auth/register', userPayload, {
//         headers: {
//           'Content-Type': 'application/json'
//         }
//       });

//       if (response.status === 200 || response.status === 201) {
//         alert('Signup successful!');
//         navigate('/login'); 
//       } else {
//         alert('Signup failed. Please try again.');
//       }
//     } catch (error) {
//       console.error('Error during signup:', error.response?.data || error.message);
//       alert(`Signup failed: ${error.response?.data?.message || 'An unexpected error occurred.'}`);
//     }
//   };

//   return (
//     <div className="signup-form">
//       <h2>Register</h2>
//       <form onSubmit={handleSignup}>
//         <div>
//           <label>Username</label>
//           <input
//             type="text"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             required
//             placeholder="Enter your username"
//           />
//         </div>

//         <div>
//           <label>Password</label>
//           <input
//             type="password"
//             value={passwordHash}
//             onChange={(e) => setPasswordHash(e.target.value)}
//             required
//             placeholder="Enter your password"
//           />
//         </div>

//         <div>
//           <label>Email</label>
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//             placeholder="Enter your email"
//           />
//         </div>

//         <div>
//           <label>Role</label>
//           <input
//             type="text"
//             value={role}
//             onChange={(e) => setRole(e.target.value)}
//             required
//             placeholder="Enter role (Attendee, Admin, Organizer)"
//           />
//         </div>

//         <button type="submit">Sign Up</button>
//       </form>
//     </div>
//   );
// };

// export default SignupForm;
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

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
      const response = await axios.post('http://localhost:5247/api/Auth/register', userPayload, {
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
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card shadow p-4 w-50">
        <h2 className="text-center mb-4">Register</h2>
        <form onSubmit={handleSignup}>
          <div className="mb-3">
            <label className="form-label">Username</label>
            <input
              type="text"
              className="form-control"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              value={passwordHash}
              onChange={(e) => setPasswordHash(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Role</label>
            <input
              type="text"
              className="form-control"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-success w-100">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
