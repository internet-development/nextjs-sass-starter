import { useEffect, useState } from 'react';

interface TextSwapperProps {
  textArray: string[];
  delay?: number;
}

const TextSwapper: React.FC<TextSwapperProps> = ({ textArray, delay = 2000 }) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % textArray.length);
    }, delay);

    return () => clearTimeout(timer);
  }, [currentTextIndex, delay, textArray.length]);

  return <span>{textArray[currentTextIndex]}</span>;
};

export default TextSwapper;
