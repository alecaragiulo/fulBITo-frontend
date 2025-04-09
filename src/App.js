import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import Login from './components/Login';
import Profile from './components/Profile';

function App() {
  const [token, setToken] = useState('');

  return (
    <Router>
      <Container className="py-4">
        <Row>
          <Col>
            <h1 className="mb-4">FulBITo</h1>
            <Routes>
              <Route path="/" element={<Login setToken={setToken} />} />
              <Route path="/profile" element={<Profile token={token} />} />
            </Routes>
          </Col>
        </Row>
      </Container>
    </Router>
  );
}

export default App;