import * as React from 'react';

import Modals from '@system/modals/Modals';
import ModalError from '@system/modals/ModalError';
import ModalNavigation from '@system/modals/ModalNavigation';
import ModalNavigationTemplate from '@system/modals/ModalNavigationTemplate';

export default function GlobalModalManager(props) {
  if (!props.currentModal) {
    return null;
  }

  // NOTE(jimmylee)
  // This is only safe because this component only renders a modal after first render.
  let parentRect;
  if (props.currentModal.parentId) {
    const parentElement = document.getElementById(props.currentModal.parentId);
    if (parentElement) {
      parentRect = parentElement.getBoundingClientRect();
    }
  }

  let nextModal;
  if (props.currentModal && props.currentModal.name === 'NAVIGATION') {
    nextModal = (
      <ModalNavigation
        key="NAVIGATION"
        onHandleThemeChange={() => props.onHandleThemeChange()}
        onOutsideEvent={() => {
          props.setModal(null);
        }}
        parentRect={parentRect}
      />
    );
  }

  if (props.currentModal && props.currentModal.name == 'NAVIGATION_TEMPLATE') {
    nextModal = (
      <ModalNavigationTemplate
        key="NAVIGATION_TEMPLATE"
        onHandleThemeChange={() => props.onHandleThemeChange()}
        onOutsideEvent={() => {
          props.setModal(null);
        }}
        parentRect={parentRect}
      />
    );
  }

  if (props.currentModal && props.currentModal.name === 'ERROR') {
    nextModal = (
      <ModalError
        key="ERROR"
        message={props.currentModal.message}
        onOutsideEvent={() => {
          props.setModal(null);
        }}
      />
    );
  }

  return <Modals>{nextModal}</Modals>;
}
