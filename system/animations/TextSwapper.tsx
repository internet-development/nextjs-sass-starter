import { useState, useEffect } from 'react';

interface TextSwapperProps {
  children: React.ReactNode;
  texts: string[];
  delay?: number;
}

const TextSwapper: React.FC<TextSwapperProps> = ({ children, texts, delay = 1000 }) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, delay);

    return () => clearInterval(intervalId);
  }, [texts.length, delay]);

  return <span>{texts[currentTextIndex]}</span>;
};

export default TextSwapper;
