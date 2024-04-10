import React, { useState } from 'react';

import * as Utilities from '@common/utilities';

import DemoSystemDataVisualizationSidebar, { VISUALIZATION_OPTIONS } from '@system/layouts/demos/DemoSystemDataVisualizationSidebar';
import ColumnChart from '@system/graphs/ColumnChart';
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

const EXAMPLE_DUMMY_DATA = [
  { category: 'A', positive: 10, neutral: 5, negative: -5, positiveError: 2, negativeError: 1 },
  { category: 'B', positive: 15, neutral: 10, negative: -10, positiveError: 3, negativeError: 2 },
  { category: 'C', positive: 18, neutral: 8, negative: -3, positiveError: 4, negativeError: 1.5 },
  { category: 'D', positive: 20, neutral: 12, negative: -15, positiveError: 5, negativeError: 3 },
  { category: 'E', positive: 25, neutral: 15, negative: -7, positiveError: 2.5, negativeError: 1.2 },
  { category: 'F', positive: 30, neutral: 18, negative: -12, positiveError: 3, negativeError: 2 },
  { category: 'G', positive: 28, neutral: 20, negative: -10, positiveError: 4, negativeError: 2.5 },
  { category: 'H', positive: 35, neutral: 22, negative: -5, positiveError: 5, negativeError: 2 },
  { category: 'I', positive: 40, neutral: 25, negative: -20, positiveError: 6, negativeError: 3 },
  { category: 'J', positive: 45, neutral: 30, negative: -25, positiveError: 7, negativeError: 3.5 },
  { category: 'K', positive: 22, neutral: 16, negative: -18, positiveError: 3.5, negativeError: 2 },
  { category: 'L', positive: 50, neutral: 35, negative: -30, positiveError: 8, negativeError: 4 },
  { category: 'M', positive: 55, neutral: 40, negative: -35, positiveError: 9, negativeError: 4.5 },
  { category: 'N', positive: 60, neutral: 45, negative: -40, positiveError: 10, negativeError: 5 },
  { category: 'O', positive: 65, neutral: 50, negative: -45, positiveError: 11, negativeError: 5.5 },
  { category: 'P', positive: 70, neutral: 55, negative: -50, positiveError: 12, negativeError: 6 },
  { category: 'Q', positive: 75, neutral: 60, negative: -55, positiveError: 13, negativeError: 6.5 },
  { category: 'R', positive: 80, neutral: 65, negative: -60, positiveError: 14, negativeError: 7 },
  { category: 'S', positive: 85, neutral: 70, negative: -65, positiveError: 15, negativeError: 7.5 },
  { category: 'T', positive: 90, neutral: 75, negative: -70, positiveError: 16, negativeError: 8 },
];

//EXAMPLE_DIVERGING_STACKED_BAR_CHART_LABELS
const EXAMPLE_DIVERGING_STACKED_BAR_CHART_LABELS = [
  { color: 'var(--color-subdued-error)', label: 'Negative' },
  { color: 'var(--color-light-gray)', label: 'Neutral' },
  { color: 'var(--color-success)', label: 'Positive' },
];

function ExampleSystemDataVisualizationColumn(props) {
  const [currentModal, setModal] = React.useState<Record<string, any> | null>(null);
  const chartContainerStyles = { padding: `0px 24px 16px 16px`, minHeight: 188 };

  const chart = {
    title: 'Monthly Sales Data',
    description: 'This column chart represents the monthly sales data for the year 2023.',
  };
  return (
    <Page
      title="nextjs-sass-starter: system: data visualization: column"
      description="A lightweight website template to test our design system with a column chart example. You can view this template on GitHub and see how we write websites."
      url="https://wireframes.internet.dev/examples/system/data-visualization/column"
    >
      <Navigation
        isModalVisible={!!currentModal}
        onHandleThemeChange={Utilities.onHandleThemeChange}
        onHandleHideSubNavigation={() => setModal(null)}
        onHandleShowSubNavigation={() => setModal({ name: 'NAVIGATION', parentId: 'site-navigation-button' })}
      />
      <TwoColumnLayoutFull sidebarStyle={{ width: '240px', flexShrink: 0 }} sidebar={<DemoSystemDataVisualizationSidebar active="column" data={VISUALIZATION_OPTIONS} />}>
        <H2 style={{ marginTop: 64, padding: '0 24px 0 22px' }}>Column Chart</H2>
        <P style={{ marginTop: `1rem`, padding: '0 24px 0 24px', maxWidth: 768 }}>
          Column charts are used to show data changes over a period of time or illustrate comparisons among items. In column charts, categories are typically organized along the horizontal axis and values along the vertical axis.
        </P>
        <Title style={{ marginTop: `49px`, padding: '24px 24px 0 24px', borderTop: `1px solid var(--color-border)` }}>{chart.title}</Title>
        <Text style={{ marginTop: `8px`, padding: '0 24px 0 24px' }}>{chart.description}</Text>
        <div style={chartContainerStyles}>
          <ColumnChart data={EXAMPLE_DUMMY_DATA} style={{ marginTop: 32 }} legend={EXAMPLE_DIVERGING_STACKED_BAR_CHART_LABELS} />
        </div>
        <Table data={TABLE_DATA} headings={TABLE_HEADINGS} />
      </TwoColumnLayoutFull>
      <GlobalModalManager currentModal={currentModal} onHandleThemeChange={Utilities.onHandleThemeChange} onSetModal={setModal} />
    </Page>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {},
  };
}

export default ExampleSystemDataVisualizationColumn;
