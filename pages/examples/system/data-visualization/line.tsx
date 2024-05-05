import * as React from 'react';
import * as Utilities from '@common/utilities';

import ChartLegend from '@system/graphs/ChartLegend';
import DemoSystemDataVisualizationSidebar, { VISUALIZATION_OPTIONS } from '@demos/DemoSystemDataVisualizationSidebar';
import GlobalModalManager from '@system/modals/GlobalModalManager';
import LineChart from '@root/system/graphs/LineChart';
import Navigation from '@system/Navigation';
import Page from '@components/Page';
import TwoColumnLayoutFull from '@system/layouts/TwoColumnLayoutFull';

import { H2, P, Title, Text, SubText } from '@system/typography';

const EXAMPLE_LEGEND_DATA = [`var(--theme-graph-positive)`];
const EXAMPLE_LEGEND_DATA_WITH_AREA = [`var(--theme-graph-positive)`, `var(--theme-border)`];

const EXAMPLE_DUMMY_DATA = [
  { value: 70, date: '2023-4-1', lower_ci: 63, upper_ci: 77 },
  { value: 100, date: '2023-5-1', lower_ci: 90, upper_ci: 110 },
  { value: 135, date: '2023-6-1', lower_ci: 121.5, upper_ci: 148.5 },
  { value: 145, date: '2023-7-1', lower_ci: 130.5, upper_ci: 159.5 },
  { value: 135, date: '2023-8-1', lower_ci: 121.5, upper_ci: 148.5 },
  { value: 100, date: '2023-9-1', lower_ci: 90, upper_ci: 110 },
  { value: 70, date: '2023-10-1', lower_ci: 63, upper_ci: 77 },
];

function ExampleSystemDataVisualizationLine(props) {
  // TODO(jimmylee)
  // Refactor these.
  const chartContainerStyles = { padding: `0 24px 48px 16px` };
  const infoStyles = { padding: '32px 24px 24px 24px', borderTop: `1px solid var(--theme-border)` };
  const paragraphStyles = { marginTop: `1rem`, paddingRight: '2px', maxWidth: 768 };
  const pageStyles = { padding: `64px 24px 51.5px 22px` };

  return (
    <Page
      title="wireframes.internet.dev ➝ system ➝ data visualization ➝ line"
      description="A lightweight website template to test our design system. You can view this template on GitHub and see how we write websites."
      url="https://wireframes.internet.dev/examples/system/data-visualization/line"
    >
      <Navigation />
      <TwoColumnLayoutFull sidebarStyle={{ width: '240px', flexShrink: 0 }} sidebar={<DemoSystemDataVisualizationSidebar active="line" data={VISUALIZATION_OPTIONS} />}>
        <div style={pageStyles}>
          <H2>Line</H2>
          <P style={paragraphStyles}>
            A line chart is used when you want to emphasize changes in values for one variable (plotted on the vertical axis) over continuous values of a second variable (plotted
            on the horizontal axis). This emphasis on patterns of change is conveyed by line segments moving consistently from left to right, allowing the observer to easily
            identify the slopes of the lines moving up or down.
          </P>
        </div>

        <div style={infoStyles}>
          <Title>Example</Title>
          <Text style={{ marginTop: `12px` }}>This is an example of a React & D3 single line chart component that you can use.</Text>
        </div>

        <div style={chartContainerStyles}>
          <LineChart data={EXAMPLE_DUMMY_DATA} style={{ marginTop: 32 }} showErrorBars={false} showConfidenceIntervalFill={false} />
          <ChartLegend data={EXAMPLE_LEGEND_DATA} />
        </div>

        <div style={infoStyles}>
          <Title>Example B</Title>
          <Text style={{ marginTop: `12px` }}>This is an example of a React & D3 line chart component with upper and lower confidence intervals that you can use.</Text>
        </div>

        <div style={chartContainerStyles}>
          <LineChart data={EXAMPLE_DUMMY_DATA} style={{ marginTop: 32 }} showErrorBars={true} showConfidenceIntervalFill={false} />
          <ChartLegend data={EXAMPLE_LEGEND_DATA} />
        </div>

        <div style={infoStyles}>
          <Title>Example C</Title>
          <Text style={{ marginTop: `12px` }}>
            This is an example of a React & D3 line chart component with upper and lower confidence intervals and area highlighting that you can use.
          </Text>
        </div>

        <div style={chartContainerStyles}>
          <LineChart data={EXAMPLE_DUMMY_DATA} style={{ marginTop: 32 }} showErrorBars={true} showConfidenceIntervalFill={true} />
          <ChartLegend data={EXAMPLE_LEGEND_DATA_WITH_AREA} />
        </div>

        <div style={infoStyles}>
          <Title>Example</Title>
          <Text style={{ marginTop: `12px` }}>
            This is an example of a React & D3 line chart component with upper and lower confidence intervals and full area highlighting that you can use.
          </Text>
        </div>

        <div style={chartContainerStyles}>
          <LineChart data={EXAMPLE_DUMMY_DATA} style={{ marginTop: 32 }} showErrorBars={true} showConfidenceIntervalFill={true} showAreaFill={true} />
          <ChartLegend data={EXAMPLE_LEGEND_DATA_WITH_AREA} />
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

export default ExampleSystemDataVisualizationLine;
