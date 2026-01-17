'use client';

import * as React from 'react';

import { useToast, ToastType } from '@system/toasts';
import { Button } from '@system/Button';

export function DemoToast() {
  const { toast } = useToast();

  const showToast = (type: ToastType) => {
    const messages: Record<ToastType, string> = {
      success: 'Operation completed successfully!',
      error: 'Something went wrong. Please try again.',
      info: 'Here is some useful information.',
      warning: 'Please proceed with caution.',
    };
    toast(messages[type], type);
  };

  return (
    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
      <Button onClick={() => showToast('success')}>Show Success</Button>
      <Button onClick={() => showToast('error')}>Show Error</Button>
      <Button onClick={() => showToast('info')}>Show Info</Button>
      <Button onClick={() => showToast('warning')}>Show Warning</Button>
    </div>
  );
}

