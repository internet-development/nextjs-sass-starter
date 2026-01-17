import styles from '@components/DefaultLayout.module.scss';

import * as React from 'react';

export default function App(props) {
  return (
    <div className={styles.body}>
      <img className={styles.pixel} src={props.previewPixelSRC} alt={''} />
      <main id="main-content" tabIndex={-1}>
        {props.children}
      </main>
    </div>
  );
}

