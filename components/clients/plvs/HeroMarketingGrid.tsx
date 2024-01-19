import styles from '@components/clients/plvs/HeroMarketingGrid.module.scss';

import * as React from 'react';

import { H2, H2Sub, P } from '@components/clients/plvs/typography';

export default function HeroMarketingGrid(props) {
  return (
    <div className={styles.grid}>
      <div className={styles.container}>
        <H2>Our Core Belief</H2>
      </div>
      <div className={styles.row}>
        <div className={styles.column}>
          <H2Sub>
            We believe exponential change is transforming civilization. Radical computing breakthroughs are needed to unlock humanities potential and realize a blueprint for
            prosperity.
          </H2Sub>

          <H2Sub>In this pursuit, we partner with exceptional founders translating cutting edge R&D into groundbreaking startups.</H2Sub>
          <br />
          <br />
        </div>
        <div className={styles.columnx}>
          <div className={styles.subcolumn}>
            <P>
              <strong>Initiate</strong>
            </P>
            <P>We explore and drive frontier R&D to identify and launch breakthrough startups that drive humanity forward.</P>
          </div>

          <div className={styles.subcolumn}>
            <P>
              <strong>Grow</strong>
            </P>
            <P>We bring decades of strategic and operational experience into a hands-on partnership characterized by mutual trust and growth.</P>
          </div>

          <div className={styles.subcolumn}>
            <P>
              <strong>Scale</strong>
            </P>
            <P>We co-engineer internet-scale network effects to allow for outsized value generation.</P>
          </div>
        </div>
      </div>
    </div>
  );
}
