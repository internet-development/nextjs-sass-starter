import * as React from 'react';

import Modals from '@system/modals/Modals';
import ModalError from '@system/modals/ModalError';
import ModalNavigation from '@system/modals/ModalNavigation';

export default function GlobalModalManager(props) {
  if (!props.currentModal) {
    return null;
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
