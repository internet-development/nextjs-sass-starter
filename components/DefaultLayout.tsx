import styles from '@components/DefaultLayout.module.scss';

import * as React from 'react';

export interface DefaultLayoutProps {
  children?: React.ReactNode;
  previewPixelSRC?: string;
}

export default function App(props: DefaultLayoutProps) {
  return (
    <div className={styles.body}>
      <img className={styles.pixel} src={props.previewPixelSRC} alt={''} />
      {/* Main landmark with tabIndex={-1} to allow programmatic focus from skip link */}
      <main id="main-content" tabIndex={-1}>
        {props.children}
      </main>
    </div>
  );
}

