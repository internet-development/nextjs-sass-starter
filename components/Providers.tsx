'use client';

import * as React from 'react';

import { ModalProvider } from '@root/system/modals/ModalContext';

export default function Providers({ children }) {
  return <ModalProvider>{children}</ModalProvider>;
}
