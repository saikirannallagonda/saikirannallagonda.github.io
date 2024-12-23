import React, { useEffect, useRef, useState } from "react";

const LoadingMessage = ({ message, interval }) => {
    const words = message.split('');
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [displayedWords, setDisplayedWords] = useState([]);

    useEffect(() => {
        if (currentWordIndex < words.length) {
            const timer = setTimeout(() => {
                setDisplayedWords((prev) => [...prev, words[currentWordIndex]]);
                setCurrentWordIndex((prev) => prev + 1);
            }, interval);
            
            return () => clearTimeout(timer);
        }
    }, [currentWordIndex, interval, words]);
    
    return (
        <div className="message">
            {displayedWords.join('')}
        </div>
    );
};

const Home = () => (
    <LoadingMessage message="Not Quite Ready Yet, But Almost There! :)" interval={40} />
)

export default Home;