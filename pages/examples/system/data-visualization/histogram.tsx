import * as React from 'react';
import * as Utilities from '@common/utilities';

import DemoSystemDataVisualizationSidebar, { VISUALIZATION_OPTIONS } from '@system/layouts/demos/DemoSystemDataVisualizationSidebar';
import GlobalModalManager from '@system/modals/GlobalModalManager';
import GridLayout from '@system/layouts/GridLayout';
import HistogramChart from '@system/graphs/HistogramChart';
import Navigation from '@system/Navigation';
import Page from '@components/Page';
import Table from '@system/Table';
import Tag from '@system/documents/Tag';
import TwoColumnLayoutFull from '@system/layouts/TwoColumnLayoutFull';

import { H2, P, Title, Text, SubText } from '@system/typography';
import { FormHeading, FormSubHeading, FormParagraph, InputLabel } from '@system/typography/forms';

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
  {
    label: 'January',
    value: 50,
    lower_ci: 45,
    upper_ci: 55,
  },
  {
    label: 'February',
    value: 80,
    lower_ci: 75,
    upper_ci: 85,
  },
  {
    label: 'March',
    value: 45,
    lower_ci: 40,
    upper_ci: 50,
  },
  {
    label: 'April',
    value: 30,
    lower_ci: 25,
    upper_ci: 35,
  },
  {
    label: 'May',
    value: 50,
    lower_ci: 45,
    upper_ci: 55,
  },
  {
    label: 'June',
    value: 75,
    lower_ci: 70,
    upper_ci: 80,
  },
  {
    label: 'July',
    value: 60,
    lower_ci: 55,
    upper_ci: 65,
  },
  {
    label: 'August',
    value: 90,
    lower_ci: 85,
    upper_ci: 95,
  },
  {
    label: 'September',
    value: 80,
    lower_ci: 75,
    upper_ci: 85,
  },
  {
    label: 'October',
    value: 50,
    lower_ci: 45,
    upper_ci: 55,
  },
  {
    label: 'November',
    value: 65,
    lower_ci: 60,
    upper_ci: 70,
  },
  {
    label: 'December',
    value: 40,
    lower_ci: 35,
    upper_ci: 45,
  },
];

function ExampleSystemDataVisualizationHistogram(props) {
  const chartContainerStyles = { padding: `0px 24px 16px 16px`, minHeight: 188 };

  const chart = {
    title: 'Histogram Example',
    description: 'This is an example of a Histogram using D3.js integrated into a React component.',
  };
  return (
    <Page
      title="nextjs-sass-starter: system: data visualization: histogram"
      description="A lightweight website template to test our design system. You can view this template on GitHub and see how we write websites."
      url="https://wireframes.internet.dev/examples/system/data-visualization/histogram"
    >
      <Navigation />
      <TwoColumnLayoutFull sidebarStyle={{ width: '240px', flexShrink: 0 }} sidebar={<DemoSystemDataVisualizationSidebar active="histogram" data={VISUALIZATION_OPTIONS} />}>
        <H2 style={{ marginTop: 64, padding: '0 24px 0 22px' }}>Histogram</H2>
        <P style={{ marginTop: `1rem`, padding: '0 24px 0 24px', maxWidth: 768 }}>
          This example demonstrates how to integrate a D3.js Histogram into a React component. The histogram visualizes the distribution of data across different ranges or bins.
        </P>
        <Title style={{ marginTop: `49px`, padding: '24px 24px 0 24px', borderTop: `1px solid var(--color-border)` }}>{chart.title}</Title>
        <Text style={{ marginTop: `8px`, padding: '0 24px 0 24px' }}>{chart.description}</Text>
        <div style={chartContainerStyles}>
          <HistogramChart data={EXAMPLE_DUMMY_DATA} style={{ height: '100%', width: '100%' }} />
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

export default ExampleSystemDataVisualizationHistogram;
