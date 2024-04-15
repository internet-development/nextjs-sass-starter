import * as React from 'react';
import * as Utilities from '@common/utilities';

import DemoSystemDataVisualizationSidebar, { VISUALIZATION_OPTIONS } from '@system/layouts/demos/DemoSystemDataVisualizationSidebar';
import GlobalModalManager from '@system/modals/GlobalModalManager';
import CohortChart from '@system/graphs/CohortChart';
import Navigation from '@system/Navigation';
import Page from '@components/Page';
import Table from '@system/Table';
import Tag from '@system/documents/Tag';
import TwoColumnLayoutFull from '@system/layouts/TwoColumnLayoutFull';

import { H2, P, Title, Text, SubText } from '@system/typography';

const TABLE_HEADINGS = [``, `Name`, `Optional`, `Description`];

const TABLE_DATA = [
  {
    data: [``, <Tag>Title</Tag>, <Tag>True</Tag>, <SubText style={{ marginTop: 7 }}>The title is used to describe the contents of your chart. [20px]</SubText>],
  },

  {
    data: [``, <Tag>Text</Tag>, <Tag>True</Tag>, <SubText style={{ marginTop: 7 }}>Text is used to provide additional context. [16px]</SubText>],
  },

  {
    data: [
      ``,
      <Tag>Marks</Tag>,
      <Tag>False</Tag>,
      <SubText style={{ marginTop: 7 }}>The marks are visual representations of data on a chart. Common types of marks include bars, lines, and areas.</SubText>,
    ],
  },
  {
    data: [
      ``,
      <Tag>Graph Lines</Tag>,
      <Tag>False</Tag>,
      <SubText style={{ marginTop: 7 }}>
        The graph lines help users interpret the chart by providing visual context and connecting the marks to the axis labels. Some chart types utilize only horizontal gridlines,
        while others use only vertical gridlines.
      </SubText>,
    ],
  },
  {
    data: [``, <Tag>Axis</Tag>, <Tag>False</Tag>, <SubText style={{ marginTop: 7 }}>The axis borders define the boundaries of the chart.</SubText>],
  },
  {
    data: [``, <Tag>Axis Labels</Tag>, <Tag>False</Tag>, <SubText style={{ marginTop: 7 }}>The axis labels show the units of measurement for the chart. [12px]</SubText>],
  },
];

const EXAMPLE_DUMMY_DATA = [
  // Group A
  { group: 'A', variable: 'v1', value: 45 },
  { group: 'A', variable: 'v2', value: 55 },
  { group: 'A', variable: 'v3', value: 35 },
  { group: 'A', variable: 'v4', value: 20 },
  // Group B
  { group: 'B', variable: 'v2', value: 15 },
  { group: 'B', variable: 'v3', value: 20 },
  { group: 'B', variable: 'v4', value: 25 },
  // Group C
  { group: 'C', variable: 'v3', value: 30 },
  { group: 'C', variable: 'v4', value: 35 },
  // Group D
  { group: 'D', variable: 'v4', value: 35 },
];

const EXAMPLE_LEGEND_ITEMS_DATA = [
  { color: 'var(--color-subdued-error)', label: 'under 25%' },
  { color: 'var(--color-light-gray)', label: 'no significance' },
  { color: 'var(--color-success)', label: 'over 35%' },
];

function ExampleSystemDataVisualizationCohortChart(props) {
  const chartContainerStyles = { padding: `0px 24px 16px 16px`, minHeight: 188 };

  const chart = {
    title: 'Cohort Chart Example',
    description: 'This is an example of a Cohort Chart using D3.js integrated into a React component.',
  };
  return (
    <Page
      title="nextjs-sass-starter: system: data visualization: cohort chart"
      description="A lightweight website template to test our design system. You can view this template on GitHub and see how we write websites."
      url="https://wireframes.internet.dev/examples/system/data-visualization/cohort"
    >
      <Navigation />
      <TwoColumnLayoutFull sidebarStyle={{ width: '240px', flexShrink: 0 }} sidebar={<DemoSystemDataVisualizationSidebar active="cohort" data={VISUALIZATION_OPTIONS} />}>
        <H2 style={{ marginTop: 64, padding: '0 24px 0 22px' }}>Cohort Chart</H2>
        <P style={{ marginTop: `1rem`, padding: '0 24px 0 24px', maxWidth: 768 }}>
          Cohort Chart visualization is a method of graphically representing numerical data where the value of each data point is indicated using colors. It can help visualize data
          distribution across different groups and variables.
        </P>
        <Title style={{ marginTop: `49px`, padding: '24px 24px 0 24px', borderTop: `1px solid var(--color-border)` }}>{chart.title}</Title>
        <Text style={{ marginTop: `8px`, padding: '0 24px 0 24px' }}>{chart.description}</Text>
        <div style={chartContainerStyles}>
          <CohortChart data={EXAMPLE_DUMMY_DATA} legend={EXAMPLE_LEGEND_ITEMS_DATA} style={{ height: '100%', width: '100%' }} />
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

export default ExampleSystemDataVisualizationCohortChart;
