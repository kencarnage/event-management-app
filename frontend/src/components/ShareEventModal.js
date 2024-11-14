// src/components/ShareEventModal.js
import React from 'react';
import { Dialog, DialogTitle, DialogContent, Button } from '@mui/material';
import ShareIcon from '@mui/icons-material/Share';

const ShareEventModal = ({ open, onClose, event }) => (
    <Dialog open={open} onClose={onClose}>
        <DialogTitle>Share Event</DialogTitle>
        <DialogContent>
            <Button
                variant="contained"
                color="primary"
                startIcon={<ShareIcon />}
                onClick={() => window.open(`https://www.facebook.com/sharer.php?u=${encodeURIComponent(event.link)}`, '_blank')}
            >
                Share on Facebook
            </Button>
            <Button
                variant="contained"
                color="secondary"
                startIcon={<ShareIcon />}
                onClick={() => window.open(`https://twitter.com/share?url=${encodeURIComponent(event.link)}&text=${encodeURIComponent(event.name)}`, '_blank')}
                sx={{ mt: 2 }}
            >
                Share on Twitter
            </Button>
        </DialogContent>
    </Dialog>
);

export default ShareEventModal;
