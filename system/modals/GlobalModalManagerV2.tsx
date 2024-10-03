import styles from './GlobalModalManagerV2.module.scss';

import * as React from 'react';

export interface ModalProviderProps {
  children?: React.ReactNode;
}

export interface ModalState {
  component: React.FC;
  props: object;
}

export interface ModalContextTypeV2 {
  activeModal: ModalState | null;
  showModal: <T>(component: React.FC<T> | null, props?: T) => void;
}

const defaultModalContext: ModalContextTypeV2 = {
  activeModal: null,
  showModal: () => {},
};
export const ModalContextV2 = React.createContext(defaultModalContext);

function newModalState(): ModalState | null {
  return null;
}

export function ModalProvider({ children }: ModalProviderProps) {
  const [activeModal, setActiveModal] = React.useState(newModalState);

  const showModal = (component, props) => {
    setActiveModal({
      component,
      props: props || {},
    });
  };

  return <ModalContextV2.Provider value={{ activeModal, showModal }}>{children}</ModalContextV2.Provider>;
}

export function ModalsV2() {
  const { activeModal } = React.useContext(ModalContextV2);

  const Component = activeModal?.component;
  const props = activeModal?.props || {};

  return (
    Component && (
      <div className={styles.modalBackground}>
        <Component {...props} />
      </div>
    )
  );
}

export interface ModalHandleV2<T> {
  isActive: boolean;
  open: (props?: T) => void;
  close: () => void;
}

export function useModalV2<T>(component: React.FC<T>): ModalHandleV2<T> {
  const { showModal, activeModal } = React.useContext(ModalContextV2);

  return {
    isActive: component === activeModal?.component,
    open: (props) => showModal(component, props),
    close: () => showModal(null),
  };
}
