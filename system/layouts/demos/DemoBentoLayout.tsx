import styles from '@system/layouts/demos/DemoBentoLayout.module.scss';

import * as React from 'react';

import Content from '@system/layouts/Content';

import { H2, Lead } from '@system/typography';

export default function DemoBentoLayout(props) {
  return (
    <div className={styles.root}>
      <Content>
        <H2>DemoBentoLayout</H2>
        <Lead style={{ marginTop: `1rem` }}>2 or 4 row sections that can be resized and viewed in any viewport.</Lead>
      </Content>

      <div className={styles.bento}>
        <div className={styles.row}>
          <div className={styles.columnWide}>
            <div className={styles.full}>I</div>
          </div>
          <div className={styles.columnWide}>
            <div className={styles.full}>II</div>
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.column}>
            <div className={styles.full}>III</div>
          </div>
          <div className={styles.column}>
            <div className={styles.full}>IV</div>
          </div>
          <div className={styles.column}>
            <div className={styles.full}>V</div>
          </div>
          <div className={styles.column}>
            <div className={styles.full}>VI</div>
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.columnWide}>
            <div className={styles.full}>VII</div>
          </div>
          <div className={styles.columnWide}>
            <div className={styles.full}>VIII</div>
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.column}>
            <div className={styles.full}>VIIII</div>
          </div>
          <div className={styles.column}>
            <div className={styles.full}>IX</div>
          </div>
          <div className={styles.column}>
            <div className={styles.full}>X</div>
          </div>
          <div className={styles.column}>
            <div className={styles.full}>XI</div>
          </div>
        </div>
      </div>
    </div>
  );
}
