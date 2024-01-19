import styles from '@components/clients/plvs/HeroCopy.module.scss';

import * as React from 'react';

import PipelineIV from '@components/clients/plvs/svg/PipelineIV';

import { H1, P } from '@components/clients/plvs/typography';

export default function HeroCopy(props) {
  return (
    <>
      <div className={styles.root}>
        <div className={styles.container}>
          <div className={styles.text}>
            <H1>We build startups driving breakthroughs in computing</H1>
          </div>
          <div className={styles.border}>
            <PipelineIV width="100%" />
          </div>
          <P>Research & Development pipeline </P>
        </div>
      </div>
    </>
  );
}
