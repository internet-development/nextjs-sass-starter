import styles from './GlobalModalManagerV2.module.scss';

import * as React from 'react';

export interface ModalProviderProps {
  children?: React.ReactNode;
}

export interface ModalComponentV2<P = {}> extends React.FC<P & CommonModalProps> {
  unmountDelayMS?: number;
}

export interface ModalState {
  key: string;
  component: ModalComponentV2;
  props: object;
}

export interface CommonModalProps {
  isClosing: boolean;
  close: () => void;
}

export interface ModalContextTypeV2 {
  activeModal: ModalState | null;
  closingModals: { [key: string]: ModalState };
  showModal: <P>(key: string, component: ModalComponentV2<P> | null, props?: P) => void;
  hideCurrentModal: () => void;
  hideModal: (key: string) => void;
}

const defaultModalContext: ModalContextTypeV2 = {
  activeModal: null,
  closingModals: {},
  showModal: () => {},
  hideCurrentModal: () => {},
  hideModal: () => {},
};
export const ModalContextV2 = React.createContext(defaultModalContext);

function newModalState(): ModalState | null {
  return null;
}

/** Provides a context that allows any of its descendants to control modals via
 * `useModalV2()`. Must be paired with `<ModalsV2 />` in order for modals to
 * show up. */
export function ModalProviderV2({ children }: ModalProviderProps) {
  const [activeModal, setActiveModal] = React.useState(newModalState);
  const [closingModals, setClosingModals] = React.useState<{ [key: string]: ModalState }>({});

  const showModal = (key, component, props) => {
    // If a modal was previously active, remove it now, or set a timeout for it
    // if there is an unmount delay.
    hideCurrentModal();

    if (component) {
      setActiveModal({
        key,
        component,
        props: props || {},
      });
    } else {
      setActiveModal(null);
    }
  };

  const hideCurrentModal = () => {
    if (activeModal) {
      setActiveModal(null);
      setClosingModals((prev) => ({ ...prev, [activeModal.key]: activeModal }));

      const timeout = activeModal.component.unmountDelayMS || 0;
      const callback = () => {
        setClosingModals((prev) => {
          const { [activeModal.key]: _, ...filtered } = prev;
          return filtered;
        });
      };

      if (timeout) {
        setTimeout(callback, timeout);
      } else {
        callback();
      }
    }
  };

  const hideModal = (key) => {
    if (activeModal && activeModal.key === key) {
      hideCurrentModal();
    }
  };

  return <ModalContextV2.Provider value={{ activeModal, closingModals, showModal, hideCurrentModal, hideModal }}>{children}</ModalContextV2.Provider>;
}

/** Displays the active modal. Without this component, the modal context does
 * nothing. */
export function ModalsV2() {
  const { activeModal, closingModals, hideModal } = React.useContext(ModalContextV2);

  const renderModal = (state: ModalState, isClosing: boolean) => {
    const Component = state?.component;
    const props = state?.props || {};

    return <Component key={state.key} isClosing={isClosing} close={() => activeModal && hideModal(activeModal.key)} {...props} />;
  };

  return (
    <div className={styles.modalBackground}>
      {activeModal && renderModal(activeModal, false)}
      {Object.values(closingModals).map((closingModal) => renderModal(closingModal, true))}
    </div>
  );
}

export interface ModalHandleV2<T> {
  isActive: boolean;
  open: (props?: T) => void;
  close: () => void;
}

export function useModalV2<P>(component: ModalComponentV2<P>): ModalHandleV2<P> {
  const { showModal, hideModal, hideCurrentModal, activeModal } = React.useContext(ModalContextV2);

  const key = React.useMemo(() => uniqueModalKey(), []);

  return {
    isActive: component === activeModal?.component,
    open: (props) => showModal(key, component, props),
    close: () => hideModal(key),
  };
}

function uniqueModalKey(): string {
  return `modal-${Math.floor(Math.random() * 999999999)}`;
}
