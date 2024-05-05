import * as React from 'react';
import * as Utilities from '@common/utilities';

import DemoSystemDataVisualizationSidebar, { VISUALIZATION_OPTIONS } from '@demos/DemoSystemDataVisualizationSidebar';
import AreaChart from '@system/graphs/AreaChart';
import ChartLegend from '@system/graphs/ChartLegend';
import GlobalModalManager from '@system/modals/GlobalModalManager';
import GridLayout from '@system/layouts/GridLayout';
import Navigation from '@system/Navigation';
import Page from '@components/Page';
import TwoColumnLayoutFull from '@system/layouts/TwoColumnLayoutFull';

import { H2, P, Title, Text, SubText } from '@system/typography';

const EXAMPLE_DUMMY_DATA = [
  {
    value: 20,
    date: '2023-1-1',
  },
  {
    value: 30,
    date: '2023-2-1',
  },
  {
    value: 45,
    date: '2023-3-1',
  },
  {
    value: 70,
    date: '2023-4-1',
  },
  {
    value: 100,
    date: '2023-5-1',
  },
  {
    value: 135,
    date: '2023-6-1',
  },
  {
    value: 145,
    date: '2023-7-1',
  },
  {
    value: 135,
    date: '2023-8-1',
  },
  {
    value: 100,
    date: '2023-9-1',
  },
  {
    value: 70,
    date: '2023-10-1',
  },
  {
    value: 45,
    date: '2023-11-1',
  },
  {
    value: 30,
    date: '2023-12-1',
  },
];

const EXAMPLE_LEGEND_DATA = [`var(--theme-graph-positive)`];

function ExampleSystemDataVisualizationArea(props) {
  // TODO(jimmylee)
  // Refactor these.
  const chartContainerStyles = { padding: `0 24px 48px 16px` };
  const infoStyles = { padding: '28px 24px 24px 24px', borderTop: `1px solid var(--theme-border)` };
  const paragraphStyles = { marginTop: `1rem`, paddingRight: '2px', maxWidth: 768 };
  const pageStyles = { padding: `64px 24px 51.5px 22px` };

  return (
    <Page
      title="wireframes.internet.dev ➝ system ➝ data visualization ➝ area"
      description="A lightweight website template to test our design system. You can view this template on GitHub and see how we write websites."
      url="https://wireframes.internet.dev/examples/system/data-visualization/area"
    >
      <Navigation />
      <TwoColumnLayoutFull sidebarStyle={{ width: '240px', flexShrink: 0 }} sidebar={<DemoSystemDataVisualizationSidebar active="area" data={VISUALIZATION_OPTIONS} />}>
        <div style={pageStyles}>
          <H2>Area</H2>
          <P style={paragraphStyles}>
            An area chart or area graph combines the line graph and the bar chart to show how one or more groups' numeric values change over the progression of a second variable,
            typically that of time. Area charts are used to represent cumulated totals using numbers or percentages over time. Use area charts to compare multiple quantities while
            also displaying the relationship each part has to the whole.
          </P>
        </div>
        <div style={infoStyles}>
          <Title>Example</Title>
          <Text style={{ marginTop: `12px` }}>This is an example of a React & D3 area chart component that you can use.</Text>
        </div>
        <div style={chartContainerStyles}>
          <AreaChart data={EXAMPLE_DUMMY_DATA} style={{ marginTop: 32 }} />
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

export default ExampleSystemDataVisualizationArea;
