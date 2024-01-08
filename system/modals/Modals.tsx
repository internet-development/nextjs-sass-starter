import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

const Modal: React.FC = ({ children }) => {
  const modalRoot = document.getElementById('__next') as HTMLElement;
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
