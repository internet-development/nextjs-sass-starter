import * as React from 'react';
import * as Utilities from '@common/utilities';

import DemoSystemDataVisualizationSidebar, { VISUALIZATION_OPTIONS } from '@system/layouts/demos/DemoSystemDataVisualizationSidebar';
import GlobalModalManager from '@system/modals/GlobalModalManager';
import Navigation from '@system/Navigation';
import Page from '@components/Page';
import Table from '@system/Table';
import Tag from '@system/documents/Tag';
import TwoColumnLayoutFull from '@system/layouts/TwoColumnLayoutFull';

import { H2, P, SubText, Text, Title } from '@system/typography';

const TABLE_HEADINGS = [``, `Name`, `Optional`, `Description`];

const TABLE_DATA = [
  {
    data: [``, <Tag>Title</Tag>, <Tag>True</Tag>, <SubText style={{ marginTop: 7 }}>The title is used to describe the contents of your hexbin chart. [20px]</SubText>],
  },

  {
    data: [
      ``,
      <Tag>Text</Tag>,
      <Tag>True</Tag>,
      <SubText style={{ marginTop: 7 }}>Text is used to provide additional context or data points within the hexbin chart. [16px]</SubText>,
    ],
  },

  {
    data: [
      ``,
      <Tag>Marks</Tag>,
      <Tag>False</Tag>,
      <SubText style={{ marginTop: 7 }}>Marks represent individual data points within the hexbin chart, often visualized as hexagonal bins.</SubText>,
    ],
  },
  {
    data: [
      ``,
      <Tag>Graph Lines</Tag>,
      <Tag>False</Tag>,
      <SubText style={{ marginTop: 7 }}>Graph lines can be used to connect data points or to outline hexbins, providing structure and aiding in data interpretation.</SubText>,
    ],
  },
  {
    data: [
      ``,
      <Tag>Axis</Tag>,
      <Tag>False</Tag>,
      <SubText style={{ marginTop: 7 }}>The axis provides a reference frame for the hexbin chart, indicating scale and measurement units.</SubText>,
    ],
  },
  {
    data: [
      ``,
      <Tag>Axis Labels</Tag>,
      <Tag>False</Tag>,
      <SubText style={{ marginTop: 7 }}>Axis labels offer a textual description of the axis scale, enhancing readability and comprehension. [12px]</SubText>,
    ],
  },
];

const EXAMPLE_DUMMY_DATA = [
  { carat: 0.21, price: 326 },
  { carat: 0.23, price: 327 },
  { carat: 0.29, price: 334 },
  { carat: 0.31, price: 335 },
  { carat: 0.24, price: 336 },
  { carat: 0.24, price: 336 },
  { carat: 0.26, price: 337 },
  { carat: 0.22, price: 337 },
  { carat: 0.23, price: 338 },
  { carat: 0.3, price: 339 },
  { carat: 0.23, price: 340 },
  { carat: 0.22, price: 342 },
  { carat: 0.31, price: 344 },
  { carat: 0.2, price: 345 },
  { carat: 0.32, price: 345 },
  { carat: 0.3, price: 348 },
  { carat: 0.3, price: 351 },
  { carat: 0.3, price: 351 },
  { carat: 0.3, price: 351 },
];

function ExampleSystemDataVisualizationHexbin(props) {
  const chartContainerStyles = { padding: `0px 24px 16px 16px`, minHeight: 188 };

  const chart = {
    title: 'Hexbin Chart Visualization',
    description: 'This hexbin chart provides a unique way of visualizing density and distribution of data points across two dimensions.',
  };
  return (
    <Page
      title="nextjs-sass-starter: system: data visualization: hexbin"
      description="A lightweight website template to test our design system. You can view this template on GitHub and see how we write websites."
      url="https://wireframes.internet.dev/examples/system/data-visualization/hexbin"
    >
      <Navigation />
      <TwoColumnLayoutFull sidebarStyle={{ width: '240px', flexShrink: 0 }} sidebar={<DemoSystemDataVisualizationSidebar active="hexbin" data={VISUALIZATION_OPTIONS} />}>
        <H2 style={{ marginTop: 64, padding: '0 24px 0 22px' }}>Hexbin Chart</H2>
        <P style={{ marginTop: `1rem`, padding: '0 24px 0 24px', maxWidth: 768 }}>
          Explore the intricacies of data distribution and density with our interactive hexbin chart. This visualization tool allows for a comprehensive analysis of complex
          datasets, highlighting patterns and correlations between data points.
        </P>
        <Title style={{ marginTop: `49px`, padding: '24px 24px 0 24px', borderTop: `1px solid var(--color-border)` }}>{chart.title}</Title>
        <Text style={{ marginTop: `8px`, padding: '0 24px 0 24px' }}>{chart.description}</Text>
        {/* <div style={chartContainerStyles}>
          <HexbinGraph data={EXAMPLE_DUMMY_DATA} style={{ marginTop: 24 }} />
        </div> */}
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

export default ExampleSystemDataVisualizationHexbin;
