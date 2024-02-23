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
    nextModal = <ModalNavigation key="NAVIGATION" parentRect={parentRect} onHandleThemeChange={props.onHandleThemeChange} onOutsideEvent={() => props.onSetModal(null)} />;
  }

  if (props.currentModal && props.currentModal.name == 'NAVIGATION_TEMPLATE') {
    nextModal = (
      <ModalNavigationTemplate
        key="NAVIGATION_TEMPLATE"
        parentRect={parentRect}
        onHandleThemeChange={props.onHandleThemeChange}
        onOutsideEvent={() => props.onSetModal(null)}
        onSignOut={props.onSignOut}
        viewer={props.viewer}
      />
    );
  }

  if (props.currentModal && props.currentModal.name === 'ERROR') {
    nextModal = <ModalError key="ERROR" onOutsideEvent={() => props.onSetModal(null)} message={props.currentModal.message} />;
  }

  return <Modals>{nextModal}</Modals>;
}
