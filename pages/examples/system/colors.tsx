import * as React from 'react';
import * as Utilities from '@common/utilities';

import GlobalModalManager from '@system/modals/GlobalModalManager';
import GridLayout from '@system/layouts/GridLayout';
import ImageBlock from '@system/ImageBlock';
import IsometricProductBox from '@system/IsometricProductBox';
import Navigation from '@system/Navigation';
import Page from '@components/Page';
import Table from '@system/Table';
import Tag from '@system/documents/Tag';
import TwoColumnLayoutFull from '@system/layouts/TwoColumnLayoutFull';

import { H1, H2, H3, H4, Lead, SubLead, P, Title, Text, SubTitle, SubText, UnitLabel } from '@system/typography';
import { FormHeading, FormSubHeading, FormParagraph, InputLabel } from '@system/typography/forms';

const TABLE_HEADINGS = [``, `CSS Variable`, `Preview`];
const COPY = `My heart had great experience of wisdom and knowledge, [1:17] and I gave my heart to know wisdom, and to know madness and folly: I perceived that this also is vexation of spirit. For in much wisdom is much grief: and he that increaseth knowledge increaseth sorrow.`;

const TABLE_DATA = [
  'var(--theme-foreground)',
  'var(--theme-foreground-secondary)',
  'var(--theme-text)',
  'var(--theme-border)',
  'var(--theme-border-subdued)',
  'var(--theme-primary)',
  'var(--theme-input-active)',
  'var(--theme-error)',
  'var(--theme-error-subdued)',
  'var(--theme-success)',
  'var(--theme-success-subdued)',
  'var(--theme-button)',
  'var(--theme-button-text)',
  'var(--theme-background)',
  'var(--theme-background-overlay)',
  'var(--theme-background-box-top)',
  'var(--theme-background-box-side)',
  'var(--theme-background-box-front)',
].map((backgroundColor) => {
  return { data: [``, <Tag>{backgroundColor}</Tag>, <ImageBlock style={{ backgroundColor }} />] };
});

function ExampleSystemColors(props) {
  return (
    <Page
      title="wireframes.internet.dev ➝ system ➝ colors"
      description="A lightweight website template to test our design system. You can view this template on GitHub and see how we write websites."
      url="https://wireframes.internet.dev/examples/system/colors"
    >
      <Navigation />
      <TwoColumnLayoutFull
        sidebar={
          <GridLayout style={{ overflow: 'hidden' }}>
            <IsometricProductBox x={228} y={300} />
          </GridLayout>
        }
      >
        <Table data={TABLE_DATA} headings={TABLE_HEADINGS} style={{ marginTop: 64 }} />
      </TwoColumnLayoutFull>
      <GlobalModalManager />
    </Page>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {},
  };
}

export default ExampleSystemColors;
