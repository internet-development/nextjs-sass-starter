import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

interface ModalProps {
  children: React.ReactNode; // Define the type for children
}

const Modal: React.FC<ModalProps> = ({ children }) => {
  const modalRoot = document.body as HTMLElement;
  const modalElement = document.createElement('figure');

  useEffect(() => {
    modalRoot.appendChild(modalElement);
    return () => {
      modalRoot.removeChild(modalElement);
    };
  }, [modalElement, modalRoot]);

  return ReactDOM.createPortal(children, modalElement);
};

export default Modal;
