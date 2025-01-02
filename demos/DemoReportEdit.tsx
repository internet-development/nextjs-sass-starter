import styles from '@demos/DemoReportEdit.module.scss';

import * as React from 'react';
import * as Utilities from '@common/utilities';

import ChartLegend from '@system/graphs/ChartLegend';
import GridTestOverlay from '@system/testing/GridTestOverlay';
import HorizontalBarChart from '@system/graphs/HorizontalBarChart';

import { H2, P } from '@system/typography';

const EXAMPLE_DUMMY_DATA = [
  {
    label: 'A',
    value: 200,
  },
  {
    label: 'B',
    value: 150,
  },
];

export default function DemoReportEdit(props) {
  return (
    <>
      <div className={styles.root}>
        <div className={styles.top}>
          <span className={styles.label}>⿻ Wireframe of Report Tool — Revision 0.0.1</span>
        </div>
        <div className={styles.top}>
          <span className={styles.label}>⿴ 2025 Civil Engineering Report Blueprint</span>
        </div>
        <div className={styles.top}>
          <span className={styles.label}>➤ Save</span>
          <span className={styles.label}>➤ Discard Changes</span>
          <span className={styles.label}>➤ Edit as JSON</span>
          <span className={styles.label}>➤ Create New Report</span>
          <span className={styles.label}>➤ Publish To Google Slides</span>
          <span className={styles.label}>➤ Publish To Figma</span>
        </div>
        <div className={styles.middle}>
          <div className={styles.sidebar}>
            {(() => {
              const elements: React.ReactNode[] = [];
              for (let i = 1; i <= 10; i++) {
                let style: React.CSSProperties = {};

                if (i === 6) {
                  style = { color: 'red', fontWeight: 600 };
                }

                elements.push(
                  <span key={i} className={styles.item} style={style}>
                    ➤ Slide {i}
                  </span>
                );
              }
              return elements;
            })()}
          </div>
          <div className={styles.content}>
            <div className={styles.slide}>
              <H2 style={{ padding: `18px 16px 0px 12px` }}>Retention</H2>
              <P style={{ padding: `2px 16px 36px 16px`, marginTop: `1rem`, fontSize: `18px`, lineHeight: `24px` }}>
                We have been striving to maintain high retention rates within our civil engineering organization. However, we are currently facing challenges because team members
                may not fully recognize the increasing complexities involved in modern bridge construction. This lack of awareness is significantly impacting our ability to retain
                talented professionals on the team.
              </P>
              <HorizontalBarChart data={EXAMPLE_DUMMY_DATA} />
            </div>
            <GridTestOverlay />
          </div>
          <div className={styles.actions}>
            <span className={styles.action}>➤ Insert block</span>
            <div className={styles.section}>
              <div className={styles.title}>
                <div className={styles.titleLeft}>
                  <span className={styles.text}>Block</span>
                </div>
                <div className={styles.titleRight}>
                  <span className={styles.subAction}>Delete</span>
                </div>
              </div>

              <div className={styles.blockOptions}>
                <div className={styles.blockColFull}>
                  <span className={styles.letter}>Z</span>
                  <span className={styles.value}>100%</span>
                </div>
                <span className={styles.blockIcon}>➤</span>
                <span className={styles.blockIcon}>➤</span>
                <span className={styles.blockIcon}>➤</span>
                <span className={styles.blockIcon}>➤</span>
              </div>

              <div className={styles.blockOptions}>
                <div className={styles.blockColHalf}>
                  <span className={styles.letter}>W</span>
                  <span className={styles.value}>480px</span>
                </div>
                <div className={styles.blockColHalf}>
                  <span className={styles.letter}>H</span>
                  <span className={styles.value}>768px</span>
                </div>
                <span className={styles.blockIcon}>ꗃ</span>
              </div>

              <div className={styles.blockOptions}>
                <div className={styles.blockColHalf}>
                  <span className={styles.letter}>X</span>
                  <span className={styles.value}>24px</span>
                </div>
                <div className={styles.blockColHalf}>
                  <span className={styles.letter}>Y</span>
                  <span className={styles.value}>24px</span>
                </div>
                <span className={styles.blockIcon}>ꗃ</span>
              </div>

              <div className={styles.blockOptions}>
                <div className={styles.blockColHalf}>
                  <span className={styles.letter}>M</span>
                  <span className={styles.value}>0px</span>
                </div>
                <div className={styles.blockColHalf}>
                  <span className={styles.letter}>P</span>
                  <span className={styles.value}>16px</span>
                </div>
                <span className={styles.blockIcon}>ꗃ</span>
              </div>
            </div>
            <span className={styles.action}>➤ Save all changes</span>
            <span className={styles.action}>➤ Revert all changes</span>
          </div>
        </div>
        <div className={styles.bottom}>
          <span className={styles.label}>➤ Add Slide</span>
          <span className={styles.label}>➤ Import Slide as JSON</span>
        </div>
      </div>
    </>
  );
}
