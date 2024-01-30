'use client'

import React, { createContext, useState, useContext, ReactNode } from 'react';

interface SignatureContextProps {
  signature: string;
  setSignature: (signature: string) => void;
}

const SignatureContext = createContext<SignatureContextProps>({
  signature: '',
  setSignature: () => {},
});

export const useSignature = () => useContext(SignatureContext);

interface SignatureProviderProps {
  children: ReactNode;
}

export const SignatureProvider: React.FC<SignatureProviderProps> = ({ children }) => {
  const [signature, setSignature] = useState('');

  return (
    <SignatureContext.Provider value={{ signature, setSignature }}>
      {children}
    </SignatureContext.Provider>
  );
};
