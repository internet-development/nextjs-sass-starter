import * as React from 'react';

import Head from 'next/head';
import Page from '@components/Page';
import NotFoundContent from '@components/NotFoundContent';

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
      <NotFoundContent />
    </Page>
  );
}

