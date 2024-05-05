import * as React from 'react';
import * as Utilities from '@common/utilities';

import ChartLegend from '@system/graphs/ChartLegend';
import DemoSystemDataVisualizationSidebar, { VISUALIZATION_OPTIONS } from '@demos/DemoSystemDataVisualizationSidebar';
import GlobalModalManager from '@system/modals/GlobalModalManager';
import GridLayout from '@system/layouts/GridLayout';
import HistogramChart from '@system/graphs/HistogramChart';
import Navigation from '@system/Navigation';
import Page from '@components/Page';
import TwoColumnLayoutFull from '@system/layouts/TwoColumnLayoutFull';

import { H2, P, Title, Text, SubText } from '@system/typography';

const EXAMPLE_DUMMY_DATA = [
  {
    label: 'January',
    value: 50,
    lower_ci: 45,
    upper_ci: 55,
  },
  {
    label: 'February',
    value: 80,
    lower_ci: 75,
    upper_ci: 85,
  },
  {
    label: 'March',
    value: 45,
    lower_ci: 40,
    upper_ci: 50,
  },
  {
    label: 'April',
    value: 30,
    lower_ci: 25,
    upper_ci: 35,
  },
  {
    label: 'May',
    value: 50,
    lower_ci: 45,
    upper_ci: 55,
  },
  {
    label: 'June',
    value: 75,
    lower_ci: 70,
    upper_ci: 80,
  },
  {
    label: 'July',
    value: 60,
    lower_ci: 55,
    upper_ci: 65,
  },
  {
    label: 'August',
    value: 90,
    lower_ci: 85,
    upper_ci: 95,
  },
  {
    label: 'September',
    value: 80,
    lower_ci: 75,
    upper_ci: 85,
  },
  {
    label: 'October',
    value: 50,
    lower_ci: 45,
    upper_ci: 55,
  },
  {
    label: 'November',
    value: 65,
    lower_ci: 60,
    upper_ci: 70,
  },
  {
    label: 'December',
    value: 40,
    lower_ci: 35,
    upper_ci: 45,
  },
];

const EXAMPLE_LEGEND_DATA = [`var(--theme-graph-positive)`];

function ExampleSystemDataVisualizationHistogram(props) {
  // TODO(jimmylee)
  // Refactor these.
  const chartContainerStyles = { padding: `0 24px 48px 16px` };
  const infoStyles = { padding: '32px 24px 24px 24px', borderTop: `1px solid var(--theme-border)` };
  const paragraphStyles = { marginTop: `1rem`, paddingRight: '2px', maxWidth: 768 };
  const pageStyles = { padding: `64px 24px 55px 22px` };

  return (
    <Page
      title="wireframes.internet.dev ➝ system ➝ data visualization ➝ histogram"
      description="A lightweight website template to test our design system. You can view this template on GitHub and see how we write websites."
      url="https://wireframes.internet.dev/examples/system/data-visualization/histogram"
    >
      <Navigation />
      <TwoColumnLayoutFull sidebarStyle={{ width: '240px', flexShrink: 0 }} sidebar={<DemoSystemDataVisualizationSidebar active="histogram" data={VISUALIZATION_OPTIONS} />}>
        <div style={pageStyles}>
          <H2>Histogram</H2>
          <P style={paragraphStyles}>
            Histograms excel in showing the distribution of data across different intervals, revealing underlying patterns like normal distribution or skewness. They are
            particularly effective when you need to visualize the frequency of data points within certain ranges and are useful for highlighting outliers, gaps, or clusters. This
            makes them invaluable for statistical analysis, helping to understand the spread and central tendencies within sets of data.
          </P>
        </div>

        <div style={infoStyles}>
          <Title>Example</Title>
          <Text style={{ marginTop: `12px` }}>This is an example of a React & D3 histogram component that you can use.</Text>
        </div>

        <div style={chartContainerStyles}>
          <HistogramChart data={EXAMPLE_DUMMY_DATA} />
          <ChartLegend data={EXAMPLE_LEGEND_DATA} />
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

export default ExampleSystemDataVisualizationHistogram;
