import styles from '@system/layouts/demos/DemoPricing.module.scss';

import * as React from 'react';

import Button from '@system/Button';

import { H1, H1Sub, H3, H3Sub, P, SubTitle } from '@system/typography';

export default function DemoPricing(props) {
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <div className={styles.hero}>
          <H1>Pay to use our production APIs</H1>
          <H1Sub>Even though this is just a template, You can subscribe to the premium service (if it is enabled). You might even get a sneak peak to an API we are testing.</H1Sub>
        </div>
        <div className={styles.row}>
          <div className={styles.column}>
            <div className={styles.content}>
              <div className={styles.top}>
                <SubTitle>Basic Usage</SubTitle>
              </div>
              <div className={styles.bottom}>
                <H1>Free</H1>
                <H3Sub style={{ marginBottom: 24 }}>Forever</H3Sub>
                <Button style={{ minHeight: 48 }} href="/examples/authentication">
                  Sign up
                </Button>
                <ul className={styles.list}>
                  <li className={styles.listItem}>No access to paid APIs</li>
                  <li className={styles.listItem}>E-mail verification required</li>
                </ul>
              </div>
            </div>
          </div>
          <div className={styles.column}>
            <div className={styles.content}>
              <div className={styles.top}>
                <SubTitle>Paid</SubTitle>
              </div>
              <div className={styles.bottom}>
                <H1>$8.99</H1>
                <H3Sub style={{ marginBottom: 24 }}>Per month</H3Sub>
                <Button style={{ minHeight: 48 }}>Coming soon</Button>
                <ul className={styles.list}>
                  <li className={styles.listItem}>15,000 credits renewed monthly</li>
                  <li className={styles.listItem}>Access to paid APIs</li>
                </ul>
              </div>
            </div>
          </div>
          <div className={styles.column}>
            <div className={styles.content}>
              <div className={styles.top}>
                <SubTitle>Paid (discounted)</SubTitle>
              </div>
              <div className={styles.bottom}>
                <H1>$100</H1>
                <H3Sub style={{ marginBottom: 24 }}>Per year</H3Sub>
                <Button style={{ minHeight: 48 }}>Coming soon</Button>
                <ul className={styles.list}>
                  <li className={styles.listItem}>180,000 credits renewed annually</li>
                  <li className={styles.listItem}>Access to paid APIs</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
