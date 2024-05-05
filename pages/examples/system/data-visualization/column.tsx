import * as React from 'react';
import * as Utilities from '@common/utilities';

import BarGraphWithLines from '@system/graphs/BarGraphWithLines';
import ChartLegend from '@system/graphs/ChartLegend';
import ColumnChart from '@system/graphs/ColumnChart';
import DemoSystemDataVisualizationSidebar, { VISUALIZATION_OPTIONS } from '@demos/DemoSystemDataVisualizationSidebar';
import GlobalModalManager from '@system/modals/GlobalModalManager';
import Navigation from '@system/Navigation';
import Page from '@components/Page';
import TwoColumnLayoutFull from '@system/layouts/TwoColumnLayoutFull';

import { H2, P, Title, Text, SubText } from '@system/typography';

const EXAMPLE_DUMMY_DATA = [
  { category: 'A', positive: 10, neutral: 5, negative: -5, positive_lower_ci: 8, positive_upper_ci: 12, negative_lower_ci: -6, negative_upper_ci: -4 },
  { category: 'B', positive: 15, neutral: 10, negative: -10, positive_lower_ci: 12, positive_upper_ci: 18, negative_lower_ci: -12, negative_upper_ci: -8 },
  { category: 'C', positive: 18, neutral: 8, negative: -3, positive_lower_ci: 14, positive_upper_ci: 22, negative_lower_ci: -4.5, negative_upper_ci: -1.5 },
  { category: 'D', positive: 20, neutral: 12, negative: -15, positive_lower_ci: 15, positive_upper_ci: 25, negative_lower_ci: -18, negative_upper_ci: -12 },
  { category: 'E', positive: 25, neutral: 15, negative: -7, positive_lower_ci: 22.5, positive_upper_ci: 27.5, negative_lower_ci: -8.2, negative_upper_ci: -5.8 },
  { category: 'F', positive: 30, neutral: 18, negative: -12, positive_lower_ci: 27, positive_upper_ci: 33, negative_lower_ci: -14, negative_upper_ci: -10 },
  { category: 'G', positive: 28, neutral: 20, negative: -10, positive_lower_ci: 24, positive_upper_ci: 32, negative_lower_ci: -12.5, negative_upper_ci: -7.5 },
  { category: 'H', positive: 35, neutral: 22, negative: -5, positive_lower_ci: 30, positive_upper_ci: 40, negative_lower_ci: -7, negative_upper_ci: -3 },
  { category: 'I', positive: 40, neutral: 25, negative: -20, positive_lower_ci: 34, positive_upper_ci: 46, negative_lower_ci: -23, negative_upper_ci: -17 },
  { category: 'J', positive: 45, neutral: 30, negative: -25, positive_lower_ci: 38, positive_upper_ci: 52, negative_lower_ci: -28.5, negative_upper_ci: -21.5 },
  { category: 'K', positive: 22, neutral: 16, negative: -18, positive_lower_ci: 18.5, positive_upper_ci: 25.5, negative_lower_ci: -20, negative_upper_ci: -16 },
  { category: 'L', positive: 50, neutral: 35, negative: -30, positive_lower_ci: 42, positive_upper_ci: 58, negative_lower_ci: -34, negative_upper_ci: -26 },
];

const EXAMPLE_LEGEND_DATA = [`var(--theme-graph-positive)`, `var(--theme-graph-negative)`];

