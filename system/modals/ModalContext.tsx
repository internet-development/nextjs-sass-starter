import * as React from 'react';

export interface ModalProviderProps {
  children?: React.ReactNode;
}

/** NOTE(@elijaharita): a modal component can either be a regular functional
 * component, or one with a forwarded ref that can be supplied to
 * `React.useImperativeHandle()` to customize properties of the modal that will
 * be used by the modal manager (see `ModalRef`).
 */
export type ModalComponent<P = {}> = React.ComponentType<React.PropsWithoutRef<P & CommonModalProps> & React.RefAttributes<ModalRef>>;

export interface ModalState {
  key: string;
  component: ModalComponent<any>;
  props: object;
}

export interface ModalRef {
  getUnmountDelayMS?: () => number;
}

export interface CommonModalProps {
  isClosing: boolean;
  close: () => void;
}

export interface ModalContextType {
  modalRefs: React.MutableRefObject<{ [key: string]: ModalRef | undefined }>;
  activeModal: ModalState | null;
  closingModals: { [key: string]: ModalState };
  showModal: <P>(key: string, component: ModalComponent<P> | null, props?: P) => void;
  hideCurrentModal: () => void;
  hideModal: (key: string) => void;
}

export const ModalContext = React.createContext<ModalContextType | null>(null);

function newModalState(): ModalState | null {
  return null;
}

/**
 * NOTE(@elijaharita):
 *
 * Provides a context that allows any of its descendants to control modals via
 * `useModal()`. Must be paired with `<GlobalModalManager />` in order for modals to
 * show up.
 *
 * A modal is a popup component that must be dismissed / completed before the
 * user is able to interact with the rest of the application again. Examples of
 * modals include toggleable sidebars, error popups, or dropdown menus.
 *
 * Modals are mutually exclusive. Opening a new modal will cause the previous
 * one to be closed.
 * */
export function ModalProvider({ children }: ModalProviderProps) {
  const [activeModal, setActiveModal] = React.useState(newModalState);
  const [closingModals, setClosingModals] = React.useState<{ [key: string]: ModalState }>({});

  const modalRefs = React.useRef<{ [key: string]: ModalRef | undefined }>({});

  const showModal = (key, component, props) => {
    hideCurrentModal();

    if (component) {
      setActiveModal({
        key,
        component,
        props: props || {},
      });
    }
  };

  const hideCurrentModal = () => {
    if (activeModal) {
      setActiveModal(null);
      setClosingModals((prev) => ({ ...prev, [activeModal.key]: activeModal }));

      const ms = modalRefs.current[activeModal.key]?.getUnmountDelayMS?.() ?? 0;
      const callback = () => {
        setClosingModals((prev) => {
          const { [activeModal.key]: _, ...filtered } = prev;
          return filtered;
        });
      };

      if (ms) {
        setTimeout(callback, ms);
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

  return <ModalContext.Provider value={{ activeModal, closingModals, modalRefs, showModal, hideCurrentModal, hideModal }}>{children}</ModalContext.Provider>;
}

export interface ModalHandle<T> {
  isActive: boolean;
  open: (props?: T) => void;
  close: () => void;
}

export function useModal<P>(component: ModalComponent<P>): ModalHandle<P> {
  const context = React.useContext(ModalContext);
  if (!context) throw new Error('No modal context');
  const { showModal, hideModal, hideCurrentModal, activeModal } = context;

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
