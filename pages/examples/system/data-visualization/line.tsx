import * as React from 'react';
import * as Utilities from '@common/utilities';

import DemoSystemDataVisualizationSidebar, { VISUALIZATION_OPTIONS } from '@system/layouts/demos/DemoSystemDataVisualizationSidebar';
import GlobalModalManager from '@system/modals/GlobalModalManager';
import Navigation from '@system/Navigation';
import Page from '@components/Page';
import Table from '@system/Table';
import Tag from '@system/documents/Tag';
import TwoColumnLayoutFull from '@system/layouts/TwoColumnLayoutFull';

import { H2, P, Title, Text, SubText } from '@system/typography';
import LineChart from '@root/system/graphs/LineChart';

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
  { value: 20, date: '2023-1-1', lower_ci: 18, upper_ci: 22 },
  { value: 30, date: '2023-2-1', lower_ci: 27, upper_ci: 33 },
  { value: 45, date: '2023-3-1', lower_ci: 41, upper_ci: 49.5 },
  { value: 70, date: '2023-4-1', lower_ci: 63, upper_ci: 77 },
  { value: 100, date: '2023-5-1', lower_ci: 90, upper_ci: 110 },
  { value: 135, date: '2023-6-1', lower_ci: 121.5, upper_ci: 148.5 },
  { value: 145, date: '2023-7-1', lower_ci: 130.5, upper_ci: 159.5 },
  { value: 135, date: '2023-8-1', lower_ci: 121.5, upper_ci: 148.5 },
  { value: 100, date: '2023-9-1', lower_ci: 90, upper_ci: 110 },
  { value: 70, date: '2023-10-1', lower_ci: 63, upper_ci: 77 },
  { value: 45, date: '2023-11-1', lower_ci: 41, upper_ci: 49.5 },
  { value: 30, date: '2023-12-1', lower_ci: 27, upper_ci: 33 },
];

function ExampleSystemDataVisualizationLine(props) {
  const chartContainerStyles = { padding: `0px 24px 16px 16px` };

  const chart = {
    title: 'Price of Apples in 2023',
  };

  const variantA = {
    title: 'Line Chart - Variant A',
  };

  const variantB = {
    title: 'Line Chart - Variant B',
  };

  const variantC = {
    title: 'Line Chart - Variant C',
  };
  return (
    <Page
      title="nextjs-sass-starter: system: data visualization: line"
      description="A lightweight website template to test our design system. You can view this template on GitHub and see how we write websites."
      url="https://wireframes.internet.dev/examples/system/data-visualization/line"
    >
      <Navigation />
      <TwoColumnLayoutFull sidebarStyle={{ width: '240px', flexShrink: 0 }} sidebar={<DemoSystemDataVisualizationSidebar active="line" data={VISUALIZATION_OPTIONS} />}>
        <H2 style={{ marginTop: 64, padding: '0 24px 0 22px' }}>Line</H2>
        <P style={{ marginTop: `1rem`, padding: '0 24px 0 24px', maxWidth: 768 }}>
          A line chart, also known as a line plot or line graph, uses points connected by line segments from left to right to demonstrate changes in value. The horizontal axis
          typically represents a continuous progression, often that of time, while the vertical axis displays values for a metric of interest across that progression.
        </P>
        <P style={{ marginTop: `1rem`, padding: '0 24px 0 24px', maxWidth: 768 }}>
          You should use a line chart when you want to emphasize changes in values for one variable (plotted on the vertical axis) over continuous values of a second variable
          (plotted on the horizontal axis). This emphasis on patterns of change is conveyed by line segments moving consistently from left to right, allowing the observer to easily
          identify the slopes of the lines moving up or down.
        </P>

        <Title style={{ marginTop: `49px`, padding: '24px 24px 0 24px', borderTop: `1px solid var(--color-border)` }}>{chart.title}</Title>
        <div style={chartContainerStyles}>
          <LineChart data={EXAMPLE_DUMMY_DATA} style={{ marginTop: 32 }} showErrorBars={false} showConfidenceIntervalFill={false} />
        </div>

        <Text style={{ marginTop: `8px`, padding: '0 24px 0 24px' }}>{variantA.title}</Text>

        <div style={chartContainerStyles}>
          <LineChart data={EXAMPLE_DUMMY_DATA} style={{ marginTop: 32 }} showErrorBars={true} showConfidenceIntervalFill={false} />
        </div>

        <Text style={{ marginTop: `8px`, padding: '0 24px 0 24px' }}>{variantB.title}</Text>
        <div style={chartContainerStyles}>
          <LineChart data={EXAMPLE_DUMMY_DATA} style={{ marginTop: 32 }} showErrorBars={true} showConfidenceIntervalFill={true} />
        </div>

        <Text style={{ marginTop: `8px`, padding: '0 24px 0 24px' }}>{variantC.title}</Text>
        <div style={chartContainerStyles}>
          <LineChart data={EXAMPLE_DUMMY_DATA} style={{ marginTop: 32 }} showErrorBars={true} showConfidenceIntervalFill={true} showAreaFill={true} />
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

export default ExampleSystemDataVisualizationLine;
