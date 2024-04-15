import styles from '@system/layouts/demos/DemoIndex.module.scss';

import * as React from 'react';

export default function DemoIndex(props) {
  return (
    <div className={styles.root}>
      {props.data.map((each) => {
        const nested = each.data.map((each) => {
          return (
            <div className={styles.subject}>
              <span className={styles.left}>{each.name}</span>
              <span className={styles.right}>{each.page}</span>
            </div>
          );
        });

        return (
          <div className={styles.themeParent}>
            <div className={styles.theme}>
              <span className={styles.left} style={{ letterSpacing: 2 }}>
                {each.name}
              </span>
              <span className={styles.right}>{each.page}</span>
            </div>
            {nested.length ? <div className={styles.subjectParent}>{nested}</div> : null}
          </div>
        );
      })}
    </div>
  );
}
