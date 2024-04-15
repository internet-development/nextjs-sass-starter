import * as React from 'react';
import * as Utilities from '@common/utilities';

import DemoSystemDataVisualizationSidebar, { VISUALIZATION_OPTIONS } from '@system/layouts/demos/DemoSystemDataVisualizationSidebar';
import BubbleChart from '@system/graphs/BubbleChart';
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
    data: [``, <Tag>Title</Tag>, <Tag>True</Tag>, <SubText style={{ marginTop: 7 }}>The title is used to describe the contents of your bubble chart. [20px]</SubText>],
  },

  {
    data: [
      ``,
      <Tag>Text</Tag>,
      <Tag>True</Tag>,
      <SubText style={{ marginTop: 7 }}>Text is used to provide additional context or data labels within the bubble chart. [16px]</SubText>,
    ],
  },

  {
    data: [``, <Tag>Bubbles</Tag>, <Tag>False</Tag>, <SubText style={{ marginTop: 7 }}>Bubbles represent data points with their size and position on the chart.</SubText>],
  },
  {
    data: [
      ``,
      <Tag>Axis</Tag>,
      <Tag>False</Tag>,
      <SubText style={{ marginTop: 7 }}>The axis helps in understanding the scale and context of the data represented by the bubbles.</SubText>,
    ],
  },
  {
    data: [
      ``,
      <Tag>Legend</Tag>,
      <Tag>False</Tag>,
      <SubText style={{ marginTop: 7 }}>The legend explains the colors or sizes of the bubbles, providing insight into the data set.</SubText>,
    ],
  },
];

const EXAMPLE_DUMMY_DATA = [
  { x: 10, y: 20, value: 30, category: 'Category 1' },
  { x: 20, y: 30, value: 40, category: 'Category 2' },
  { x: 30, y: 40, value: 50, category: 'Category 3' },
  { x: 40, y: 50, value: 60, category: 'Category 4' },
  { x: 50, y: 60, value: 70, category: 'Category 5' },
];

const EXAMPLE_LEGEND_ITEMS_DATA = [
  { color: 'var(--color-success)', label: 'significant' },
  { color: 'var(--color-border)', label: 'no significance' },
];

function ExampleSystemDataVisualizationBubble(props) {
  const chartContainerStyles = { padding: `0px 24px 16px 16px`, minHeight: 188 };

  const chart = {
    title: 'Bubble Chart Example',
    description: 'This bubble chart visualizes data points across two dimensions using the size and position of its bubbles.',
  };
  return (
    <Page
      title="nextjs-sass-starter: system: data visualization: bubble"
      description="A lightweight website template to test our design system with a bubble chart example. You can view this template on GitHub and see how we write websites."
      url="https://wireframes.internet.dev/examples/system/data-visualization/bubble"
    >
      <Navigation />
      <TwoColumnLayoutFull sidebarStyle={{ width: '240px', flexShrink: 0 }} sidebar={<DemoSystemDataVisualizationSidebar active="bubble" data={VISUALIZATION_OPTIONS} />}>
        <H2 style={{ marginTop: 64, padding: '0 24px 0 22px' }}>Bubble Chart</H2>
        <P style={{ marginTop: `1rem`, padding: '0 24px 0 24px', maxWidth: 768 }}>
          Bubble charts are used to display three dimensions of data on a chart. The position of the bubble on the horizontal and vertical axes indicates the values of two data
          points, and the size of the bubble represents a third.
        </P>
        <Title style={{ marginTop: `49px`, padding: '24px 24px 0 24px', borderTop: `1px solid var(--color-border)` }}>{chart.title}</Title>
        <Text style={{ marginTop: `8px`, padding: '0 24px 0 24px' }}>{chart.description}</Text>
        <div style={chartContainerStyles}>
          <BubbleChart data={EXAMPLE_DUMMY_DATA} style={{ marginTop: 32 }} legend={EXAMPLE_LEGEND_ITEMS_DATA} />
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

export default ExampleSystemDataVisualizationBubble;
