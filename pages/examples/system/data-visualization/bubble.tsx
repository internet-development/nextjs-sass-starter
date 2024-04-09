import React, { useState } from 'react';

import * as Utilities from '@common/utilities';

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

const EXAMPLE_DUMMY_DATA = [];

function ExampleSystemDataVisualizationBubble(props) {
  const [currentModal, setModal] = React.useState<Record<string, any> | null>(null);
  const chartContainerStyles = { padding: `0px 24px 16px 16px`, minHeight: 188 };

  const chart = {
    title: '{{TITLE}}',
    description: '{{DESCRIPTION}}',
  };
  return (
    <Page
      title="nextjs-sass-starter: system: data visualization: bubble"
      description="A lightweight website template to test our design system. You can view this template on GitHub and see how we write websites."
      url="https://wireframes.internet.dev/examples/system/data-visualization"
    >
      <Navigation
        isModalVisible={!!currentModal}
        onHandleThemeChange={Utilities.onHandleThemeChange}
        onHandleHideSubNavigation={() => setModal(null)}
        onHandleShowSubNavigation={() => setModal({ name: 'NAVIGATION', parentId: 'site-navigation-button' })}
      />
      <TwoColumnLayoutFull sidebarStyle={{ width: '240px', flexShrink: 0 }} sidebar={<DemoSystemDataVisualizationSidebar active="bubble" data={VISUALIZATION_OPTIONS} />}>
        <H2 style={{ marginTop: 64, padding: '0 24px 0 22px' }}>Bubble</H2>
        <P style={{ marginTop: `1rem`, padding: '0 24px 0 24px', maxWidth: 768 }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce euismod, nulla sit amet aliquam lacinia, nisl nisl aliquam nisl, nec aliquam nisl nisl sit amet nisl. Sed
          euismod, nulla sit amet aliquam lacinia, nisl nisl aliquam nisl, nec aliquam nisl nisl sit amet nisl. Sed euismod, nulla sit amet aliquam lacinia, nisl nisl aliquam nisl,
          nec aliquam nisl nisl sit amet nisl. Sed euismod, nulla sit amet aliquam lacinia, nisl nisl aliquam nisl, nec aliquam nisl nisl sit amet nisl.
        </P>
        <P style={{ marginTop: `1rem`, padding: '0 24px 0 24px', maxWidth: 768 }}>
          Phasellus vitae velit at tortor condimentum vestibulum. Nunc viverra, nisl eget aliquam lacinia, nisl nisl aliquam nisl, nec aliquam nisl nisl sit amet nisl. Sed euismod,
          nulla sit amet aliquam lacinia, nisl nisl aliquam nisl, nec aliquam nisl nisl sit amet nisl. Sed euismod, nulla sit amet aliquam lacinia, nisl nisl aliquam nisl, nec
          aliquam nisl nisl sit amet nisl. Sed euismod, nulla sit amet aliquam lacinia, nisl nisl aliquam nisl, nec aliquam nisl nisl sit amet nisl.
        </P>
        <Title style={{ marginTop: `49px`, padding: '24px 24px 0 24px', borderTop: `1px solid var(--color-border)` }}>{chart.title}</Title>
        <Text style={{ marginTop: `8px`, padding: '0 24px 0 24px' }}>{chart.description}</Text>
        <div style={chartContainerStyles}></div>
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

export default ExampleSystemDataVisualizationBubble;
