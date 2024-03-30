import styles from '@system/layouts/demos/DemoSimpleGrid.module.scss';

import * as React from 'react';

import Content from '@system/layouts/Content';

import { H2, H3, H4, Lead, SubLead, P } from '@system/typography';

export default function DemoSimpleGrid(props) {
  return (
    <div className={styles.root}>
      <Content>
        <H3>DemoSimpleGrid</H3>
        <Lead style={{ marginTop: `1rem` }}>Sample grid with sample copy and description text on the left. Can be viewed in any viewport.</Lead>
      </Content>

      <section className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.contentSection}>
            <H4>Revolution and Revolt</H4>
            <SubLead style={{ marginTop: `1rem` }}>
              A study exploring the relationship between literacy levels and the French Revolution of 1789 suggests that literacy may have played a role in the extent and nature of
              peasant revolts.
            </SubLead>
          </div>
          <div className={styles.columnSection}>
            <div className={styles.row}>
              <div className={styles.column}>
                <div className={styles.content}>
                  <P>
                    <strong>Crime</strong>
                  </P>
                  <P style={{ marginTop: `1rem` }}>
                    There is a clear correlation between low literacy rates and higher rates of crime. Individuals with low literacy are less likely to fully understand and follow
                    laws, leading to a higher likelihood of getting into trouble with the law.
                  </P>
                </div>
              </div>
              <div className={styles.column}>
                <div className={styles.content}>
                  <P>
                    <strong>Educational Impact</strong>
                  </P>
                  <P style={{ marginTop: `1rem` }}>
                    Low literacy rates can lead to poor academic performance. In the United States, for example, 4 in 5 adults are literate, but literacy rates have not improved
                    over time, revealing that US schools continue to underperform.
                  </P>
                </div>
              </div>
              <div className={styles.column}>
                <div className={styles.content}>
                  <P>
                    <strong>Health Impact</strong>
                  </P>
                  <P style={{ marginTop: `1rem` }}>
                    Low literacy can also impact health outcomes. Individuals with low literacy may have limited ability to make important informed decisions, such as understanding
                    government policies, reading medicine or nutritional labels, and more.
                  </P>
                </div>
              </div>
            </div>
            <div className={styles.row}>
              <div className={styles.column}>
                <div className={styles.content}>
                  <P>
                    <strong>Social Impact</strong>
                  </P>
                  <P style={{ marginTop: `1rem` }}>Adults with low literacy skills are more likely to live in poverty, and one-third of adults with low literacy are unemployed.</P>
                </div>
              </div>
              <div className={styles.column}>
                <div className={styles.content}>
                  <P>
                    <strong>Economic Impact</strong>
                  </P>
                  <P style={{ marginTop: `1rem` }}>
                    Lower literacy rates directly correlate to higher unemployment rates, reduced income, and overall impacts on competitiveness on the global stage 1 . Illiteracy
                    and low levels of literacy can lead to welfare dependency, lower self-esteem, and higher levels of crime.
                  </P>
                </div>
              </div>
              <div className={styles.column}>
                <div className={styles.content}>
                  <P>
                    <strong>Trending Downward</strong>
                  </P>
                  <P style={{ marginTop: `1rem` }}>
                    In the fall of 2020, only 37% of kindergarteners in the United States were on track to learn to read, down from 55% a year earlier, and this trend continued
                    across all elementary-school students.
                  </P>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
