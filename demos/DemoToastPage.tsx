'use client';

import * as React from 'react';

import { ToastProvider, ToastContainer } from '@system/toasts';
import { DemoToast } from '@demos/DemoToast';

export default function DemoToastPage() {
  return (
    <ToastProvider>
      <div style={{ padding: '24px' }}>
        <h1>Toast Notifications Demo</h1>
        <p style={{ marginBottom: '24px' }}>
          Click the buttons below to trigger different types of toast notifications.
          Toasts will automatically dismiss after 5 seconds, or you can click the × to dismiss them manually.
        </p>
        <DemoToast />
      </div>
      <ToastContainer />
    </ToastProvider>
  );
}

