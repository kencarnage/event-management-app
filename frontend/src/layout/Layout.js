// src/layout/Layout.js
import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import { getRandomBackgroundImage } from '../utils/backgroundImages';

const Layout = ({ children }) => {
    const [backgroundImage, setBackgroundImage] = useState('');

    useEffect(() => {
        setBackgroundImage(getRandomBackgroundImage());
    }, []);

    return (
        <Box display="flex">
            <Header />
            <Sidebar />
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    p: 3,
                    mt: 8,
                    backgroundImage: `url(${backgroundImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    minHeight: '100vh',
                }}
            >
                {children}
            </Box>
        </Box>
    );
};

export default Layout;
