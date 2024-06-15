import React, { useState, useEffect } from 'react';

const Typewriter = ({ text, speed = 50 }) => {
    const [displayedText, setDisplayedText] = useState('');

    useEffect(() => {
        let currentIndex = 0;

        const intervalId = setInterval(() => {
            setDisplayedText((prev) => prev + text[currentIndex]);
            currentIndex += 1;
            if (currentIndex === text.length) {
                clearInterval(intervalId);
            }
        }, speed);

        return () => clearInterval(intervalId);
    }, [text, speed]);

    return <span>{displayedText}</span>;
};

export default Typewriter;
