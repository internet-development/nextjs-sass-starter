import styles from '@components/clients/plvs/HeroCopy.module.scss';

import * as React from 'react';

import PipelineIII from '@components/clients/plvs/svg/PipelineIII';

import { H1, P } from '@components/clients/plvs/typography';

export default function HeroCopy(props) {
  return (
    <>
      <div className={styles.root}>
        <div className={styles.container}>
          <div className={styles.text}>
            <H1 style={{ opacity: 0.6 }}>We build startups driving breakthroughs in computing</H1>
          </div>
          <div className={styles.border}>
            <PipelineIII width="100%" />
          </div>
          <P>Research & development pipeline: PLVS translates frontier early stage research into venture live in market.</P>
        </div>
      </div>
    </>
  );
}
