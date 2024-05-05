import * as React from 'react';
import * as Utilities from '@common/utilities';

import ChartLegend from '@system/graphs/ChartLegend';
import CohortChart from '@system/graphs/CohortChart';
import DemoSystemDataVisualizationSidebar, { VISUALIZATION_OPTIONS } from '@demos/DemoSystemDataVisualizationSidebar';
import GlobalModalManager from '@system/modals/GlobalModalManager';
import Navigation from '@system/Navigation';
import Page from '@components/Page';
import TwoColumnLayoutFull from '@system/layouts/TwoColumnLayoutFull';

import { H2, P, Title, Text, SubText } from '@system/typography';

const EXAMPLE_DUMMY_DATA = [
  { group: 'A', variable: 'v1', value: 80 },
  { group: 'A', variable: 'v2', value: 45 },
  { group: 'A', variable: 'v3', value: 60 },
  { group: 'A', variable: 'v4', value: 100 },
  { group: 'B', variable: 'v2', value: 0 },
  { group: 'B', variable: 'v3', value: 20 },
  { group: 'B', variable: 'v4', value: 60 },
  { group: 'C', variable: 'v3', value: 30 },
  { group: 'C', variable: 'v4', value: 35 },
  { group: 'D', variable: 'v4', value: 35 },
];

const EXAMPLE_LEGEND_DATA = [`var(--theme-graph-positive)`, `var(--theme-graph-negative)`];

function ExampleSystemDataVisualizationCohortChart(props) {
  // TODO(jimmylee)
  // Refactor these.
  const chartContainerStyles = { padding: `0 24px 48px 24px` };
  const infoStyles = { padding: '32px 24px 24px 24px', borderTop: `1px solid var(--theme-border)` };
  const pageStyles = { padding: `64px 24px 48px 22px` };
  const paragraphStyle = { marginTop: `1rem`, paddingRight: '2px', maxWidth: 768 };

  return (
    <Page
      title="wireframes.internet.dev ➝ system ➝ data visualization ➝ cohort"
      description="A lightweight website template to test our design system. You can view this template on GitHub and see how we write websites."
      url="https://wireframes.internet.dev/examples/system/data-visualization/cohort"
    >
      <Navigation />
      <TwoColumnLayoutFull sidebarStyle={{ width: '240px', flexShrink: 0 }} sidebar={<DemoSystemDataVisualizationSidebar active="cohort" data={VISUALIZATION_OPTIONS} />}>
        <div style={pageStyles}>
          <H2>Cohort</H2>
          <P style={paragraphStyle}>
            Cohort chart visualization is a method of graphically representing numerical data where the value of each data point is indicated using colors. It can help visualize
            data distribution across different groups and variables.
          </P>
        </div>

        <div style={infoStyles}>
          <Title>Example</Title>
          <Text style={{ marginTop: `12px` }}>This is an example of a React & D3 cohort component that you can use.</Text>
        </div>

        <div style={chartContainerStyles}>
          <CohortChart data={EXAMPLE_DUMMY_DATA} />
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

export default ExampleSystemDataVisualizationCohortChart;
