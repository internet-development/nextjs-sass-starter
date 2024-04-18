import * as React from 'react';
import * as Utilities from '@common/utilities';

import GlobalModalManager from '@system/modals/GlobalModalManager';
import GridLayout from '@system/layouts/GridLayout';
import Navigation from '@system/Navigation';
import Page from '@components/Page';
import RadarChart from '@system/graphs/RadarChart';
import Table from '@system/Table';
import Tag from '@system/documents/Tag';
import TwoColumnLayoutFull from '@system/layouts/TwoColumnLayoutFull';

import { H2, P, Title, Text, SubText } from '@system/typography';
import { FormHeading, FormSubHeading, FormParagraph, InputLabel } from '@system/typography/forms';
import TreeChart from '@root/system/graphs/NodeTree';
import DemoSystemDataVisualizationSidebar, { VISUALIZATION_OPTIONS } from '@root/demos/DemoSystemDataVisualizationSidebar';

const TABLE_HEADINGS = [``, `Name`, `Optional`, `Description`];

const TABLE_DATA = [
  {
    data: [``, <Tag>Title</Tag>, <Tag>True</Tag>, <SubText style={{ marginTop: 7 }}>The title is used to succinctly convey the main focus of your chart.</SubText>],
  },

  {
    data: [``, <Tag>Text</Tag>, <Tag>True</Tag>, <SubText style={{ marginTop: 7 }}>Text provides additional information or context to the chart.</SubText>],
  },

  {
    data: [
      ``,
      <Tag>Marks</Tag>,
      <Tag>False</Tag>,
      <SubText style={{ marginTop: 7 }}>Marks represent the individual data points on the chart, such as bars in a bar chart or points in a scatter plot.</SubText>,
    ],
  },
  {
    data: [
      ``,
      <Tag>Graph Lines</Tag>,
      <Tag>False</Tag>,
      <SubText style={{ marginTop: 7 }}>Graph lines connect data points to help visualize trends or relationships within the data set.</SubText>,
    ],
  },
  {
    data: [``, <Tag>Axis</Tag>, <Tag>False</Tag>, <SubText style={{ marginTop: 7 }}>The axis provides a scale that quantifies the data points on the chart.</SubText>],
  },
  {
    data: [``, <Tag>Axis Labels</Tag>, <Tag>False</Tag>, <SubText style={{ marginTop: 7 }}>Axis labels offer a description of the data scale used on the chart's axis.</SubText>],
  },
];

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

function ExampleSystemDataVisualizationTree(props) {
  const chartContainerStyles = { padding: `0px 5rem`, minHeight: 180 };

  const chart = {
    title: 'Example of Using a Node Tree',
  };
  return (
    <Page
      title="nextjs-sass-starter: system: data visualization: radar"
      description="Explore the capabilities of radar charts in data visualization through this interactive example."
      url="https://wireframes.internet.dev/examples/system/data-visualization/radar"
    >
      <Navigation />
      <TwoColumnLayoutFull sidebarStyle={{ width: '240px', flexShrink: 0 }} sidebar={<DemoSystemDataVisualizationSidebar active="radar" data={VISUALIZATION_OPTIONS} />}>
        <H2 style={{ marginTop: 64, padding: '0 24px 0 22px' }}>Node Tree Chart</H2>
        <P style={{ marginTop: `1rem`, padding: '0 24px 0 24px', maxWidth: 768 }}>
          Node trees represent data in a hierarchical manner, which is intuitive for modeling many real-world scenarios, such as organizational structures, file systems, and more.{' '}
        </P>
        <Title style={{ marginTop: `49px`, padding: '24px 24px 0 24px', borderTop: `1px solid var(--color-border)` }}>{chart.title}</Title>
        <div style={chartContainerStyles}>
          <TreeChart data={EXAMPLE_DUMMY_DATA} style={{ marginTop: 24 }} />
        </div>
        <Table data={TABLE_DATA} headings={TABLE_HEADINGS} />
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
