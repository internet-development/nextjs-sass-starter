import * as React from 'react';
import * as Utilities from '@common/utilities';

import ChartLegend from '@system/graphs/ChartLegend';
import DemoSystemDataVisualizationSidebar, { VISUALIZATION_OPTIONS } from '@demos/DemoSystemDataVisualizationSidebar';
import DistributionChart from '@system/graphs/DistributionChart';
import GlobalModalManager from '@system/modals/GlobalModalManager';
import Navigation from '@system/Navigation';
import Page from '@components/Page';
import TwoColumnLayoutFull from '@system/layouts/TwoColumnLayoutFull';

import { H2, P, Title, Text, SubText } from '@system/typography';

const EXAMPLE_DUMMY_DATA = [
  {
    label: 'Group A',
    value: 30,
  },
  {
    label: 'Group B',
    value: 70,
  },
  {
    label: 'Group C',
    value: 50,
  },
  {
    label: 'Group D',
    value: 100,
  },
  {
    label: 'Group E',
    value: 65,
  },
];

const EXAMPLE_LEGEND_DATA = [`var(--theme-graph-positive)`];

function ExampleSystemDataVisualizationDistribution(props) {
  // TODO(jimmylee)
  // Refactor these.
  const chartContainerStyles = { padding: `0 24px 48px 16px` };
  const infoStyles = { padding: '32px 24px 24px 24px', borderTop: `1px solid var(--theme-border)` };
  const pageStyles = { padding: `64px 24px 48px 22px` };
  const paragraphStyle = { marginTop: `1rem`, paddingRight: '2px', maxWidth: 768 };

  return (
    <Page
      title="wireframes.internet.dev ➝ system ➝ data visualization ➝ distribution"
      description="A lightweight website template to test our design system with a distribution chart example. You can view this template on GitHub and see how we write websites."
      url="https://wireframes.internet.dev/examples/system/data-visualization/distribution"
    >
      <Navigation />
      <TwoColumnLayoutFull sidebarStyle={{ width: '240px', flexShrink: 0 }} sidebar={<DemoSystemDataVisualizationSidebar active="distribution" data={VISUALIZATION_OPTIONS} />}>
        <div style={pageStyles}>
          <H2>Distribution</H2>
          <P style={paragraphStyle}>
            Distribution charts are used to show the variation of data over a period, or to compare multiple data sets. They are particularly useful for identifying patterns,
            outliers, and the distribution of data points across different categories.
          </P>
        </div>

        <div style={infoStyles}>
          <Title>Example</Title>
          <Text style={{ marginTop: `12px` }}>This is an example of a React & D3 distribution chart component that you can use.</Text>
        </div>

        <div style={chartContainerStyles}>
          <DistributionChart data={EXAMPLE_DUMMY_DATA} style={{ marginTop: 32 }} />
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

export default ExampleSystemDataVisualizationDistribution;
