// src/utils/backgroundImages.js
const backgroundImages = [
    'https://source.unsplash.com/random/1920x1080'
];

export const getRandomBackgroundImage = () => {
    return backgroundImages[Math.floor(Math.random() * backgroundImages.length)];
};
