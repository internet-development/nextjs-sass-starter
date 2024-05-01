import * as React from 'react';
import * as Utilities from '@common/utilities';

import DemoSystemDataVisualizationSidebar, { VISUALIZATION_OPTIONS } from '@demos/DemoSystemDataVisualizationSidebar';
import GlobalModalManager from '@system/modals/GlobalModalManager';
import Navigation from '@system/Navigation';
import Page from '@components/Page';
import RadarChart from '@system/graphs/RadarChart';
import TwoColumnLayoutFull from '@system/layouts/TwoColumnLayoutFull';

import { H2, P, Title, Text, SubText } from '@system/typography';

const EXAMPLE_DUMMY_DATA = [
  [
    // iPhone
    { axis: 'Battery Life', value: 0.22 },
    { axis: 'Brand', value: 0.28 },
    { axis: 'Contract Cost', value: 0.29 },
    { axis: 'Design And Quality', value: 0.17 },
    { axis: 'Have Internet Connectivity', value: 0.22 },
    { axis: 'Large Screen', value: 0.02 },
    { axis: 'Price Of Device', value: 0.21 },
    { axis: 'To Be A Smartphone', value: 0.5 },
  ],
  [
    // Samsung
    { axis: 'Battery Life', value: 0.27 },
    { axis: 'Brand', value: 0.16 },
    { axis: 'Contract Cost', value: 0.35 },
    { axis: 'Design And Quality', value: 0.13 },
    { axis: 'Have Internet Connectivity', value: 0.2 },
    { axis: 'Large Screen', value: 0.13 },
    { axis: 'Price Of Device', value: 0.35 },
    { axis: 'To Be A Smartphone', value: 0.38 },
  ],
  [
    // Nokia Smartphone
    { axis: 'Battery Life', value: 0.26 },
    { axis: 'Brand', value: 0.1 },
    { axis: 'Contract Cost', value: 0.3 },
    { axis: 'Design And Quality', value: 0.14 },
    { axis: 'Have Internet Connectivity', value: 0.22 },
    { axis: 'Large Screen', value: 0.04 },
    { axis: 'Price Of Device', value: 0.41 },
    { axis: 'To Be A Smartphone', value: 0.3 },
  ],
];
function ExampleSystemDataVisualizationRadar(props) {
  const chartContainerStyles = { padding: `0px 24px 16px 16px`, minHeight: 188 };

  return (
    <Page
      title="nextjs-sass-starter: system: data visualization: radar"
      description="Explore the capabilities of radar charts in data visualization through this interactive example."
      url="https://wireframes.internet.dev/examples/system/data-visualization/radar"
    >
      <Navigation />
      <TwoColumnLayoutFull sidebarStyle={{ width: '240px', flexShrink: 0 }} sidebar={<DemoSystemDataVisualizationSidebar active="radar" data={VISUALIZATION_OPTIONS} />}>
        <H2 style={{ marginTop: 64, padding: '0 24px 0 22px' }}>Radar</H2>
        <P style={{ marginTop: `1rem`, padding: '0 24px 0 24px', maxWidth: 768 }}>
          Radar charts, also known as spider charts or web charts, offer a way to display multivariate data in the form of a two-dimensional chart of three or more quantitative
          variables represented on axes starting from the same point.
        </P>
        <Title style={{ marginTop: `49px`, padding: '24px 24px 0 24px', borderTop: `1px solid var(--theme-border)` }}>Radar</Title>
        <Text style={{ marginTop: `8px`, padding: '0 24px 0 24px' }}>Example radar chart</Text>
        <div style={chartContainerStyles}>
          <RadarChart data={EXAMPLE_DUMMY_DATA} style={{ marginTop: 24 }} />
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

export default ExampleSystemDataVisualizationRadar;
