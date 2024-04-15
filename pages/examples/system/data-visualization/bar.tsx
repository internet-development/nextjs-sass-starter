import * as React from 'react';
import * as Utilities from '@common/utilities';

import DemoSystemDataVisualizationSidebar, { VISUALIZATION_OPTIONS } from '@system/layouts/demos/DemoSystemDataVisualizationSidebar';
import GlobalModalManager from '@system/modals/GlobalModalManager';
import HorizontalBarChart from '@system/graphs/HorizontalBar';
import Navigation from '@system/Navigation';
import Page from '@components/Page';
import Table from '@system/Table';
import Tag from '@system/documents/Tag';
import TwoColumnLayoutFull from '@system/layouts/TwoColumnLayoutFull';

import DivergingStackedBarChart from '@root/system/graphs/DivergingStackedBarChart';
import { H2, P, SubText, Text, Title } from '@system/typography';

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
  {
    label: 'A',
    value: 200,
  },
  {
    label: 'B',
    value: 150,
  },
];

const EXAMPLE_DIVERGING_STACKED_BAR_CHART = [
  { category: 'A', positive: 10, neutral: 5, negative: -5, positive_lower_ci: 8, positive_upper_ci: 12, negative_lower_ci: -6, negative_upper_ci: -4 },
  { category: 'B', positive: 15, neutral: 10, negative: -10, positive_lower_ci: 12, positive_upper_ci: 18, negative_lower_ci: -12, negative_upper_ci: -8 },
  { category: 'C', positive: 18, neutral: 8, negative: -3, positive_lower_ci: 14, positive_upper_ci: 22, negative_lower_ci: -4.5, negative_upper_ci: -1.5 },
  { category: 'D', positive: 20, neutral: 12, negative: -15, positive_lower_ci: 15, positive_upper_ci: 25, negative_lower_ci: -18, negative_upper_ci: -12 },
  { category: 'E', positive: 25, neutral: 15, negative: -7, positive_lower_ci: 22.5, positive_upper_ci: 27.5, negative_lower_ci: -8.2, negative_upper_ci: -5.8 },
  { category: 'F', positive: 30, neutral: 18, negative: -12, positive_lower_ci: 27, positive_upper_ci: 33, negative_lower_ci: -14, negative_upper_ci: -10 },
  { category: 'G', positive: 28, neutral: 20, negative: -10, positive_lower_ci: 24, positive_upper_ci: 32, negative_lower_ci: -12.5, negative_upper_ci: -7.5 },
  { category: 'H', positive: 35, neutral: 22, negative: -5, positive_lower_ci: 30, positive_upper_ci: 40, negative_lower_ci: -7, negative_upper_ci: -3 },
  { category: 'I', positive: 40, neutral: 25, negative: -20, positive_lower_ci: 34, positive_upper_ci: 42, negative_lower_ci: -23, negative_upper_ci: -17 },
  { category: 'J', positive: 45, neutral: 30, negative: -25, positive_lower_ci: 38, positive_upper_ci: 48, negative_lower_ci: -28.5, negative_upper_ci: -21.5 },
  { category: 'K', positive: 22, neutral: 16, negative: -18, positive_lower_ci: 18.5, positive_upper_ci: 25.5, negative_lower_ci: -20, negative_upper_ci: -16 },
  { category: 'L', positive: 50, neutral: 35, negative: -30, positive_lower_ci: 42, positive_upper_ci: 54, negative_lower_ci: -34, negative_upper_ci: -26 },
  { category: 'M', positive: 55, neutral: 40, negative: -35, positive_lower_ci: 46, positive_upper_ci: 60, negative_lower_ci: -39.5, negative_upper_ci: -30.5 },
  { category: 'N', positive: 60, neutral: 45, negative: -40, positive_lower_ci: 50, positive_upper_ci: 62, negative_lower_ci: -45, negative_upper_ci: -35 },
  { category: 'O', positive: 65, neutral: 50, negative: -45, positive_lower_ci: 54, positive_upper_ci: 72, negative_lower_ci: -50.5, negative_upper_ci: -39.5 },
  { category: 'P', positive: 70, neutral: 55, negative: -50, positive_lower_ci: 58, positive_upper_ci: 75, negative_lower_ci: -56, negative_upper_ci: -44 },
  { category: 'Q', positive: 75, neutral: 60, negative: -55, positive_lower_ci: 62, positive_upper_ci: 78, negative_lower_ci: -61.5, negative_upper_ci: -48.5 },
  { category: 'R', positive: 80, neutral: 65, negative: -60, positive_lower_ci: 66, positive_upper_ci: 82, negative_lower_ci: -67, negative_upper_ci: -53 },
];

const EXAMPLE_LEGEND_ITEMS_DATA = [
  { color: 'var(--color-success)', label: 'A' },
  { color: 'var(--color-subdued-success)', label: 'B' },
];

const EXAMPLE_DIVERGING_STACKED_BAR_CHART_LABELS = [
  { color: 'var(--color-subdued-error)', label: 'Negative' },
  { color: 'var(--color-light-gray)', label: 'Neutral' },
  { color: 'var(--color-success)', label: 'Positive' },
];

function ExampleSystemDataVisualizationBar(props) {
  const chartContainerStyles = { padding: `0px 24px 16px 16px`, minHeight: 188 };

  const chart = {
    title: 'Monthly Sales Data',
    description: 'This bar chart represents the monthly sales data for the year 2023.',
  };

  const chartVariantA = {
    title: 'Bar Chart - Variant A',
  };

  return (
    <Page
      title="nextjs-sass-starter: system: data visualization: bar"
      description="A lightweight website template to test our design system. You can view this template on GitHub and see how we write websites."
      url="https://wireframes.internet.dev/examples/system/data-visualization/bar"
    >
      <Navigation />
      <TwoColumnLayoutFull sidebarStyle={{ width: '240px', flexShrink: 0 }} sidebar={<DemoSystemDataVisualizationSidebar active="bar" data={VISUALIZATION_OPTIONS} />}>
        <H2 style={{ marginTop: 64, padding: '0 24px 0 22px' }}>Bar</H2>
        <P style={{ marginTop: `1rem`, padding: '0 24px 0 24px', maxWidth: 768 }}>
          Bar charts are a type of graph that are used to display and compare the number, frequency, or other measure (e.g., mean) for different discrete categories of data. In the
          vertical version of a bar chart, the categories are displayed on the vertical axis and the values on the horizontal axis.
        </P>
        <Title style={{ marginTop: `49px`, padding: '24px 24px 0 24px', borderTop: `1px solid var(--color-border)` }}>{chart.title}</Title>
        <Text style={{ marginTop: `8px`, padding: '0 24px 0 24px' }}>{chart.description}</Text>
        <div style={chartContainerStyles}>
          <HorizontalBarChart data={EXAMPLE_DUMMY_DATA} style={{ marginTop: 32 }} legend={EXAMPLE_LEGEND_ITEMS_DATA} />
        </div>
        <Text style={{ marginTop: `8px`, padding: '0 24px 0 24px' }}>{chartVariantA.title}</Text>

        <div style={chartContainerStyles}>
          <DivergingStackedBarChart data={EXAMPLE_DIVERGING_STACKED_BAR_CHART} style={{ marginTop: 32 }} legend={EXAMPLE_DIVERGING_STACKED_BAR_CHART_LABELS} />
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

export default ExampleSystemDataVisualizationBar;
