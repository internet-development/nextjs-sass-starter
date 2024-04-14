'use client';

import * as React from 'react';

export const ModalContext = React.createContext(null);

export function useModal() {
  const { modalContent, showModal } = React.useContext(ModalContext);
  return { modalContent, showModal };
}
