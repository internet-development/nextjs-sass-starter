import styles from '@system/layouts/demos/DemoPricing.module.scss';

import * as React from 'react';

import Button from '@system/Button';

import { H1, H2, Lead, Text } from '@system/typography';

export default function DemoPricing(props) {
  return (
    <div className={styles.root} style={props.style}>
      <div className={styles.container}>
        <div className={styles.hero}>
          <H2>Pay to use our production APIs</H2>
          <Lead style={{ marginTop: `var(--type-scale-5)` }}>
            Even though this is just a template, You can subscribe to the premium service (if it is enabled). You might even get a sneak peak to an API we are testing.
          </Lead>
        </div>
        <div className={styles.row}>
          <div className={styles.column}>
            <div className={styles.content}>
              <div className={styles.top}>
                <Text>Basic Usage</Text>
              </div>
              <div className={styles.bottom}>
                <H1>Free</H1>
                <Text style={{ marginBottom: 24 }}>Forever</Text>
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
                <Text>Paid</Text>
              </div>
              <div className={styles.bottom}>
                <H1>$8.99</H1>
                <Text style={{ marginBottom: 24 }}>Per month</Text>
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
                <Text>Paid (discounted)</Text>
              </div>
              <div className={styles.bottom}>
                <H1>$100</H1>
                <Text style={{ marginBottom: 24 }}>Per year</Text>
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
