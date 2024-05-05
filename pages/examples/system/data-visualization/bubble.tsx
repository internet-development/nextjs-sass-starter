import * as React from 'react';
import * as Utilities from '@common/utilities';

import BubbleChart from '@system/graphs/BubbleChart';
import ChartLegend from '@system/graphs/ChartLegend';
import DemoSystemDataVisualizationSidebar, { VISUALIZATION_OPTIONS } from '@demos/DemoSystemDataVisualizationSidebar';
import GlobalModalManager from '@system/modals/GlobalModalManager';
import GridLayout from '@system/layouts/GridLayout';
import GroupedBubblesChart from '@root/system/graphs/GroupedBubblesChart';
import Navigation from '@system/Navigation';
import Page from '@components/Page';
import TwoColumnLayoutFull from '@system/layouts/TwoColumnLayoutFull';

import { H2, P, Title, Text, SubText } from '@system/typography';

const EXAMPLE_DUMMY_DATA = [
  { x: 10, y: 20, value: 30, category: 'Category 1' },
  { x: 20, y: 30, value: 40, category: 'Category 2' },
  { x: 30, y: 40, value: 50, category: 'Category 3' },
  { x: 40, y: 50, value: 60, category: 'Category 4' },
  { x: 50, y: 60, value: 70, category: 'Category 5' },
];

const EXAMPLE_GROUPED_BUBBLES_CHART = [
  { name: 'High significance', count: 60, color: 'var(--theme-graph-positive)' },
  { name: 'Netural significance', count: 30, color: 'var(--theme-graph-netural)' },
  { name: 'Low Significance', count: 10, color: 'var(--theme-graph-negative)' },
];

function ExampleSystemDataVisualizationBubble(props) {
  // TODO(jimmylee)
  // Refactor these.
  const chartContainerStyles = { padding: `0 24px 48px 16px` };
  const infoStyles = { padding: '32px 24px 24px 24px', borderTop: `1px solid var(--theme-border)` };
  const pageStyles = { padding: `64px 24px 48px 22px` };
  const paragraphStyle = { marginTop: `1rem`, paddingRight: '2px', maxWidth: 768 };

  return (
    <Page
      title="wireframes.internet.dev ➝ system ➝ data visualization ➝ bubble"
      description="A lightweight website template to test our design system with a bubble chart example. You can view this template on GitHub and see how we write websites."
      url="https://wireframes.internet.dev/examples/system/data-visualization/bubble"
    >
      <Navigation />
      <TwoColumnLayoutFull sidebarStyle={{ width: '240px', flexShrink: 0 }} sidebar={<DemoSystemDataVisualizationSidebar active="bubble" data={VISUALIZATION_OPTIONS} />}>
        <div style={pageStyles}>
          <H2>Bubble</H2>
          <P style={paragraphStyle}>
            Bubble charts are used to display three dimensions of data on a chart. The position of the bubble on the horizontal and vertical axes indicates the values of two data
            points, and the size of the bubble represents a third.
          </P>
        </div>

        <div style={infoStyles}>
          <Title>Example</Title>
          <Text style={{ marginTop: `12px` }}>This is an example of a React & D3 bubble chart component that you can use.</Text>
        </div>
        <div style={chartContainerStyles}>
          <BubbleChart data={EXAMPLE_DUMMY_DATA} />
          <ChartLegend data={[`var(--theme-graph-positive)`]} />
        </div>

        <div style={infoStyles}>
          <Title>Example B</Title>
          <Text style={{ marginTop: `12px` }}>This is an example of a React & D3 grouped bubbles chart component that you can use.</Text>
        </div>
        <div style={chartContainerStyles}>
          <GroupedBubblesChart data={EXAMPLE_GROUPED_BUBBLES_CHART} />
          <ChartLegend data={[`var(--theme-graph-positive)`, `var(--theme-graph-negative)`]} />
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

export default ExampleSystemDataVisualizationBubble;
