import React, { useEffect, useState } from 'react';
import ApiService from '../services/ApiService';
import { Card, Container, Row, Col, Alert } from 'react-bootstrap';

const NotificationCard = ({ userId }) => {
  const [notifications, setNotifications] = useState([]);
  const [message, setMessage] = useState({ type: '', text: '' });

  useEffect(() => {
    const fetchNotifications = async () => {
      const response = await ApiService.getNotificationsByUser(userId);
      if (response.success) {
        setNotifications(response.data);
      } else {
        setMessage({ type: 'danger', text: 'Failed to fetch notifications.' });
      }
    };
    fetchNotifications();
  }, [userId]);

  return (
    <div style={{ backgroundColor: '#FFD700', minHeight: '100vh', padding: '20px' }}>
      <Container>
        <h2 className="text-center my-4 text-black">Your Notifications</h2>

        {/* Display Success/Failure Messages */}
        {message.text && (
          <Alert variant={message.type} className="text-center">
            {message.text}
          </Alert>
        )}

        {/* Display Notifications in Two Columns */}
        <Row>
          {notifications.length > 0 ? (
            notifications.map((notification) => (
              <Col key={notification.notificationID} md={6} className="mb-3">
                <Card
                  className="p-3 shadow-sm"
                  style={{
                    backgroundColor: '#FFFF',
                    color: '#000',
                    border: '3px solid #000'
                  }}
                >
                  <h4>{notification.message}</h4>
                  <p><strong>Event ID:</strong> {notification.eventID}</p>
                  <p><strong>Sent At:</strong> {new Date(notification.sentAt).toLocaleString()}</p>
                </Card>
              </Col>
            ))
          ) : (
            <p className="text-center">No notifications available.</p>
          )}
        </Row>
      </Container>
    </div>
  );
};

export default NotificationCard;
