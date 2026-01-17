import * as React from 'react';

import Head from 'next/head';
import Page from '@components/Page';

import { H1, Lead } from '@system/typography';

export default function Custom404() {
  return (
    <Page
      title="404 — Page Not Found"
      description="The page you are looking for does not exist."
      url="https://wireframes.internet.dev/404"
    >
      <Head>
        <meta name="robots" content="noindex" />
      </Head>
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
        <a
          href="/"
          style={{
            marginTop: 32,
            color: 'var(--theme-primary)',
            textDecoration: 'underline',
          }}
        >
          Return to homepage
        </a>
      </div>
    </Page>
  );
}

