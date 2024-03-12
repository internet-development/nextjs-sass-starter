'use client';

import React, { createContext, useState, useContext, ReactNode } from 'react';

interface AddressContextProps {
  address: string;
  setAddress: (address: string) => void;
}

const AddressContext = createContext<AddressContextProps>({
  address: '',
  setAddress: () => {},
});

export const useAddress = () => useContext(AddressContext);

interface AddressProviderProps {
  children: ReactNode;
}

export const AddressProvider: React.FC<AddressProviderProps> = ({ children }) => {
  const [address, setAddress] = useState('');

  return <AddressContext.Provider value={{ address, setAddress }}>{children}</AddressContext.Provider>;
};
