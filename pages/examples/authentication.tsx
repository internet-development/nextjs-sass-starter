import React, { useState, useEffect } from 'react';

import * as Utilities from '@common/utilities';

import Button from '@system/Button';
import GlobalModalManager from '@system/modals/GlobalModalManager';
import Input from '@system/Input';
import KeyHeader from '@system/KeyHeader';
import MonospacePreview from '@system/MonospacePreview';
import Page from '@components/Page';
import ThinAppLayout from '@system/layouts/ThinAppLayout';

import { P } from '@system/typography';
import { FormHeading, FormParagraph, InputLabel } from '@system/typography/forms';

async function onAuthenticate({ email, password }) {
  let result;
  try {
    const response = await fetch('https://api.internet.dev/api/users/authenticate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });
    result = await response.json();
  } catch (e) {
    return null;
  }

  if (!result) {
    return null;
  }

  if (!result.user) {
    return null;
  }

  return result;
}

async function onRefreshAPIKey({ email, password }) {
  let result;
  try {
    const response = await fetch('https://api.internet.dev/api/users/regenerate-key', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });
    result = await response.json();
  } catch (e) {
    return null;
  }

  if (!result) {
    return null;
  }

  if (!result.user) {
    return null;
  }

  return result;
}

function ExampleForms(props) {
  const [currentError, setError] = useState<string | null>(null);
  const [currentModal, setModal] = React.useState<Record<string, any> | null>(null);
  const [currentUser, setUser] = React.useState<Record<string, any> | null>(null);
  const [key, setKey] = React.useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

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
          Enhance your experience by signing in or creating an account. Simply enter your e-mail and password to get started. Please note that our site prioritizes your privacy and
          does not use cookies for tracking.
        </FormParagraph>
        <FormParagraph>
          It also does not use local storage. As a result, you'll need to manually input your API key to use <strong>api.internet.dev</strong> each time.
        </FormParagraph>
        <FormParagraph>Remember to handle your API key with care for security purposes. This is just an example template.</FormParagraph>
        <InputLabel style={{ marginTop: 48 }}>E-mail</InputLabel>
        <Input onChange={(e) => setEmail(e.target.value)} name="email" style={{ marginTop: 8 }} type="text" placeholder="Your e-mail" value={email} />
        <InputLabel style={{ marginTop: 24 }}>Password</InputLabel>
        <Input onChange={(e) => setPassword(e.target.value)} placeholder="Your password" name="password" style={{ marginTop: 8 }} type="password" value={password} />
        <Button
          loading={loading}
          onClick={async () => {
            if (Utilities.isEmpty(email)) {
              setModal({
                name: 'ERROR',
                message: 'You must provide an e-mail.',
              });
              return;
            }

            if (Utilities.isEmpty(password)) {
              setModal({
                name: 'ERROR',
                message: 'You must provide a password.',
              });
              return;
            }

            if (password.length < 4) {
              setModal({
                name: 'ERROR',
                message: 'You must use at least 4 characters for your password.',
              });
              return;
            }

            setLoading(true);
            const response = await onAuthenticate({ email, password });
            setLoading(false);
            if (!response) {
              setModal({
                name: 'ERROR',
                message: 'Something went wrong. This is also a lazy message. Ideally the error message would have told you that you forgot to put your email or password.',
              });
              return;
            }
            setUser(response.user);
          }}
          style={{ marginTop: 24, width: '100%' }}
        >
          Submit
        </Button>
        <P href="/">← Return home</P>

        {currentUser ? (
          <>
            <FormHeading style={{ marginTop: 64 }}>Your user data</FormHeading>
            <FormParagraph>
              You can grab your API key from the API response below. If you're modifying this template, you will need to implement your own session management if you want to
              provide a better user experience.
            </FormParagraph>
            <FormParagraph>If you verify your e-mail, your user account level should update.</FormParagraph>
            <MonospacePreview style={{ marginTop: 24 }} title="User Response - /api/users/authenticate">
              {JSON.stringify(currentUser, null, 2)}
            </MonospacePreview>
            <P
              style={{ cursor: 'pointer' }}
              onClick={async () => {
                const response = await onAuthenticate({ email, password });
                if (!response) {
                  setModal({
                    name: 'ERROR',
                    message: 'Something went wrong. This is also a lazy message. Ideally the error message would have told you that you forgot to put your email or password.',
                  });
                  return;
                }
                setUser(response.user);
              }}
            >
              → Refresh
            </P>
            <P
              style={{ cursor: 'pointer' }}
              onClick={async () => {
                const response = await onRefreshAPIKey({ email, password });
                if (!response) {
                  setModal({
                    name: 'ERROR',
                    message: 'Something went wrong. This is also a lazy message. Ideally the error message would have told you that you forgot to put your email or password.',
                  });
                  return;
                }
                setUser(response.user);
              }}
            >
              → Reset API key
            </P>
            <P
              style={{ cursor: 'pointer' }}
              onClick={() => {
                setUser(null);
              }}
            >
              ↑ Hide user information
            </P>
          </>
        ) : null}
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
