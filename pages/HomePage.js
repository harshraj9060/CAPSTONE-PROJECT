// src/pages/HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className="container text-center py-5">
      <h1 className="display-3 mb-4">Welcome to the Home Page!</h1>
      <p className="lead mb-5">Bringing Your Events to Life, One Click at a Time</p>

      <div className="row justify-content-center">
        <div className="col-12 col-md-6 col-lg-4">
          <div className="card shadow-sm border-light rounded">
            <div className="card-body">
              <h2 className="card-title mb-4">Choose an option:</h2>
              <div className="d-grid gap-3">
                <Link to="/login" className="btn btn-primary btn-lg">Login</Link>
                <Link to="/signup" className="btn btn-secondary btn-lg">Sign Up</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;



