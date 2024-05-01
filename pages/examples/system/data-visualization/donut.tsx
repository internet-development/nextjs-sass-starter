import * as React from 'react';
import * as Utilities from '@common/utilities';

import ChartPlaceholder from '@system/graphs/ChartPlaceholder';
import DemoSystemDataVisualizationSidebar, { VISUALIZATION_OPTIONS } from '@demos/DemoSystemDataVisualizationSidebar';
import DonutChart from '@system/graphs/DonutChart';
import GlobalModalManager from '@system/modals/GlobalModalManager';
import Navigation from '@system/Navigation';
import Page from '@components/Page';
import TwoColumnLayoutFull from '@system/layouts/TwoColumnLayoutFull';

import { H2, P, Title, Text, SubText } from '@system/typography';

function ExampleSystemDataVisualizationDonut(props) {
  // TODO(jimmylee)
  // Refactor these.
  const chartContainerStyles = { padding: `0 24px 48px 16px` };
  const infoStyles = { padding: '32px 24px 24px 24px', borderTop: `1px solid var(--theme-border)` };
  const pageStyles = { padding: `64px 24px 48px 22px` };
  const paragraphStyle = { marginTop: `1rem`, paddingRight: '2px', maxWidth: 768 };

  return (
    <Page
      title="nextjs-sass-starter: system: data visualization: donut"
      description="A lightweight website template to test our design system. You can view this template on GitHub and see how we write websites."
      url="https://wireframes.internet.dev/examples/system/data-visualization/donut"
    >
      <Navigation />
      <TwoColumnLayoutFull sidebarStyle={{ width: '240px', flexShrink: 0 }} sidebar={<DemoSystemDataVisualizationSidebar active="donut" data={VISUALIZATION_OPTIONS} />}>
        <div style={pageStyles}>
          <H2>Donut</H2>
          <P style={paragraphStyle}>
            This example demonstrates how to integrate a D3.js Donut Chart into a React component. The chart visualizes data distribution across different categories.
          </P>
        </div>

        <div style={infoStyles}>
          <Title>Example</Title>
          <Text style={{ marginTop: `12px` }}>This is an example of a React & D3 donut chart component that you can use.</Text>
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

export default ExampleSystemDataVisualizationDonut;
