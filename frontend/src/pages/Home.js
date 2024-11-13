// src/pages/Home.js
import React, { useEffect, useState } from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { getRandomBackgroundImage } from '../utils/backgroundImages';

const Home = () => {
    const [backgroundImage, setBackgroundImage] = useState('');

    useEffect(() => {
        setBackgroundImage(getRandomBackgroundImage());
    }, []);

    return (
        <Container
            maxWidth="md"
            style={{
                textAlign: 'center',
                marginTop: '4em',
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                padding: '2em',
                borderRadius: '12px',
                color: 'white',
                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
            }}
        >
            <Typography variant="h3" gutterBottom>
                Welcome to Event Manager
            </Typography>
            <Typography variant="body1" color="inherit" gutterBottom>
                Manage and track your events in real-time, all in one place.
            </Typography>
            <Box mt={3}>
                <Button
                    variant="contained"
                    color="primary"
                    component={Link}
                    to="/login"
                    style={{ margin: '0 1em' }}
                >
                    Login
                </Button>
                <Button
                    variant="outlined"
                    color="primary"
                    component={Link}
                    to="/register"
                    style={{ margin: '0 1em' }}
                >
                    Register
                </Button>
            </Box>
        </Container>
    );
};

export default Home;
