import styles from '@components/DefaultLayout.module.scss';

import * as React from 'react';

export interface DefaultLayoutProps {
  children?: React.ReactNode;
  previewPixelSRC?: string;
}

export default function DefaultLayout(props: DefaultLayoutProps) {
  return (
    <div className={styles.body}>
      {props.previewPixelSRC && (
        <img className={styles.pixel} src={props.previewPixelSRC} alt="" />
      )}
      {/* Main landmark with tabIndex={-1} to allow programmatic focus from SkipLink component */}
      <main id="main-content" className={styles.mainContent} tabIndex={-1}>
        {props.children}
      </main>
    </div>
  );
}

