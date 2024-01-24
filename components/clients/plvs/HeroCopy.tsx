import styles from '@components/clients/plvs/HeroCopy.module.scss';

import * as React from 'react';

import PipelineV from '@components/clients/plvs/svg/PipelineV';

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
            <PipelineV width="100%" />
          </div>
          <P>Research & Development pipeline </P>
        </div>
      </div>
    </>
  );
}
