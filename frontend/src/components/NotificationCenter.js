// src/components/NotificationCenter.js
import React, { useState } from 'react';
import { Badge, IconButton, Popover, List, ListItem, ListItemText } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';

const NotificationCenter = ({ notifications = [] }) => {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => setAnchorEl(event.currentTarget);
    const handleClose = () => setAnchorEl(null);

    const open = Boolean(anchorEl);
    const id = open ? 'notification-popover' : undefined;

    return (
        <>
            <IconButton aria-describedby={id} color="inherit" onClick={handleClick}>
                <Badge badgeContent={notifications.length} color="error">
                    <NotificationsIcon fontSize="large" />
                </Badge>
            </IconButton>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                sx={{ mt: 1 }}
            >
                <List sx={{ width: 300, maxHeight: 300, overflowY: 'auto' }}>
                    {notifications.map((notification, index) => (
                        <ListItem key={index} divider>
                            <ListItemText primary={notification.message} sx={{ color: '#333' }} />
                        </ListItem>
                    ))}
                </List>
            </Popover>
        </>
    );
};

export default NotificationCenter;
