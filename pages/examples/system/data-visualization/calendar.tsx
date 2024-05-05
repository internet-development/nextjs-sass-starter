import * as React from 'react';
import * as Utilities from '@common/utilities';

import ChartLegend from '@system/graphs/ChartLegend';
import ChartPlaceholder from '@system/graphs/ChartPlaceholder';
import DemoSystemDataVisualizationSidebar, { VISUALIZATION_OPTIONS } from '@demos/DemoSystemDataVisualizationSidebar';
import GlobalModalManager from '@system/modals/GlobalModalManager';
import Navigation from '@system/Navigation';
import Page from '@components/Page';
import TwoColumnLayoutFull from '@system/layouts/TwoColumnLayoutFull';

import { H2, P, Title, Text, SubText } from '@system/typography';

const EXAMPLE_LEGEND_DATA = [`var(--theme-graph-positive)`, `var(--theme-graph-negative)`];

function ExampleSystemDataVisualizationCalendar(props) {
  // TODO(jimmylee)
  // Refactor these.
  const chartContainerStyles = { padding: `0 24px 48px 16px` };
  const infoStyles = { padding: '32px 24px 24px 24px', borderTop: `1px solid var(--theme-border)` };
  const pageStyles = { padding: `64px 24px 48px 22px` };
  const paragraphStyle = { marginTop: `1rem`, paddingRight: '2px', maxWidth: 768 };

  return (
    <Page
      title="wireframes.internet.dev ➝ system ➝ data visualization ➝ calendar"
      description="A lightweight website template to test our design system with a calendar visualization example. You can view this template on GitHub and see how we write websites."
      url="https://wireframes.internet.dev/examples/system/data-visualization/calendar"
    >
      <Navigation />
      <TwoColumnLayoutFull sidebarStyle={{ width: '240px', flexShrink: 0 }} sidebar={<DemoSystemDataVisualizationSidebar active="calendar [wip]" data={VISUALIZATION_OPTIONS} />}>
        <div style={pageStyles}>
          <H2>Calendar</H2>
          <P style={paragraphStyle}>
            Calendar visualizations are a powerful way to display time series data. They can help to identify trends, patterns, and anomalies over a period.
          </P>
        </div>

        <div style={infoStyles}>
          <Title>Example</Title>
          <Text style={{ marginTop: `12px` }}>This is an example of a React & D3 calendar chart component that you can use.</Text>
        </div>

        <div style={chartContainerStyles}>
          <ChartPlaceholder>WIP</ChartPlaceholder>
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

export default ExampleSystemDataVisualizationCalendar;
