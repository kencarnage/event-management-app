// src/pages/RegisterPage.js
import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { register } from '../services/authService';

const RegisterPage = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await register({ username, email, password });
            navigate('/dashboard');
        } catch (err) {
            setError(err.response?.data?.message || 'Registration failed');
        }
    };

    return (
        <Container maxWidth="sm">
            <Paper style={{ padding: '2em', marginTop: '3em' }} elevation={3}>
                <Typography variant="h4" align="center" gutterBottom>
                    Register
                </Typography>
                {error && (
                    <Typography variant="body2" color="error" align="center">
                        {error}
                    </Typography>
                )}
                <form noValidate onSubmit={handleSubmit}>
                    <TextField
                        label="Username"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        required
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <TextField
                        label="Email"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <TextField
                        label="Password"
                        variant="outlined"
                        type="password"
                        fullWidth
                        margin="normal"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button
                        variant="contained"
                        color="primary"
                        type="submit"
                        fullWidth
                        style={{ marginTop: '1em' }}
                    >
                        Register
                    </Button>
                </form>
            </Paper>
        </Container>
    );
};

export default RegisterPage;
