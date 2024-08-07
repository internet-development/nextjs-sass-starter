import * as React from 'react';

import ModalAuthentication from '@demos/modals/ModalAuthentication';
import ModalColorPicker from '@demos/modals/ModalColorPicker';
import ModalError from '@demos/modals/ModalError';
import ModalIndex from '@demos/modals/ModalIndex';
import ModalNavigation from '@demos/modals/ModalNavigation';
import ModalNavigationV2 from '@demos/modals/ModalNavigationV2';
import ModalNavigationTemplate from '@demos/modals/ModalNavigationTemplate';
import ModalWebsitePrompt from '@demos/modals/ModalWebsitePrompt';

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

  if (modalContent && modalContent.name === 'NAVIGATION_V2') {
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

  if (modalContent && modalContent.name === 'AUTHENTICATION') {
    nextModal = <ModalAuthentication content={modalContent} onShowModal={showModal} viewer={props.viewer} />;
  }

  if (modalContent && modalContent.name === 'COLOR_PICKER') {
    nextModal = <ModalColorPicker content={modalContent} onShowModal={showModal} viewer={props.viewer} />;
  }

  if (modalContent && modalContent.name === 'WEBSITE_PROMPT') {
    nextModal = <ModalWebsitePrompt content={modalContent} onShowModal={showModal} viewer={props.viewer} />;
  }

  return nextModal;
}
