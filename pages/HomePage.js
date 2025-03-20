// src/pages/HomePage.js
import React from 'react';
import { Container, Card, Row, Col, Image } from 'react-bootstrap';
import AppNavbar from '../components/Navbar';

const HomePage = () => {
  return (
    <>
      <AppNavbar />
      <div className="home-page" style={{ 
        background: 'linear-gradient(to right, #ff7e5f, #feb47b)', 
        minHeight: '100vh', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        padding: '20px'
      }}>
        <Container>
          <Row className="justify-content-center">
            <Col md={8}>
              <Card className="text-center p-5 shadow-lg rounded">
                <h1 className="mb-3 text-primary fw-bold">Welcome to Event Management System</h1>
                <p className="text-muted fs-5">
                  📅 Plan, organize, and manage your events effortlessly!  
                  Track RSVPs, customize event details, and create unforgettable experiences—all in one place.
                </p>
                <div className="mt-4">
                  <Image 
                    src="/Eventimage.jpeg" 
                    alt="Event Management" 
                    className="img-fluid w-65 rounded shadow"
                  />
                </div>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default HomePage;











