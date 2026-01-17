import * as React from 'react';

import Link from 'next/link';

import { H1, Lead } from '@system/typography';

const notFoundStyles = {
  container: {
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center' as const,
    justifyContent: 'center' as const,
    minHeight: '60vh',
    padding: '48px 24px',
    textAlign: 'center' as const,
  },
  heading: {
    color: 'var(--theme-text)',
  },
  lead: {
    marginTop: 'var(--type-scale-5)',
    maxWidth: 480,
    color: 'var(--theme-text)',
  },
  link: {
    marginTop: 32,
    color: 'var(--theme-primary)',
    textDecoration: 'underline',
  },
};

export default function NotFoundContent() {
  return (
    <div style={notFoundStyles.container}>
      <H1 style={notFoundStyles.heading}>404</H1>
      <Lead style={notFoundStyles.lead}>
        The page you are looking for does not exist or has been moved.
      </Lead>
      <Link href="/" style={notFoundStyles.link}>
        Return to homepage
      </Link>
    </div>
  );
}

