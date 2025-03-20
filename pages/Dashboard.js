// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const Dashboard = () => {
//   const navigate = useNavigate();
//   const [username, setUsername] = useState('');

//   useEffect(() => {
//     const token = localStorage.getItem('token');
//     const storedUsername = localStorage.getItem('username'); // Fallback

//     if (!token) {
//       navigate('/login');
//     } else {
//       axios.get('http://localhost:5247/api/Auth/me', {
//         headers: { Authorization: `Bearer ${token}` }
//       })
//       .then(response => {
//         setUsername(response.data.username); // API response
//       })
//       .catch(error => {
//         console.error('Error fetching user data:', error);
//         setUsername(storedUsername || 'User'); // Use localStorage fallback
//       });
//     }
//   }, [navigate]);

//   const handleLogout = () => {
//     localStorage.clear();
//     navigate('/login');
//   };

//   return (
//     <div className="container mt-5">
//       <div className="card shadow p-4 text-center">
//         <h2 className="mb-3">Dashboard</h2>
//         <p className="lead">Welcome, <strong>{username || 'User'}</strong>! 🎉</p>
//         <button className="btn btn-danger mt-3" onClick={handleLogout}>Logout</button>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Card, Button } from 'react-bootstrap';
import DashboardNavbar from '../components/DashboardNavbar';

const Dashboard = () => {
  const navigate = useNavigate();
  useEffect(() => {
      document.body.style.backgroundColor = '#FFD700'; 
      return () => {
        document.body.style.backgroundColor = ''; 
      };
    }, []);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login'); 
    }
  }, [navigate]);

  // Logout handler
  const handleLogout = () => {
    localStorage.clear();
    navigate('/'); // Redirect to Welcome Page
  };

  // Navigate to EventPage
  const handleGoToEvents = () => {
    navigate('/events');
  };

  return (
    <>
      
      <DashboardNavbar showLogout={true} onLogout={handleLogout} />

      <Container className="d-flex justify-content-center align-items-center min-vh-100">
        <Card
          className="p-4 shadow-lg text-center"
          style={{
            width: '100%',
            maxWidth: '700px',
            backgroundColor: '#FFD700', 
            color: '#000', // Black text
            border: '3px solid #000',
            borderRadius: '15px',
            boxShadow: '0 8px 20px rgba(255, 215, 0, 0.8)'
          }}
        >
          <h2 className="mb-4">Hello, Welcome to the Dashboard!</h2>

          <Button
            variant="outline-dark"
            className="w-100"
            style={{
              backgroundColor: '#000',
              color: '#FFD700',
              border: 'none',
              fontWeight: 'bold',
              transition: 'transform 0.2s'
            }}
            onMouseOver={(e) => (e.target.style.transform = 'scale(1.05)')}
            onMouseOut={(e) => (e.target.style.transform = 'scale(1)')}
            onClick={handleGoToEvents}
          >
            Go to Events
          </Button>
        </Card>
      </Container>
    </>
  );
};

export default Dashboard;




