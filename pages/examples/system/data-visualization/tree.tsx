import * as React from 'react';
import * as Utilities from '@common/utilities';

import ChartLegend from '@system/graphs/ChartLegend';
import DemoSystemDataVisualizationSidebar, { VISUALIZATION_OPTIONS } from '@root/demos/DemoSystemDataVisualizationSidebar';
import GlobalModalManager from '@system/modals/GlobalModalManager';
import Navigation from '@system/Navigation';
import Page from '@components/Page';
import TreeChart from '@root/system/graphs/TreeChart';
import TwoColumnLayoutFull from '@system/layouts/TwoColumnLayoutFull';

import { H2, P, Title, Text, SubText } from '@system/typography';

const EXAMPLE_DUMMY_DATA = {
  name: 'Webmaster',
  children: [
    {
      name: 'Designer',
      children: [
        {
          name: 'Understanding human behavior, needs, and desires',
          value: 800,
        },

        {
          name: 'Prototyping ideas into reality',
          value: 500,
        },
        {
          name: 'Using the relationship of context and form to shape the process',
          value: 1500,
        },
      ],
    },
    {
      name: 'Engineer',
      children: [
        {
          name: 'Using front-end development for activating design concepts and enhancing usability',
          value: 2200,
        },
        {
          name: 'Using back-end development for system architecture, data management, and functionality',
          value: 1800,
        },
        {
          name: 'Planning and building for timeless relevance',
          value: 1100,
        },
      ],
    },

    {
      name: 'Manager',
      children: [
        {
          name: 'Communication with stakeholders',
          value: 950,
        },
        {
          name: 'Resource Planning',
          value: 1100,
        },
        {
          name: 'Timeline Management',
          value: 1150,
        },
      ],
    },
  ],
};

const EXAMPLE_LEGEND_DATA = [`var(--theme-primary)`, `var(--theme-border)`];

function ExampleSystemDataVisualizationTree(props) {
  // TODO(jimmylee)
  // Refactor these.
  const chartContainerStyles = { padding: `0 24px 48px 16px` };
  const infoStyles = { padding: '32px 24px 24px 24px', borderTop: `1px solid var(--theme-border)` };
  const paragraphStyles = { marginTop: `1rem`, paddingRight: '2px', maxWidth: 768 };
  const pageStyles = { padding: `64px 24px 48px 22px` };

  return (
    <Page
      title="nextjs-sass-starter: system: data visualization: tree"
      description="Explore the capabilities of node tree charts in data visualization through this interactive example."
      url="https://wireframes.internet.dev/examples/system/data-visualization/tree"
    >
      <Navigation />
      <TwoColumnLayoutFull sidebarStyle={{ width: '240px', flexShrink: 0 }} sidebar={<DemoSystemDataVisualizationSidebar active="tree" data={VISUALIZATION_OPTIONS} />}>
        <div style={pageStyles}>
          <H2>Tree</H2>
          <P style={paragraphStyles}>
            Node trees represent data in a hierarchical manner, which is intuitive for modeling many real-world scenarios, such as organizational structures, file systems, and
            more.
          </P>
        </div>

        <div style={infoStyles}>
          <Title>Example</Title>
          <Text style={{ marginTop: `12px` }}>This is an example of a React & D3 node tree component that you can use.</Text>
        </div>

        <div style={chartContainerStyles}>
          <TreeChart data={EXAMPLE_DUMMY_DATA} />
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

export default ExampleSystemDataVisualizationTree;
