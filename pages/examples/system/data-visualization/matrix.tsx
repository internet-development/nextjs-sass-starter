import * as React from 'react';
import * as Utilities from '@common/utilities';

import DemoSystemDataVisualizationSidebar, { VISUALIZATION_OPTIONS } from '@system/layouts/demos/DemoSystemDataVisualizationSidebar';
import GlobalModalManager from '@system/modals/GlobalModalManager';
import GridLayout from '@system/layouts/GridLayout';
import MatrixGraph from '@system/graphs/MatrixGraph';
import Navigation from '@system/Navigation';
import Page from '@components/Page';
import Table from '@system/Table';
import Tag from '@system/documents/Tag';
import TwoColumnLayoutFull from '@system/layouts/TwoColumnLayoutFull';

import { H2, P, Title, Text, SubText } from '@system/typography';
import { FormHeading, FormSubHeading, FormParagraph, InputLabel } from '@system/typography/forms';

const TABLE_HEADINGS = [``, `Attribute`, `Required`, `Details`];

const TABLE_DATA = [
  {
    data: [``, <Tag>Header</Tag>, <Tag>No</Tag>, <SubText style={{ marginTop: 7 }}>Defines the heading of the chart for clarity and context. [20px]</SubText>],
  },

  {
    data: [``, <Tag>Annotation</Tag>, <Tag>No</Tag>, <SubText style={{ marginTop: 7 }}>Provides additional information or commentary. [16px]</SubText>],
  },

  {
    data: [
      ``,
      <Tag>Data Points</Tag>,
      <Tag>Yes</Tag>,
      <SubText style={{ marginTop: 7 }}>Represents individual values plotted in the chart. Common types include dots, squares, and triangles.</SubText>,
    ],
  },
  {
    data: [
      ``,
      <Tag>Grid</Tag>,
      <Tag>Yes</Tag>,
      <SubText style={{ marginTop: 7 }}>Offers a reference framework for the chart by highlighting major and minor axes. Grids can be horizontal, vertical, or both.</SubText>,
    ],
  },
  {
    data: [``, <Tag>Boundary</Tag>, <Tag>Yes</Tag>, <SubText style={{ marginTop: 7 }}>Marks the perimeter or outer limits of the chart area.</SubText>],
  },
  {
    data: [``, <Tag>Scale</Tag>, <Tag>Yes</Tag>, <SubText style={{ marginTop: 7 }}>Indicates the value range that the chart represents. [12px]</SubText>],
  },
];

const EXAMPLE_DUMMY_DATA = [
  [0, 2, 4, 6],
  [8, 10, 12, 14],
  [16, 18, 20, 22],
  [24, 26, 28, 30],
];

function ExampleSystemDataVisualizationMatrix(props) {
  const chartContainerStyles = { padding: `0px 24px 16px 16px`, minHeight: 188 };

  const chart = {
    title: 'Matrix Visualization',
    description: 'An illustrative example showcasing a matrix chart for data representation.',
  };
  return (
    <Page
      title="nextjs-sass-starter: system: data visualization: matrix"
      description="Explore the intricacies of matrix data visualization within our design system. This example serves as a guide for implementing matrix charts effectively."
      url="https://wireframes.internet.dev/examples/system/data-visualization/matrix"
    >
      <Navigation />
      <TwoColumnLayoutFull sidebarStyle={{ width: '240px', flexShrink: 0 }} sidebar={<DemoSystemDataVisualizationSidebar active="matrix" data={VISUALIZATION_OPTIONS} />}>
        <H2 style={{ marginTop: 64, padding: '0 24px 0 22px' }}>Matrix Visualization</H2>
        <P style={{ marginTop: `1rem`, padding: '0 24px 0 24px', maxWidth: 768 }}>
          Matrix charts are powerful tools for visualizing complex data sets, allowing for the comparison of data across two dimensions. They are particularly useful for spotting
          patterns, correlations, and anomalies within the data.
        </P>
        <Title style={{ marginTop: `49px`, padding: '24px 24px 0 24px', borderTop: `1px solid var(--color-border)` }}>{chart.title}</Title>
        <Text style={{ marginTop: `8px`, padding: '0 24px 0 24px' }}>{chart.description}</Text>
        <div style={chartContainerStyles}>
          <MatrixGraph data={EXAMPLE_DUMMY_DATA} style={{ height: '100%', width: '100%' }} />
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

export default ExampleSystemDataVisualizationMatrix;
