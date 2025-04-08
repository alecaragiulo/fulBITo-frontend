import React, { useState, useEffect } from 'react';
import { VStack, Heading, Text, Button } from '@chakra-ui/react';
import axios from 'axios';

function Profile({ token }) {
  const [player, setPlayer] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/me', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setPlayer(response.data);
      } catch (err) {
        setError('Error al cargar el perfil.');
      }
    };
    if (token) fetchProfile();
  }, [token]);

  return (
    <VStack spacing={4}>
      {player ? (
        <>
          <Heading size="md">Bienvenido, {player.name}</Heading>
          <Text>Email: {player.email}</Text>
          <Text>Goles: {player.goals}</Text>
        </>
      ) : (
        <Text>{error || 'Cargando perfil...'}</Text>
      )}
      <Button colorScheme="teal" onClick={() => window.location.reload()}>
        Refrescar
      </Button>
    </VStack>
  );
}

export default Profile;