import * as React from 'react';
import * as Utilities from '@common/utilities';

import DemoSystemDataVisualizationSidebar, { VISUALIZATION_OPTIONS } from '@system/layouts/demos/DemoSystemDataVisualizationSidebar';
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

  const chart = {
    title: 'Radar Chart Visualization',
    description: 'This radar chart provides a visual representation of multi-variable data for comparative analysis.',
  };
  return (
    <Page
      title="nextjs-sass-starter: system: data visualization: radar"
      description="Explore the capabilities of radar charts in data visualization through this interactive example."
      url="https://wireframes.internet.dev/examples/system/data-visualization/radar"
    >
      <Navigation />
      <TwoColumnLayoutFull sidebarStyle={{ width: '240px', flexShrink: 0 }} sidebar={<DemoSystemDataVisualizationSidebar active="radar" data={VISUALIZATION_OPTIONS} />}>
        <H2 style={{ marginTop: 64, padding: '0 24px 0 22px' }}>Radar Chart Overview</H2>
        <P style={{ marginTop: `1rem`, padding: '0 24px 0 24px', maxWidth: 768 }}>
          Radar charts, also known as spider charts or web charts, offer a way to display multivariate data in the form of a two-dimensional chart of three or more quantitative
          variables represented on axes starting from the same point.
        </P>
        <Title style={{ marginTop: `49px`, padding: '24px 24px 0 24px', borderTop: `1px solid var(--color-border)` }}>{chart.title}</Title>
        <Text style={{ marginTop: `8px`, padding: '0 24px 0 24px' }}>{chart.description}</Text>
        <div style={chartContainerStyles}>
          <RadarChart data={EXAMPLE_DUMMY_DATA} style={{ marginTop: 24 }} />
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

export default ExampleSystemDataVisualizationRadar;
