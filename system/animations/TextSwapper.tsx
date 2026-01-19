import { useState, useEffect } from 'react';

interface TextSwapperProps {
  texts: string[];
  delay?: number;
}

const TextSwapper: React.FC<TextSwapperProps> = ({ texts, delay = 2000 }) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, delay);

    return () => clearTimeout(timer);
  }, [currentTextIndex, delay, texts.length]);

  return <span>{texts[currentTextIndex]}</span>;
};

export default TextSwapper;
