import styles from '@components/DefaultLayout.module.scss';

import * as React from 'react';

export default function App(props) {
  return (
    <div className={styles.body}>
      <a href="#main-content" className={styles.skipLink}>
        Skip to main content
      </a>
      <img className={styles.pixel} src={props.previewPixelSRC} alt={''} />
      <div id="main-content" tabIndex={-1}>
        {props.children}
      </div>
    </div>
  );
}
