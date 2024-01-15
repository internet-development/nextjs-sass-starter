import styles from '@components/clients/plvs/HeroMarketingGrid.module.scss';

import * as React from 'react';

import { H3, P } from '@components/clients/plvs/typography';

export default function HeroMarketingGrid(props) {
  return (
    <div className={styles.grid}>
      <div className={styles.container}>
        <H3>Our focus</H3>
      </div>
      <div className={styles.row}>
        <div className={styles.column}>
          <P>We focus on crypto and related technologies at the frontier.</P>
          <P>
            Our firm specializes in investing, developing, and nurturing companies and protocols. Our involvement typically begins at the foundational stages, and we are committed
            to providing ongoing support to our portfolio companies throughout their growth journey.
          </P>
          <P>
            Our strategy is to adopt a proactive and comprehensive approach in assisting projects to realize their full potential. This involves meticulous involvement in technical
            areas, including mechanism design, security enhancements, and engineering advancements.
          </P>{' '}
          <P>
            Operationally, our focus extends to strategic talent acquisition, market entry strategies, and the formulation of legal and regulatory frameworks. Our commitment is to
            deliver holistic and thorough support across all dimensions of project development.
          </P>
        </div>
        <div className={styles.column}>
          <P>We are of the view that integrating ventures within networks of innovation can lead to significantly enhanced competitive benefits.</P>
          <P>
            We hold that the success of venture returns is largely dependent on effectively analyzing and responding to key indicators during the initial stages of the research and
            development process.
          </P>
        </div>
      </div>
    </div>
  );
}
