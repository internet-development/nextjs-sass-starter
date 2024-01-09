import React, { useState } from 'react';

import * as Utilities from '@common/utilities';

import Button from '@system/Button';
import GlobalModalManager from '@system/modals/GlobalModalManager';
import Input from '@system/Input';
import KeyHeader from '@system/KeyHeader';
import Page from '@components/Page';
import ThinAppLayout from '@system/layouts/ThinAppLayout';

import { P } from '@system/typography';
import { FormHeading, FormParagraph, InputLabel } from '@system/typography/forms';

function ExampleForms(props) {
  const [currentModal, setModal] = React.useState<string | null>(null);
  const [key, setKey] = React.useState<string>('');

  return (
    <Page
      title="api.internet.dev: Authentication"
      description="A lightweight website template to test our design system. You can view this template on GitHub and see how we write websites."
      url="https://wireframes.internet.dev/examples/authentication"
    >
      <KeyHeader onInputChange={setKey} onHandleThemeChange={Utilities.onHandleThemeChange} value={key} />
      <ThinAppLayout>
        <FormHeading>Sign in</FormHeading>
        <FormParagraph>
          Enhance your experience by signing in or creating an account. Simply enter your E-mail and password to get started. Please note that our site prioritizes your privacy and
          does not use cookies for tracking.
          <br />
          <br /> It also does not use local storage. As a result, you'll need to manually input your API key to use <strong>api.internet.dev</strong> each time.
        </FormParagraph>
        <FormParagraph>Remember to handle your API key with care for security purposes. This is just an example template.</FormParagraph>
        <InputLabel style={{ marginTop: 48 }}>E-mail</InputLabel>
        <Input style={{ marginTop: 8 }} type="text" placeholder="Your E-mail" />
        <InputLabel style={{ marginTop: 24 }}>Password</InputLabel>
        <Input style={{ marginTop: 8 }} type="password" placeholder="Your password" />
        <Button onClick={() => alert('coming soon')} style={{ marginTop: 24, width: '100%' }}>
          Submit
        </Button>
        <P href="/">← Cancel, go back</P>
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
