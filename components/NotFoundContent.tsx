import styles from '@components/NotFoundContent.module.scss';

import * as React from 'react';

import Link from 'next/link';

import { H1, P } from '@system/typography';

export default function NotFoundContent() {
  return (
    <div className={styles.root}>
      <H1>404</H1>
      <P className={styles.message}>Page not found. The page you are looking for does not exist.</P>
      <P className={styles.linkWrapper}>
        <Link href="/">Return to homepage</Link>
      </P>
    </div>
  );
}

