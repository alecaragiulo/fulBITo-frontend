import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { VStack, FormControl, FormLabel, Input, Button, Text } from '@chakra-ui/react';
import axios from 'axios';

function Login({ setToken }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/api/login', {
        email,
        password,
      });
      setToken(response.data.token);
      navigate('/profile');
    } catch (err) {
      setError('Error al iniciar sesión. Verifica tus credenciales.');
    }
  };

  return (
    <VStack spacing={4} as="form" onSubmit={handleLogin}>
      <FormControl isRequired>
        <FormLabel>Email</FormLabel>
        <Input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Ingresa tu email"
        />
      </FormControl>
      <FormControl isRequired>
        <FormLabel>Contraseña</FormLabel>
        <Input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Ingresa tu contraseña"
        />
      </FormControl>
      {error && <Text color="red.500">{error}</Text>}
      <Button type="submit" colorScheme="teal" width="full">
        Iniciar Sesión
      </Button>
    </VStack>
  );
}

export default Login;