import styles from '@components/DefaultLayout.module.scss';

import * as React from 'react';
import Image from 'next/image';

export default function App(props) {
  return (
    <div className={styles.body}>
      <Image className={styles.pixel} src={props.previewPixelSRC} alt={''} />
      {props.children}
    </div>
  );
}
