'use client';

import * as React from 'react';

import { ModalProviderV2 } from '@root/system/modals/GlobalModalManagerV2';

export default function Providers({ children }) {
  return <ModalProviderV2>{children}</ModalProviderV2>;
}