const EXAMPLE_BAR_GRAPH_WITH_LINES_DATA = [
  {
    year: '2005',
    years: [
      { name: 'electronics', value: 120, color: 'var(--theme-graph-positive)' },
      { name: 'clothing', value: 150, color: 'var(--theme-success)' },
      { name: 'accessories', value: 30, color: 'var(--theme-primary)' },
    ],
  },
  {
    year: '2006',
    years: [
      { name: 'electronics', value: 115, color: 'var(--theme-graph-positive)' },
      { name: 'clothing', value: 165, color: 'var(--theme-success)' },
      { name: 'accessories', value: 45, color: 'var(--theme-primary)' },
    ],
  },
  {
    year: '2007',
    years: [
      { name: 'electronics', value: 130, color: 'var(--theme-graph-positive)' },
      { name: 'clothing', value: 175, color: 'var(--theme-success)' },
      { name: 'accessories', value: 55, color: 'var(--theme-primary)' },
    ],
  },
  {
    year: '2008',
    years: [
      { name: 'electronics', value: 125, color: 'var(--theme-graph-positive)' },
      { name: 'clothing', value: 190, color: 'var(--theme-success)' },
      { name: 'accessories', value: 60, color: 'var(--theme-primary)' },
    ],
  },
  {
    year: '2009',
    years: [
      { name: 'electronics', value: 140, color: 'var(--theme-graph-positive)' },
      { name: 'clothing', value: 185, color: 'var(--theme-success)' },
      { name: 'accessories', value: 65, color: 'var(--theme-primary)' },
    ],
  },
  {
    year: '2010',
    years: [
      { name: 'electronics', value: 150, color: 'var(--theme-graph-positive)' },
      { name: 'clothing', value: 210, color: 'var(--theme-success)' },
      { name: 'accessories', value: 70, color: 'var(--theme-primary)' },
    ],
  },
  {
    year: '2011',
    years: [
      { name: 'electronics', value: 155, color: 'var(--theme-graph-positive)' },
      { name: 'clothing', value: 220, color: 'var(--theme-success)' },
      { name: 'accessories', value: 75, color: 'var(--theme-primary)' },
    ],
  },
  {
    year: '2012',
    years: [
      { name: 'electronics', value: 160, color: 'var(--theme-graph-positive)' },
      { name: 'clothing', value: 230, color: 'var(--theme-success)' },
      { name: 'accessories', value: 85, color: 'var(--theme-primary)' },
    ],
  },
  {
    year: '2013',
    years: [
      { name: 'electronics', value: 165, color: 'var(--theme-graph-positive)' },
      { name: 'clothing', value: 240, color: 'var(--theme-success)' },
      { name: 'accessories', value: 90, color: 'var(--theme-primary)' },
    ],
  },
  {
    year: '2014',
    years: [
      { name: 'electronics', value: 170, color: 'var(--theme-graph-positive)' },
      { name: 'clothing', value: 250, color: 'var(--theme-success)' },
      { name: 'accessories', value: 95, color: 'var(--theme-primary)' },
    ],
  },
  {
    year: '2015',
    years: [
      { name: 'electronics', value: 180, color: 'var(--theme-graph-positive)' },
      { name: 'clothing', value: 260, color: 'var(--theme-success)' },
      { name: 'accessories', value: 100, color: 'var(--theme-primary)' },
    ],
  },
];

const EXAMPLE_BAR_GRAPH_WITH_LINES_DATA_LEGEND = [`var(--theme-graph-positive)`, `var(--theme-success)`, `var(--theme-primary)`];

function ExampleSystemDataVisualizationColumn(props) {
  // TODO(jimmylee)
  // Refactor these.
  const chartContainerStyles = { padding: `0 24px 48px 16px` };
  const infoStyles = { padding: '32px 24px 24px 24px', borderTop: `1px solid var(--theme-border)` };
  const paragraphStyles = { marginTop: `1rem`, paddingRight: '2px', maxWidth: 768 };
  const pageStyles = { padding: `64px 24px 48px 22px` };

  return (
    <Page
      title="wireframes.internet.dev ➝ system ➝ data visualization ➝ column"
      description="A lightweight website template to test our design system with a column chart example. You can view this template on GitHub and see how we write websites."
      url="https://wireframes.internet.dev/examples/system/data-visualization/column"
    >
      <Navigation />
      <TwoColumnLayoutFull sidebarStyle={{ width: '240px', flexShrink: 0 }} sidebar={<DemoSystemDataVisualizationSidebar active="column" data={VISUALIZATION_OPTIONS} />}>
        <div style={pageStyles}>
          <H2>Column</H2>
          <P style={paragraphStyles}>
            Column charts are used to show data changes over a period of time or illustrate comparisons among items. In column charts, categories are typically organized along the
            horizontal axis and values along the vertical axis.
          </P>
        </div>
        <div style={infoStyles}>
          <Title>Example</Title>
          <Text style={{ marginTop: `12px` }}>This is an example of a React & D3 column chart component that you can use.</Text>
        </div>
        <div style={chartContainerStyles}>
          <ColumnChart data={EXAMPLE_DUMMY_DATA} />
          <ChartLegend data={EXAMPLE_LEGEND_DATA} />
        </div>

        <div style={infoStyles}>
          <Title>Example B</Title>
          <Text style={{ marginTop: `12px` }}>This is an example of a React & D3 circle and line bar chart component that you can use.</Text>
        </div>
        <div style={chartContainerStyles}>
          <BarGraphWithLines data={EXAMPLE_BAR_GRAPH_WITH_LINES_DATA} />
          <ChartLegend data={EXAMPLE_BAR_GRAPH_WITH_LINES_DATA_LEGEND} />
        </div>
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

export default ExampleSystemDataVisualizationColumn;
