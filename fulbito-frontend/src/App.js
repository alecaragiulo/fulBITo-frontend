import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Box,Heading,Container } from '@chakra-ui/react';
import Login from './components/Login';
import Profile from './components/Profile';

function App() {
  return (
    <Router>
      <Box minH="100vh" bg="gray.100">
        <Container maxW="container.md" py={8}>
          <Heading mb={6}>FulBITo</Heading>
          <Routes>
            <Route path="/" element={<Login setToken={setToken} />} />
            <Route path="/profile" element={<Profile token={token} />} />
          </Routes>
        </Container>
      </Box>
    </Router>
  );
}

export default App;
