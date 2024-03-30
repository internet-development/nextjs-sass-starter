import React, { useState } from 'react';

import * as Utilities from '@common/utilities';

import GlobalModalManager from '@system/modals/GlobalModalManager';
import Navigation from '@system/Navigation';
import Page from '@components/Page';
import Table from '@system/Table';
import TwoColumnLayoutFull from '@system/layouts/TwoColumnLayoutFull';

import { H1, H2, H3, H4, Lead, SubLead, P, Title, Text, SubTitle, SubText, UnitLabel } from '@system/typography';
import { FormHeading, FormSubHeading, FormParagraph, InputLabel } from '@system/typography/forms';

const TABLE_HEADINGS = [``, `Component`, `Size`, `Preview`];
const COPY = `See what things are in themselves, dividing them into matter, form and purpose. How ridiculous and what a stranger he is who is surprised at anything which happens in life.`;

function ExampleSystemTypography(props) {
  const [currentModal, setModal] = React.useState<Record<string, any> | null>(null);

  const TABLE_DATA = [
    { id: 1, data: [``, `H1`, `3.815rem`, <H1 key="1">{COPY}</H1>] },
    { id: 2, data: [``, `H2`, `3.052rem`, <H2 key="2">{COPY}</H2>] },
    { id: 3, data: [``, `H3`, `2.441rem`, <H3 key="3">{COPY}</H3>] },
    { id: 4, data: [``, `H4`, `1.953rem`, <H4 key="4">{COPY}</H4>] },
    { id: 5, data: [``, `Lead`, `1.563rem`, <Lead key="5">{COPY}</Lead>] },
    { id: 6, data: [``, `FormHeading`, `1.563rem`, <FormHeading key="6">{COPY}</FormHeading>] },
    { id: 7, data: [``, `SubLead`, `1.25rem`, <SubLead key="7">{COPY}</SubLead>] },
    { id: 8, data: [``, `FormSubHeading`, `1.25rem`, <FormSubHeading key="8">{COPY}</FormSubHeading>] },
    { id: 9, data: [``, `P`, `1rem`, <P key="9">{COPY}</P>] },
    { id: 10, data: [``, `FormParagraph`, `1rem`, <FormParagraph key="10">{COPY}</FormParagraph>] },
    { id: 11, data: [``, `Title`, `20px`, <Title key="11">{COPY}</Title>] },
    { id: 12, data: [``, `Text`, `16px`, <Text key="12">{COPY}</Text>] },
    { id: 13, data: [``, `UnitLabel`, `14px`, <UnitLabel key="13">{COPY}</UnitLabel>] },
    { id: 14, data: [``, `SubTitle`, `12px`, <SubTitle key="14">{COPY}</SubTitle>] },
    { id: 15, data: [``, `SubText`, `12px`, <SubText key="15">{COPY}</SubText>] },
    { id: 16, data: [``, `InputLabel`, `12px`, <InputLabel key="16">{COPY}</InputLabel>] },
  ];

  return (
    <Page
      title="nextjs-sass-starter: system: typography"
      description="A lightweight website template to test our design system. You can view this template on GitHub and see how we write websites."
      url="https://wireframes.internet.dev/examples/system/typography"
    >
      <Navigation
        isModalVisible={!!currentModal}
        onHandleThemeChange={Utilities.onHandleThemeChange}
        onHandleHideSubNavigation={() => setModal(null)}
        onHandleShowSubNavigation={() => setModal({ name: 'NAVIGATION', parentId: 'site-navigation-button' })}
      />
      <TwoColumnLayoutFull sidebar={<div>&nbsp;</div>}>
        <Table data={TABLE_DATA} headings={TABLE_HEADINGS} style={{ marginTop: 48 }} />
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
