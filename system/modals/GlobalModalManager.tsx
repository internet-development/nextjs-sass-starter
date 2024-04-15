import * as React from 'react';

import ModalError from '@system/modals/ModalError';
import ModalIndex from '@system/modals/ModalIndex';
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
    nextModal = <ModalNavigation parentRect={parentRect} onShowModal={showModal} viewer={props.viewer} />;
  }

  if (modalContent && modalContent.name == 'NAVIGATION_TEMPLATE') {
    nextModal = <ModalNavigationTemplate parentRect={parentRect} onShowModal={showModal} viewer={props.viewer} />;
  }

  if (modalContent && modalContent.name === 'ERROR') {
    nextModal = <ModalError content={modalContent} onShowModal={showModal} viewer={props.viewer} />;
  }

  if (modalContent && modalContent.name === 'INDEX') {
    nextModal = <ModalIndex content={modalContent} onShowModal={showModal} />;
  }

  return nextModal;
}
