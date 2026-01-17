import * as React from 'react';

import Head from 'next/head';
import NotFoundContent from '@components/NotFoundContent';

export default function Custom404() {
  return (
    <>
      <Head>
        <title>404 - Page Not Found</title>
      </Head>
      <NotFoundContent />
    </>
  );
}
