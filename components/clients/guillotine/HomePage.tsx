import styles from '@components/clients/guillotine/HomePage.module.scss';

import * as React from 'react';

import GuillotineText from '@components/clients/guillotine/svg/GuillotineText';
import GuillotineSymbol from '@components/clients/guillotine/svg/GuillotineSymbol';

function HomePage(props) {
  return (
    <div className={styles.root}>
      <div className={styles.top}>
        <GuillotineText width="100%" />
      </div>
      <div className={styles.bottom}>
        <GuillotineSymbol />
        <p className={styles.p}>&nbsp;</p>
        <p className={styles.p}>410 BROADWAY E</p>
        <p className={styles.p}>SEATTLE, WA —— 98102</p>
        <p className={styles.p}>OPEN 7 DAYS</p>
        <p className={styles.p}>&nbsp;</p>
        <p className={styles.p}>&nbsp;</p>
        <p className={styles.p}>Wellness & More</p>
      </div>
    </div>
  );
}

export default HomePage;
