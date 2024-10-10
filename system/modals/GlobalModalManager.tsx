import styles from './GlobalModalManager.module.scss';

import * as React from 'react';

import { ModalContext, ModalState } from './ModalContext';

/**
 * NOTE(@elijaharita): Displays the active modal for a modal context. Without
 * this component, the modal context does nothing. Must be within a modal
 * context.
 * */
export default function GlobalModalManager() {
  const context = React.useContext(ModalContext);
  if (!context) return null;

  const { modalRefs, active: activeModal, closing: closingModals, close: hideModal } = context;

  const renderModal = (state: ModalState, isClosing: boolean) => {
    const Component = state?.component;
    const props = state?.props || {};

    return (
      <Component
        ref={(ref) => {
          if (ref) {
            modalRefs.current[state.key] = ref;
          } else {
            delete modalRefs.current[state.key];
          }
        }}
        key={state.key}
        isClosing={isClosing}
        onClose={() => hideModal(state.key)}
        {...props}
      />
    );
  };

  return (
    <div className={styles.modalBackground}>
      {activeModal && renderModal(activeModal, false)}
      {Object.values(closingModals).map((closingModal) => renderModal(closingModal, true))}
    </div>
  );
}
