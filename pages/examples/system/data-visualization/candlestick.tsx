import * as React from 'react';
import * as Utilities from '@common/utilities';

import CandlestickChart from '@system/graphs/CandlestickChart';
import DemoSystemDataVisualizationSidebar, { VISUALIZATION_OPTIONS } from '@system/layouts/demos/DemoSystemDataVisualizationSidebar';
import GlobalModalManager from '@system/modals/GlobalModalManager';
import GridLayout from '@system/layouts/GridLayout';
import Navigation from '@system/Navigation';
import Page from '@components/Page';
import Table from '@system/Table';
import Tag from '@system/documents/Tag';
import TwoColumnLayoutFull from '@system/layouts/TwoColumnLayoutFull';

import { H2, P, Title, Text, SubText } from '@system/typography';
import { FormHeading, FormSubHeading, FormParagraph, InputLabel } from '@system/typography/forms';

const TABLE_HEADINGS = [``, `Name`, `Optional`, `Description`];

const TABLE_DATA = [
  {
    data: [``, <Tag>Title</Tag>, <Tag>Yes</Tag>, <SubText style={{ marginTop: 7 }}>Specifies the chart's title, providing a brief description of its content. [20px]</SubText>],
  },

  {
    data: [``, <Tag>Text</Tag>, <Tag>Yes</Tag>, <SubText style={{ marginTop: 7 }}>Adds contextual information or commentary to the chart. [16px]</SubText>],
  },

  {
    data: [
      ``,
      <Tag>Marks</Tag>,
      <Tag>No</Tag>,
      <SubText style={{ marginTop: 7 }}>Represents data points on the chart, such as bars, lines, or areas, to visualize the dataset.</SubText>,
    ],
  },
  {
    data: [
      ``,
      <Tag>Graph Lines</Tag>,
      <Tag>No</Tag>,
      <SubText style={{ marginTop: 7 }}>Provides visual cues to help interpret the chart by connecting data points to the axis, enhancing readability.</SubText>,
    ],
  },
  {
    data: [``, <Tag>Axis</Tag>, <Tag>No</Tag>, <SubText style={{ marginTop: 7 }}>Defines the perimeter or boundary of the chart area.</SubText>],
  },
  {
    data: [``, <Tag>Axis Labels</Tag>, <Tag>No</Tag>, <SubText style={{ marginTop: 7 }}>Displays the measurement units or categories along the chart axes. [12px]</SubText>],
  },
];

const EXAMPLE_DUMMY_DATA = [
  { date: 'January', open: 100, high: 110, low: 90, close: 105 },
  { date: 'February', open: 105, high: 120, low: 100, close: 115 },
  { date: 'March', open: 115, high: 125, low: 105, close: 120 },
  { date: 'April', open: 120, high: 130, low: 110, close: 125 },
]; // Example data for the candlestick chart

function ExampleSystemDataVisualizationCandlestick(props) {
  const chartContainerStyles = { padding: `0px 24px 16px 16px`, minHeight: 188 };

  const chart = {
    title: 'Candlestick Chart Example',
    description: 'This candlestick chart illustrates stock price movements over time, showcasing opening, closing, high, and low prices.',
  };
  return (
    <Page
      title="nextjs-sass-starter: system: data visualization: candlestick"
      description="Explore our design system with a candlestick chart example. This template is available on GitHub."
      url="https://wireframes.internet.dev/examples/system/data-visualization/candlestick"
    >
      <Navigation />
      <TwoColumnLayoutFull sidebarStyle={{ width: '240px', flexShrink: 0 }} sidebar={<DemoSystemDataVisualizationSidebar active="candlestick" data={VISUALIZATION_OPTIONS} />}>
        <H2 style={{ marginTop: 64, padding: '0 24px 0 22px' }}>Candlestick Chart</H2>
        <P style={{ marginTop: `1rem`, padding: '0 24px 0 24px', maxWidth: 768 }}>
          Candlestick charts are a visual tool for analyzing financial data, particularly useful for identifying market trends and price patterns.
        </P>
        <Title style={{ marginTop: `49px`, padding: '24px 24px 0 24px', borderTop: `1px solid var(--color-border)` }}>{chart.title}</Title>
        <Text style={{ marginTop: `8px`, padding: '0 24px 0 24px' }}>{chart.description}</Text>
        <div style={chartContainerStyles}>
          <CandlestickChart data={EXAMPLE_DUMMY_DATA} style={{ marginTop: 32 }} />
        </div>
        <Table data={TABLE_DATA} headings={TABLE_HEADINGS} />
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

export default ExampleSystemDataVisualizationCandlestick;
