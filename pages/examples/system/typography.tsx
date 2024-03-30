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
    { id: 1, data: [``, `H1`, `3.815rem`, <H1>{COPY}</H1>] },
    { id: 3, data: [``, `H2`, `3.052rem`, <H2>{COPY}</H2>] },
    { id: 5, data: [``, `H3`, `2.441rem`, <H3>{COPY}</H3>] },
    { id: 7, data: [``, `H4`, `1.953rem`, <H4>{COPY}</H4>] },
    { id: 2, data: [``, `Lead`, `1.563rem`, <Lead>{COPY}</Lead>] },
    { id: 22, data: [``, `FormHeading`, `1.563rem`, <FormHeading>{COPY}</FormHeading>] },
    { id: 6, data: [``, `SubLead`, `1.25rem`, <SubLead>{COPY}</SubLead>] },
    { id: 21, data: [``, `FormSubHeading`, `1.25rem`, <FormSubHeading>{COPY}</FormSubHeading>] },
    { id: 9, data: [``, `P`, `1rem`, <P>{COPY}</P>] },
    { id: 20, data: [``, `FormParagraph`, `1rem`, <FormParagraph>{COPY}</FormParagraph>] },
    { id: 8, data: [``, `Title`, `20px`, <Title>{COPY}</Title>] },
    { id: 10, data: [``, `Text`, `16px`, <Text>{COPY}</Text>] },
    { id: 13, data: [``, `UnitLabel`, `14px`, <UnitLabel>{COPY}</UnitLabel>] },
    { id: 11, data: [``, `SubTitle`, `12px`, <SubTitle>{COPY}</SubTitle>] },
    { id: 12, data: [``, `SubText`, `12px`, <SubText>{COPY}</SubText>] },
    { id: 31, data: [``, `InputLabel`, `12px`, <InputLabel>{COPY}</InputLabel>] },
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
