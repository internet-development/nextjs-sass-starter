import React, { useState } from 'react';

import * as Utilities from '@common/utilities';

import LineChart from '@system/graphs/LineChart';
import GlobalModalManager from '@system/modals/GlobalModalManager';
import GridLayout from '@system/layouts/GridLayout';
import Navigation from '@system/Navigation';
import Page from '@components/Page';
import Table from '@system/Table';
import Tag from '@system/documents/Tag';
import TwoColumnLayoutFull from '@system/layouts/TwoColumnLayoutFull';

import { H1, H2, H3, H4, Lead, SubLead, P, Title, Text, SubTitle, SubText, UnitLabel } from '@system/typography';
import { FormHeading, FormSubHeading, FormParagraph, InputLabel } from '@system/typography/forms';

const TABLE_HEADINGS = [``, `Name`, `Optional`, `Description`];

function ExampleSystemTypography(props) {
  const [currentModal, setModal] = React.useState<Record<string, any> | null>(null);

  const TABLE_DATA = [
    {
      id: 6,
      data: [
        ``,
        <Tag key="label-0">Title</Tag>,
        <Tag key="size-0">True</Tag>,
        <SubText key="copy-0" style={{ marginTop: 7 }}>
          The title is used to describe the contents of your chart. [20px]
        </SubText>,
      ],
    },

    {
      id: 5,
      data: [
        ``,
        <Tag key="label-a">Text</Tag>,
        <Tag key="size-a">True</Tag>,
        <SubText key="copy-a" style={{ marginTop: 7 }}>
          Text is used to provide additional context. [16px]
        </SubText>,
      ],
    },

    {
      id: 1,
      data: [
        ``,
        <Tag key="label-1">Marks</Tag>,
        <Tag key="size-1">False</Tag>,
        <SubText key="copy-1" style={{ marginTop: 7 }}>
          The marks are visual representations of data on a chart. Common types of marks include bars, lines, and areas.
        </SubText>,
      ],
    },
    {
      id: 2,
      data: [
        ``,
        <Tag key="label-2">Graph Lines</Tag>,
        <Tag key="size-2">False</Tag>,
        <SubText key="copy-2" style={{ marginTop: 7 }}>
          The graph lines help users interpret the chart by providing visual context and connecting the marks to the axis labels. Some chart types utilize only horizontal
          gridlines, while others use only vertical gridlines.
        </SubText>,
      ],
    },
    {
      id: 3,
      data: [
        ``,
        <Tag key="label-3">Axis</Tag>,
        <Tag key="size-3">False</Tag>,
        <SubText key="copy-3" style={{ marginTop: 7 }}>
          The axis borders define the boundaries of the chart.
        </SubText>,
      ],
    },
    {
      id: 4,
      data: [
        ``,
        <Tag key="label-4">Axis Labels</Tag>,
        <Tag key="size-4">False</Tag>,
        <SubText key="copy-4" style={{ marginTop: 7 }}>
          The axis labels show the units of measurement for the chart. [12px]
        </SubText>,
      ],
    },
  ];

  const parsedData = [
    {
      close: 20,
      date: '2023-1-1',
    },
    {
      close: 30,
      date: '2023-2-1',
    },
    {
      close: 45,
      date: '2023-3-1',
    },
    {
      close: 70,
      date: '2023-4-1',
    },
    {
      close: 100,
      date: '2023-5-1',
    },
    {
      close: 135,
      date: '2023-6-1',
    },
    {
      close: 145,
      date: '2023-7-1',
    },
    {
      close: 135,
      date: '2023-8-1',
    },
    {
      close: 100,
      date: '2023-9-1',
    },
    {
      close: 70,
      date: '2023-10-1',
    },
    {
      close: 45,
      date: '2023-11-1',
    },
    {
      close: 30,
      date: '2023-12-1',
    },
  ];

  const itemStyle = { background: `var(--color-background)`, borderTop: `1px solid var(--color-border)`, padding: `8px 24px 8px 24px` };

  return (
    <Page
      title="nextjs-sass-starter: system: data visualization"
      description="A lightweight website template to test our design system. You can view this template on GitHub and see how we write websites."
      url="https://wireframes.internet.dev/examples/system/data-visualization"
    >
      <Navigation
        isModalVisible={!!currentModal}
        onHandleThemeChange={Utilities.onHandleThemeChange}
        onHandleHideSubNavigation={() => setModal(null)}
        onHandleShowSubNavigation={() => setModal({ name: 'NAVIGATION', parentId: 'site-navigation-button' })}
      />
      <TwoColumnLayoutFull
        sidebarStyle={{ width: '240px', flexShrink: 0 }}
        sidebar={
          <>
            <SubTitle style={itemStyle}>Bar</SubTitle>
            <SubTitle style={itemStyle}>Column</SubTitle>
            <SubTitle style={itemStyle}>Histogram</SubTitle>
            <SubTitle style={itemStyle}>Heatmap</SubTitle>
            <SubTitle style={itemStyle}>Pie</SubTitle>
            <SubTitle style={itemStyle}>Line</SubTitle>
            <SubTitle style={itemStyle}>Bubble</SubTitle>
            <SubTitle style={itemStyle}>Cohort</SubTitle>
            <SubTitle style={itemStyle}>Matrix</SubTitle>
            <SubTitle style={itemStyle}>Hexbin</SubTitle>
            <SubTitle style={itemStyle}>Distribution</SubTitle>
            <SubTitle style={itemStyle}>Scatter</SubTitle>
            <SubTitle style={itemStyle}>Bullet</SubTitle>
            <SubTitle style={itemStyle}>Treemap</SubTitle>
            <SubTitle style={itemStyle}>Radar</SubTitle>
            <SubTitle style={itemStyle}>Spie</SubTitle>
            <SubTitle style={itemStyle}>Area</SubTitle>
            <SubTitle style={itemStyle}>Calendar</SubTitle>
            <SubTitle style={itemStyle}>Candlestick</SubTitle>
            <SubTitle style={itemStyle}>Donut</SubTitle>
          </>
        }
      >
        <H2 style={{ marginTop: 64, padding: '0 24px 0 22px' }}>Data Visualization</H2>
        <P style={{ marginTop: `1rem`, padding: '0 24px 0 24px', maxWidth: 768 }}>
          Data visualization is a powerful form of communication that transforms dense and complex information into engaging and understandable graphical representations. By
          portraying data in a visual format, users can easily compare information, identify patterns, and gain valuable insights to support decision-making processes.
        </P>
        <P style={{ marginTop: `1rem`, padding: '0 24px 0 24px', maxWidth: 768 }}>
          This system (template) is designed to help visual designers create consistent, aesthetically pleasing, and effective data visualizations for dashboards and insights
          pages. By adhering to the guidelines outlined in this resource, designers can ensure that their charts and graphs align with industry best practices and proven design
          principles.
        </P>
        <Title style={{ marginTop: `49px`, padding: '24px 24px 0 24px', borderTop: `1px solid var(--color-border)` }}>Price of Apples</Title>
        <Text style={{ marginTop: `8px`, padding: '0 24px 0 24px' }}>Grocery store Apple prices in 2023 month over month</Text>
        <div style={{ padding: `0px 24px 16px 16px` }}>
          <LineChart data={parsedData} style={{ marginTop: 32 }} />
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

export default ExampleSystemTypography;
