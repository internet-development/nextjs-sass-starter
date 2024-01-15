import styles from '@components/clients/plvs/Footer.module.scss';

import * as React from 'react';

import PLVS from '@system/svg/clients/PLVS';

export default function Footer(props) {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <PLVS height="24px" />
      </div>
      <div className={styles.subtext}>
        <div className={styles.legal}>© PROTOCOL LABS VENTURE STUDIO 2024</div>
        <div className={styles.legal}>
          This website (the “Website”) is intended solely to provide general information about Protocol Labs Venture Studio, its services to entrepreneurs and management teams, and
          its personnel.
        </div>
        <div className={styles.legal}>
          The content provided on this Website, including but not limited to investment, accounting, tax, or legal information, does not constitute professional advice in any of
          those areas, nor should it be construed as a recommendation to buy, sell, or hold any security or other investment, or to adopt any specific investment style or strategy.
          The opinions and views expressed in any posts, podcasts, videos, and on social media platforms are solely those of the individuals quoted and do not represent the views
          of Protocol Labs Venture Studio. Protocol Labs Venture Studio reserves the right to modify or amend any opinions expressed on this Website at any time without notice.
        </div>
        <div className={styles.legal}>
          THE CONTENTS IN HERE — AND AVAILABLE ON ANY ASSOCIATED DISTRIBUTION PLATFORMS AND ANY PUBLIC Protocol Labs Venture Studio ONLINE SOCIAL MEDIA ACCOUNTS, PLATFORMS, AND
          SITES (INCLUDING THE PERSONAL ACCOUNTS OF Protocol Labs Venture Studio’S EMPLOYEES; COLLECTIVELY, “CONTENT DISTRIBUTION OUTLETS”) — SHOULD NOT BE CONSTRUED AS OR RELIED
          UPON IN ANY MANNER AS INVESTMENT, LEGAL, TAX, OR OTHER ADVICE. YOU SHOULD CONSULT YOUR OWN ADVISERS AS TO LEGAL, BUSINESS, TAX, AND OTHER RELATED MATTERS CONCERNING ANY
          INVESTMENT. ANY PROJECTIONS, ESTIMATES, FORECASTS, TARGETS, PROSPECTS AND/OR OPINIONS EXPRESSED IN THESE MATERIALS ARE SUBJECT TO CHANGE WITHOUT NOTICE AND MAY DIFFER OR
          BE CONTRARY TO OPINIONS EXPRESSED BY OTHERS. ANY CHARTS PROVIDED ARE FOR INFORMATIONAL PURPOSES ONLY AND SHOULD NOT BE RELIED UPON WHEN MAKING INVESTMENT DECISIONS.
        </div>
      </div>
    </footer>
  );
}
