import * as React from 'react';
import * as Utilities from '@common/utilities';

import DemoSystemDataVisualizationSidebar, { VISUALIZATION_OPTIONS } from '@system/layouts/demos/DemoSystemDataVisualizationSidebar';
import GlobalModalManager from '@system/modals/GlobalModalManager';
import GridLayout from '@system/layouts/GridLayout';
import Navigation from '@system/Navigation';
import Page from '@components/Page';
import Table from '@system/Table';
import Tag from '@system/documents/Tag';
import TwoColumnLayoutFull from '@system/layouts/TwoColumnLayoutFull';
import PieChart from '@system/graphs/PieChart';

import { H2, P, Title, Text, SubText } from '@system/typography';
import { FormHeading, FormSubHeading, FormParagraph, InputLabel } from '@system/typography/forms';

const TABLE_HEADINGS = [``, `Name`, `Optional`, `Description`];

const TABLE_DATA = [
  {
    data: [``, <Tag>Title</Tag>, <Tag>True</Tag>, <SubText style={{ marginTop: 7 }}>The title is used to succinctly convey the main theme or summary of the chart.</SubText>],
  },

  {
    data: [
      ``,
      <Tag>Text</Tag>,
      <Tag>True</Tag>,
      <SubText style={{ marginTop: 7 }}>Text provides additional information or context to help interpret the data presented in the chart.</SubText>,
    ],
  },

  {
    data: [
      ``,
      <Tag>Marks</Tag>,
      <Tag>False</Tag>,
      <SubText style={{ marginTop: 7 }}>Marks represent individual data points on the chart, making the data visually accessible.</SubText>,
    ],
  },
  {
    data: [
      ``,
      <Tag>Graph Lines</Tag>,
      <Tag>False</Tag>,
      <SubText style={{ marginTop: 7 }}>Graph lines connect data points, helping to highlight trends, patterns, or relationships within the data.</SubText>,
    ],
  },
  {
    data: [
      ``,
      <Tag>Axis</Tag>,
      <Tag>False</Tag>,
      <SubText style={{ marginTop: 7 }}>The axis provides a scale that quantifies the data, making it easier to understand the magnitude of the values represented.</SubText>,
    ],
  },
  {
    data: [
      ``,
      <Tag>Axis Labels</Tag>,
      <Tag>False</Tag>,
      <SubText style={{ marginTop: 7 }}>Axis labels offer a description of the data scale, aiding in the interpretation of the chart's data points.</SubText>,
    ],
  },
];

const EXAMPLE_DUMMY_DATA = [
  { label: 'Category A', value: 20, color: 'rgba(68, 198, 127, 0.6)' },
  { label: 'Category B', value: 50, color: 'rgba(68, 198, 127, 0.8)' },
  { label: 'Category C', value: 30, color: 'rgba(68, 198, 127, 1)' },
];

function ExampleSystemDataVisualizationPie(props) {
  const chartContainerStyles = { padding: `0px 24px 16px 16px`, minHeight: 188 };

  const chart = {
    title: 'Pie Chart Visualization',
    description: 'This pie chart provides a visual representation of data distribution across different categories, highlighting the relative sizes of segments within a whole.',
  };

  return (
    <Page
      title="nextjs-sass-starter: system: data visualization: pie"
      description="A lightweight website template to test our design system. You can view this template on GitHub and see how we write websites."
      url="https://wireframes.internet.dev/examples/system/data-visualization/pie"
    >
      <Navigation />
      <TwoColumnLayoutFull sidebarStyle={{ width: '240px', flexShrink: 0 }} sidebar={<DemoSystemDataVisualizationSidebar active="pie" data={VISUALIZATION_OPTIONS} />}>
        <H2 style={{ marginTop: 64, padding: '0 24px 0 22px' }}>Pie</H2>
        <P style={{ marginTop: `1rem`, padding: '0 24px 0 24px', maxWidth: 768 }}>
          Explore the dynamics of data distribution across different categories with our interactive pie chart visualization. Gain insights into the relative sizes of segments
          within a whole, facilitating an intuitive understanding of proportions and relationships.
        </P>
        <Title style={{ marginTop: `49px`, padding: '24px 24px 0 24px', borderTop: `1px solid var(--color-border)` }}>{chart.title}</Title>
        <Text style={{ marginTop: `8px`, padding: '0 24px 0 24px' }}>{chart.description}</Text>
        <div style={chartContainerStyles}>
          <PieChart data={EXAMPLE_DUMMY_DATA} style={{ height: '100%', width: '100%', marginTop: 24 }} />
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

export default ExampleSystemDataVisualizationPie;
