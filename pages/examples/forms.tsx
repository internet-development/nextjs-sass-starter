import React, { useState } from 'react';

import * as Utilities from '@common/utilities';

import Button from '@system/Button';
import Checkbox from '@system/Checkbox';
import GlobalModalManager from '@system/modals/GlobalModalManager';
import Input from '@system/Input';
import Navigation from '@system/Navigation';
import Page from '@components/Page';
import Select from '@system/Select';
import TextArea from '@system/TextArea';
import ThinAppLayout from '@system/layouts/ThinAppLayout';

import { FormHeading, FormParagraph, InputLabel } from '@system/typography/forms';

const PLACEHOLDER = `First line of placeholder
Second line of placeholder
Third line of placeholder`;

const options = [
  { value: '1', label: 'Option A' },
  { value: '2', label: 'Option B' },
  { value: '3', label: 'Option C' },
];

function ExampleForms(props) {
  const [currentModal, setModal] = React.useState<Record<string, any> | null>(null);
  const [currentSelectValue, setSelectValue] = React.useState<string | null>(null);

  return (
    <Page
      title="nextjs-sass-starter: Forms"
      description="A lightweight website template to test our design system. You can view this template on GitHub and see how we write websites."
      url="https://wireframes.internet.dev/examples/forms"
    >
      <Navigation
        isModalVisible={!!currentModal}
        onHandleThemeChange={Utilities.onHandleThemeChange}
        onHandleHideSubNavigation={() => setModal(null)}
        onHandleShowSubNavigation={() => setModal({ name: 'NAVIGATION' })}
      />
      <ThinAppLayout>
        <FormHeading>Example Form</FormHeading>
        <FormParagraph>
          Developing a web form requires meticulous attention to several key elements to ensure it is both user-friendly and effective. Firstly, simplicity and clarity are
          paramount; the form should ask for only necessary information, avoiding any superfluous fields that could deter users.
        </FormParagraph>
        <InputLabel style={{ marginTop: 48 }}>Input</InputLabel>
        <Input style={{ marginTop: 8 }} />
        <InputLabel style={{ marginTop: 24 }}>Input with placeholder</InputLabel>
        <Input style={{ marginTop: 8 }} placeholder="This is a placeholder" />
        <InputLabel style={{ marginTop: 24 }}>Password</InputLabel>
        <Input style={{ marginTop: 8 }} type="password" defaultValue="test123" />

        <InputLabel style={{ marginTop: 24 }}>Select with no options</InputLabel>
        <Select style={{ marginTop: 8 }} onChange={(e) => setSelectValue(e.target.value)} value={currentSelectValue} />

        <InputLabel style={{ marginTop: 24 }}>Select options</InputLabel>
        <Select style={{ marginTop: 8 }} onChange={(e) => setSelectValue(e.target.value)} options={options} value={currentSelectValue} />

        <InputLabel style={{ marginTop: 24 }}>Textarea</InputLabel>
        <TextArea style={{ marginTop: 8 }} />
        <InputLabel style={{ marginTop: 24 }}>Textarea with placeholder</InputLabel>
        <TextArea style={{ marginTop: 8 }} placeholder={PLACEHOLDER} />
        <Checkbox value={true} style={{ marginTop: 8 }}>
          This is a description, the box should be checked.
        </Checkbox>
        <Checkbox style={{ marginTop: 8 }}>This is a description, the box should not be checked. This description is longer to test how that would feel.</Checkbox>
        <Button href="#" style={{ marginTop: 16, width: '100%' }}>
          Submit
        </Button>
        <Button loading style={{ marginTop: 16, width: '100%' }}>
          This text should not render
        </Button>
      </ThinAppLayout>
      <GlobalModalManager currentModal={currentModal} setModal={setModal} onHandleThemeChange={Utilities.onHandleThemeChange} />
    </Page>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {},
  };
}

export default ExampleForms;
