import React, { useState, useEffect } from 'react';
import { Card, Button } from 'react-bootstrap';
import axios from 'axios';

function Profile({ token }) {
  const [player, setPlayer] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get('/api/me', {
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
    <Card>
      <Card.Body>
        {player ? (
          <>
            <Card.Title>Bienvenido, {player.name}</Card.Title>
            <Card.Text>Email: {player.email}</Card.Text>
          </>
        ) : (
          <Card.Text>{error || 'Cargando perfil...'}</Card.Text>
        )}
        <Button variant="primary" onClick={() => window.location.reload()}>
          Refrescar
        </Button>
      </Card.Body>
    </Card>
  );
}

export default Profile;