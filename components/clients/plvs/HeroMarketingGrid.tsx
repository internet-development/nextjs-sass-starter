import styles from '@components/clients/plvs/HeroMarketingGrid.module.scss';

import * as React from 'react';

import { H2, H2Sub, P } from '@components/clients/plvs/typography';

export default function HeroMarketingGrid(props) {
  return (
    <div className={styles.grid}>
      <div className={styles.container}>
        <H2>Our beliefs</H2>
      </div>
      <div className={styles.row}>
        <div className={styles.column}>
          <H2Sub>We believe exponential change is transforming civilization.</H2Sub>

          <H2Sub>We believe that computing breakthroughs will unlock transcendental possibilities and elevate humanity to new heights.</H2Sub>

          <H2Sub>We believe that those who think they can change the future are those who do.</H2Sub>
        </div>
        <div className={styles.column}>
          <P>
            <strong>Initiate</strong>
          </P>
          <P>We explore and drive frontier R&D to identify and launch breakthrough startups that drive humanity forward.</P>

          <P>
            <strong>Grow</strong>
          </P>
          <P>We bring deep strategic and operational experience to drive exponential growth.</P>

          <P>
            <strong>Scale</strong>
          </P>
          <P>We engineer internet-scale network effects to allow for outsized value generation.</P>
        </div>
      </div>
    </div>
  );
}
