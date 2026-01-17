'use client';

import styles from '@system/toasts/Toast.module.scss';

import * as React from 'react';

import { useToastContext, Toast as ToastType } from '@system/toasts/ToastContext';

const TOAST_DURATION = 5000;

function ToastItem({ toast }: { toast: ToastType }) {
  const { removeToast } = useToastContext();
  const [isExiting, setIsExiting] = React.useState(false);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsExiting(true);
    }, TOAST_DURATION - 300);

    const removeTimer = setTimeout(() => {
      removeToast(toast.id);
    }, TOAST_DURATION);

    return () => {
      clearTimeout(timer);
      clearTimeout(removeTimer);
    };
  }, [toast.id, removeToast]);

  const handleDismiss = () => {
    setIsExiting(true);
    setTimeout(() => removeToast(toast.id), 300);
  };

  return (
    <div
      className={`${styles.toast} ${styles[toast.type]} ${isExiting ? styles.exiting : ''}`}
      role="alert"
      aria-live="polite"
    >
      <span className={styles.message}>{toast.message}</span>
      <button
        className={styles.dismissButton}
        onClick={handleDismiss}
        aria-label="Dismiss notification"
      >
        ×
      </button>
    </div>
  );
}

export function ToastContainer() {
  const { toasts } = useToastContext();

  if (toasts.length === 0) return null;

  return (
    <div className={styles.container} aria-label="Notifications">
      {toasts.map((toast) => (
        <ToastItem key={toast.id} toast={toast} />
      ))}
    </div>
  );
}

