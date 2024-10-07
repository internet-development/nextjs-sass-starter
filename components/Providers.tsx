'use client';

import * as React from 'react';

import { ModalContext } from '@system/providers/ModalContextProvider';
import { ModalProviderV2 } from '@root/system/modals/GlobalModalManagerV2';

interface ModalContent {
  data?: any;
  name?: string;
  message?: string;
  parentId?: string;
}

interface ModalContextType {
  modalContent: ModalContent | null;
  showModal: (nextContent: ModalContent | null, delay?: number) => void;
}

export default function Providers({ children }) {
  const [modalContent, setContent] = React.useState<ModalContent | null>(null);

  const showModal = (nextContent) => {
    if (nextContent && modalContent && nextContent.name === modalContent.name) {
      setContent(null);
      return;
    }

    setContent(nextContent);
  };

  const modalContextValue: ModalContextType = {
    modalContent,
    showModal,
  };

  return <ModalContext.Provider value={modalContextValue}>
    <ModalProviderV2>
      {children}
    </ModalProviderV2>
  </ModalContext.Provider>;
}
