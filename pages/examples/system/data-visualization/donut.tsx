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
  const pageStyles = { padding: `64px 24px 55px 22px` };
  const paragraphStyle = { marginTop: `1rem`, paddingRight: '2px', maxWidth: 768 };

  return (
    <Page
      title="wireframes.internet.dev ➝ system ➝ data visualization ➝ donut"
      description="A lightweight website template to test our design system. You can view this template on GitHub and see how we write websites."
      url="https://wireframes.internet.dev/examples/system/data-visualization/donut"
    >
      <Navigation />
      <TwoColumnLayoutFull sidebarStyle={{ width: '240px', flexShrink: 0 }} sidebar={<DemoSystemDataVisualizationSidebar active="donut [wip]" data={VISUALIZATION_OPTIONS} />}>
        <div style={pageStyles}>
          <H2>Donut</H2>
          <P style={paragraphStyle}>
            Donut charts are best when you need to show how parts fit into a whole. They work well for a few categories but get cluttered if you add too many. They're not great for
            detailed comparisons but do well to display broad data trends, like a quick glimpse of market share. The center of a donut chart can be used to highlight key
            information, making it not only functional but also visually appealing. They're best when simplicity and aesthetics need to meet.
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
