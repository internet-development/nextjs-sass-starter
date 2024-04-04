import styles from '@system/layouts/demos/DemoApplicationSite.module.scss';

import * as React from 'react';

import Button from '@system/Button';

import { H1, H2, H3, H4, Lead, SubLead, P, Title, Text, SubTitle, SubText, UnitLabel } from '@system/typography';
import { FormHeading, FormSubHeading, FormParagraph, InputLabel } from '@system/typography/forms';

export default function DemoApplicationSite(props) {
  const name = `Prototype`;

  return (
    <>
      <div className={styles.row}>
        <div className={styles.flex} style={{ paddingTop: 48, paddingBottom: 48 }}>
          <div className={styles.left}>
            <figure className={styles.icon} />
          </div>
          <div className={styles.right}>
            <div className={styles.content}>
              <H2>Be simple, be direct</H2>
              <Lead style={{ marginTop: `0.5rem` }}>
                <strong>{name}</strong> is the only clear and valuable product in the world today.
              </Lead>
              <div className={styles.actionsWeb} style={{ marginTop: 24 }}>
                <Button style={{ display: 'inline-block', fontSize: '20px' }}>Get for macOS</Button>
                <Title style={{ margin: 24 }}>More platforms</Title>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.actionsMobile} style={{ marginTop: 24 }}>
          <Button style={{ width: `100%`, fontSize: '20px' }}>Get for macOS</Button>
          <Title style={{ marginTop: `2rem`, textAlign: 'center' }}>More platforms</Title>
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.flexWide}>
          <img className={styles.image} src="https://intdev-global.s3.us-west-2.amazonaws.com/public/internet-dev/0d239e76-ac71-4837-8b38-bd117e18a8c8.png" />
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.body}>
          <div className={styles.bodyContent}>
            <H3>
              <strong>{name}</strong> captures your wildest imagination
            </H3>
            <SubLead style={{ marginTop: `1rem` }}>
              From dramatic workflow flexibility to next-generation usability, see what you can do with our most powerful product yet.
            </SubLead>
          </div>
        </div>

        <div className={styles.bento}>
          <div className={styles.bentoRow}>
            <div className={styles.columnWide}>
              <div className={styles.full}>I</div>
            </div>
            <div className={styles.columnWide}>
              <div className={styles.full}>II</div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.body}>
          <div className={styles.bodyContent}>
            <H3>Get in on the latest features</H3>
            <SubLead style={{ marginTop: `1rem` }}>
              The all-new feature set is a fast way to track your favorite work style. Once you set the one you want, you won't have issue finding more.
            </SubLead>
          </div>
        </div>

        <div className={styles.bento}>
          <div className={styles.bentoRow}>
            <div className={styles.column}>
              <div className={styles.full}>III</div>
            </div>
            <div className={styles.column}>
              <div className={styles.full}>IV</div>
            </div>
            <div className={styles.column}>
              <div className={styles.full}>V</div>
            </div>
            <div className={styles.column}>
              <div className={styles.full}>VI</div>
            </div>
          </div>
          <div className={styles.bentoRow}>
            <div className={styles.column}>
              <div className={styles.full}>VII</div>
            </div>
            <div className={styles.column}>
              <div className={styles.full}>VIII</div>
            </div>
            <div className={styles.column}>
              <div className={styles.full}>IX</div>
            </div>
            <div className={styles.column}>
              <div className={styles.full}>X</div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.body}>
          <div className={styles.bodyContent}>
            <H3>Use it instantly</H3>
            <SubLead style={{ marginTop: `1rem` }}>Turn your needs into an online paradise, or whatever beautiful experience you can think of.</SubLead>
          </div>
        </div>

        <div className={styles.bento}>
          <div className={styles.bentoRow}>
            <div className={styles.columnWide}>
              <div className={styles.full}>XI</div>
            </div>
            <div className={styles.columnWide}>
              <div className={styles.full}>XII</div>
            </div>
          </div>

          <div className={styles.bentoRow}>
            <div className={styles.columnWide}>
              <div className={styles.full}>XIII</div>
            </div>
            <div className={styles.columnWide}>
              <div className={styles.full}>XIV</div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.body} style={{ textAlign: 'center' }}>
          <H3 style={{ marginTop: `8rem` }}>It's your chance to try</H3>
          <div style={{ marginTop: `2rem`, marginBottom: `8rem` }}>
            <Button style={{ display: 'inline-block', fontSize: '20px' }}>Get {name}</Button>
          </div>
        </div>

        <div className={styles.bento}>
          <div className={styles.bentoRow}>
            <div className={styles.column}>
              <div className={styles.full}>XV</div>
            </div>
            <div className={styles.column}>
              <div className={styles.full}>XVI</div>
            </div>
            <div className={styles.column}>
              <div className={styles.full}>XVII</div>
            </div>
            <div className={styles.column}>
              <div className={styles.full}>XVIII</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
