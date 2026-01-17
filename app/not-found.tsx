import '@root/global.scss';

import * as React from 'react';

import Link from 'next/link';

import { H1, Lead } from '@system/typography';

export default function NotFound() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '60vh',
        padding: '48px 24px',
        textAlign: 'center',
      }}
    >
      <H1 style={{ color: 'var(--theme-text)' }}>404</H1>
      <Lead style={{ marginTop: 'var(--type-scale-5)', maxWidth: 480, color: 'var(--theme-text)' }}>
        The page you are looking for does not exist or has been moved.
      </Lead>
      <Link
        href="/"
        style={{
          marginTop: 32,
          color: 'var(--theme-primary)',
          textDecoration: 'underline',
        }}
      >
        Return to homepage
      </Link>
    </div>
  );
}

