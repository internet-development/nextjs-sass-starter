import { useState, useEffect } from 'react';

interface Props {
  children: string | number;
  delay?: number;
}

const TextSwapper: React.FC<Props> = ({ children, delay = 500 }) => {
  const [displayText, setDisplayText] = useState<string | number>(String(children));
  const [originalText, setOriginalText] = useState<string | number>(String(children));

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDisplayText(String(children));
    }, delay);

    return () => clearInterval(intervalId);
  }, [children, delay]);

  return <span>{displayText}</span>;
};

export default TextSwapper;
