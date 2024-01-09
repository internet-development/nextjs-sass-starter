import * as React from 'react';

import Modals from '@system/modals/Modals';
import ModalNavigation from '@system/modals/ModalNavigation';

export default function GlobalModalManager(props) {
  if (!props.currentModal) {
    return null;
  }

  return (
    <Modals>
      {props.currentalModal === 'MODAL_NAVIGATION' && (
        <ModalNavigation
          onHandleThemeChange={() => props.onHandleThemeChange()}
          onOutsideEvent={() => {
            props.setModal(null);
          }}
        />
      )}
    </Modals>
  );
}
