import * as React from 'react';
import * as Utilities from '@common/utilities';

import DemoSystemDataVisualizationSidebar, { VISUALIZATION_OPTIONS } from '@system/layouts/demos/DemoSystemDataVisualizationSidebar';
import DonutChart from '@system/graphs/DonutChart';
import GlobalModalManager from '@system/modals/GlobalModalManager';
import GridLayout from '@system/layouts/GridLayout';
import Navigation from '@system/Navigation';
import Page from '@components/Page';
import Table from '@system/Table';
import Tag from '@system/documents/Tag';
import TwoColumnLayoutFull from '@system/layouts/TwoColumnLayoutFull';

import { H2, P, Title, Text, SubText } from '@system/typography';
import { FormHeading, FormSubHeading, FormParagraph, InputLabel } from '@system/typography/forms';
import DotPlot from '@root/system/graphs/DotPlot';

const TABLE_HEADINGS = [``, `Name`, `Optional`, `Description`];

const TABLE_DATA = [
  {
    data: [``, <Tag>Title</Tag>, <Tag>True</Tag>, <SubText style={{ marginTop: 7 }}>The title is used to describe the contents of your chart. [20px]</SubText>],
  },

  {
    data: [``, <Tag>Text</Tag>, <Tag>True</Tag>, <SubText style={{ marginTop: 7 }}>Text is used to provide additional context. [16px]</SubText>],
  },

  {
    data: [
      ``,
      <Tag>Marks</Tag>,
      <Tag>False</Tag>,
      <SubText style={{ marginTop: 7 }}>The marks are visual representations of data on a chart. Common types of marks include bars, lines, and areas.</SubText>,
    ],
  },
  {
    data: [
      ``,
      <Tag>Graph Lines</Tag>,
      <Tag>False</Tag>,
      <SubText style={{ marginTop: 7 }}>
        The graph lines help users interpret the chart by providing visual context and connecting the marks to the axis labels. Some chart types utilize only horizontal gridlines,
        while others use only vertical gridlines.
      </SubText>,
    ],
  },
  {
    data: [``, <Tag>Axis</Tag>, <Tag>False</Tag>, <SubText style={{ marginTop: 7 }}>The axis borders define the boundaries of the chart.</SubText>],
  },
  {
    data: [``, <Tag>Axis Labels</Tag>, <Tag>False</Tag>, <SubText style={{ marginTop: 7 }}>The axis labels show the units of measurement for the chart. [12px]</SubText>],
  },
];

const EXAMPLE_DUMMY_DATA = [
  { label: 'Item 1', value: 20 },
  { label: 'Item 2', value: 15 },
  { label: 'Item 3', value: 8 },
  { label: 'Item 4', value: 20 },
  { label: 'Item 5', value: 5 },
  { label: 'Item 6', value: 12 },
  { label: 'Item 7', value: 18 },
  { label: 'Item 8', value: 22 },
  { label: 'Item 9', value: 3 },
  { label: 'Item 10', value: 17 },
  { label: 'Item 11', value: 7 },
  { label: 'Item 12', value: 14 },
  { label: 'Item 13', value: 19 },
  { label: 'Item 14', value: 24 },
  { label: 'Item 15', value: 9 },
  { label: 'Item 16', value: 13 },
  { label: 'Item 17', value: 21 },
  { label: 'Item 18', value: 11 },
  { label: 'Item 19', value: 16 },
  { label: 'Item 20', value: 23 },
];

function ExampleSystemDataVisualizationDotPlot(props) {
  const chartContainerStyles = { padding: `0px 24px 16px 16px`, minHeight: 400 };

  const chart = {
    title: 'Dot plot Example',
    description: 'This is an example of a Dot plot using D3.js integrated into a React component.',
  };
  return (
    <Page
      title="nextjs-sass-starter: system: data visualization: donut"
      description="A lightweight website template to test our design system. You can view this template on GitHub and see how we write websites."
      url="https://wireframes.internet.dev/examples/system/data-visualization/donut"
    >
      <Navigation />
      <TwoColumnLayoutFull sidebarStyle={{ width: '240px', flexShrink: 0 }} sidebar={<DemoSystemDataVisualizationSidebar active="donut" data={VISUALIZATION_OPTIONS} />}>
        <H2 style={{ marginTop: 64, padding: '0 24px 0 22px' }}>Dot plot</H2>
        <P style={{ marginTop: `1rem`, padding: '0 24px 0 24px', maxWidth: 768 }}>
          A Dot plot is a versatile and straightforward way to visualize data, offering clear insights into the distribution and comparison of values across different groups or
          categories. Their simplicity and clarity can be particularly valuable in exploratory data analysis, educational settings, and any situation where individual data points
          and their distribution are of interest.{' '}
        </P>
        <Title style={{ marginTop: `49px`, padding: '24px 24px 0 24px', borderTop: `1px solid var(--color-border)` }}>{chart.title}</Title>
        <Text style={{ marginTop: `8px`, padding: '0 24px 0 24px' }}>{chart.description}</Text>
        <div style={chartContainerStyles}>
          <DotPlot data={EXAMPLE_DUMMY_DATA} style={{ marginTop: 32 }} />
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

export default ExampleSystemDataVisualizationDotPlot;
