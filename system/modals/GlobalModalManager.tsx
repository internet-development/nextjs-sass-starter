import * as React from 'react';

import ModalError from '@system/modals/ModalError';
import ModalNavigation from '@system/modals/ModalNavigation';
import ModalNavigationTemplate from '@system/modals/ModalNavigationTemplate';

import { useModal } from '@system/providers/ModalContextProvider';

export default function GlobalModalManager(props) {
  const { modalContent, showModal } = useModal();

  let parentRect;
  if (modalContent && modalContent.parentId) {
    const parentElement = document.getElementById(modalContent.parentId);
    if (parentElement) {
      parentRect = parentElement.getBoundingClientRect();
    }
  }

  let nextModal;
  if (modalContent && modalContent.name === 'NAVIGATION') {
    nextModal = <ModalNavigation key="NAVIGATION" parentRect={parentRect} />;
  }

  if (modalContent && modalContent.name == 'NAVIGATION_TEMPLATE') {
    nextModal = <ModalNavigationTemplate key="NAVIGATION_TEMPLATE" parentRect={parentRect} />;
  }

  if (modalContent && modalContent.name === 'ERROR') {
    nextModal = <ModalError key="ERROR" />;
  }

  return nextModal;
}
