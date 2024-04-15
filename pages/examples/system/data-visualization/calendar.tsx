import * as React from 'react';
import * as Utilities from '@common/utilities';

import CalendarChart from '@system/graphs/CalendarChart';
import DemoSystemDataVisualizationSidebar, { VISUALIZATION_OPTIONS } from '@system/layouts/demos/DemoSystemDataVisualizationSidebar';
import GlobalModalManager from '@system/modals/GlobalModalManager';
import GridLayout from '@system/layouts/GridLayout';
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

const generateExampleDummyData = () => {
  type DataPoint = { date: Date; close: number }; // Define the type for the data points
  const data: DataPoint[] = []; // Initialize the array with the correct type
  const startDate = new Date('2023-01-01');
  const endDate = new Date('2023-12-31');
  let currentValue = 100;

  for (let date = startDate; date <= endDate; date.setDate(date.getDate() + 1)) {
    const variation = Math.floor(Math.random() * 5) - 2;
    currentValue += variation;
    data.push({ date: new Date(date), close: currentValue });
  }

  return data;
};

const EXAMPLE_DUMMY_DATA = generateExampleDummyData();

function ExampleSystemDataVisualizationCalendar(props) {
  const chartContainerStyles = { padding: `0px 24px 16px 16px`, minHeight: 188 };

  const chart = {
    title: 'Calendar Visualization',
    description: 'This calendar visualization represents data points over time, allowing for easy identification of trends and patterns.',
  };
  return (
    <Page
      title="nextjs-sass-starter: system: data visualization: calendar"
      description="A lightweight website template to test our design system with a calendar visualization example. You can view this template on GitHub and see how we write websites."
      url="https://wireframes.internet.dev/examples/system/data-visualization/calendar"
    >
      <Navigation />
      <TwoColumnLayoutFull sidebarStyle={{ width: '240px', flexShrink: 0 }} sidebar={<DemoSystemDataVisualizationSidebar active="calendar" data={VISUALIZATION_OPTIONS} />}>
        <H2 style={{ marginTop: 64, padding: '0 24px 0 22px' }}>Calendar Visualization</H2>
        <P style={{ marginTop: `1rem`, padding: '0 24px 0 24px', maxWidth: 768 }}>
          Calendar visualizations are a powerful way to display time series data. They can help to identify trends, patterns, and anomalies over a period.
        </P>
        <Title style={{ marginTop: `49px`, padding: '24px 24px 0 24px', borderTop: `1px solid var(--color-border)` }}>{chart.title}</Title>
        <Text style={{ marginTop: `8px`, padding: '0 24px 0 24px' }}>{chart.description}</Text>
        <div style={chartContainerStyles}>
          <CalendarChart data={EXAMPLE_DUMMY_DATA} style={{ marginTop: 32 }} />
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

export default ExampleSystemDataVisualizationCalendar;
