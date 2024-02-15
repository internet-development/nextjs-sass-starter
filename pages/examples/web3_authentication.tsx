import * as React from 'react';
import * as Utilities from '@common/utilities';
import * as Queries from '@common/queries';

import ActionItem from '@system/documents/ActionItem';
import Button from '@system/Button';
import Cookies from 'js-cookie';
import GlobalModalManager from '@system/modals/GlobalModalManager';
import Input from '@system/Input';
import KeyHeader from '@system/KeyHeader';
import MonospacePreview from '@system/MonospacePreview';
import Page from '@components/Page';
import ThinAppLayout from '@system/layouts/ThinAppLayout';
import ThinAppLayoutHeader from '@system/layouts/ThinAppLayoutHeader';
import { ThirdwebSDKProvider } from '@thirdweb-dev/react';
import { ethers } from 'ethers';

import { P } from '@system/typography';
import { FormHeading, FormParagraph, InputLabel } from '@system/typography/forms';

function ExampleAuthentication(props) {
  const [currentError, setError] = React.useState<string | null>(null);
  const [currentModal, setModal] = React.useState<Record<string, any> | null>(null);
  const [currentUser, setUser] = React.useState<Record<string, any> | null>(null);
  const [key, setKey] = React.useState<string>(props.sessionKey);
  const [email, setEmail] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');
  const [loading, setLoading] = React.useState<boolean>(false);
  const [address, setAddress] = React.useState<string>('');

  const signer = new ethers.providers.Web3Provider(window.ethereum).getSigner();

  const signLoginMessage = async () => {
    const message = 'Please sign this message to log in.';
    const signature = await signer.signMessage(message);
    setPassword(signature);
    setAddress(await signer.getAddress());
    return signature;
  };

  return (
    <Page
      title="api.internet.dev: Authentication"
      description="A lightweight website template to test our design system. You can view this template on GitHub and see how we write websites."
      url="https://wireframes.internet.dev/examples/authentication"
    >
      <KeyHeader host={props.host} onInputChange={setKey} onHandleThemeChange={Utilities.onHandleThemeChange} value={key} />
      <ThinAppLayout>
        <ThinAppLayoutHeader
          token={key}
          onSignOut={() => {
            setKey('');
            Cookies.remove('sitekey');
            window.location.reload();
          }}
        />
        <FormHeading style={{ marginTop: 64 }}>Sign in</FormHeading>
        <FormParagraph>Enhance your experience by signing in or creating an account. Simply enter your e-mail and password to get started.</FormParagraph>
        <FormParagraph>
          Using a Cookie to maintain your session is entirely optional. Once you've successfully signed in, you'll have the option to use one to persist your session.
        </FormParagraph>
        <FormParagraph>Remember to handle your API key with care for security purposes. This is just an example template.</FormParagraph>
        <InputLabel style={{ marginTop: 48 }}>E-mail</InputLabel>
        <Input onChange={(e) => setEmail(e.target.value)} name="email" style={{ marginTop: 8 }} type="text" placeholder="Your e-mail" value={email} />
        <InputLabel style={{ marginTop: 24 }}>Password</InputLabel>
        <Input onChange={(e) => setPassword(e.target.value)} placeholder="Your password" name="password" style={{ marginTop: 8 }} type="password" value={password} />
        <ThirdwebSDKProvider activeChain={'ethereum'} signer={signer} clientId="your-client-id">
            {!address && (
            <FormParagraph>
                Registered Using Web3? <br></br>Fill out your password here!
            </FormParagraph>
            )}
            <Button onClick={signLoginMessage}> Web3 Sign-in </Button>
            <FormParagraph></FormParagraph>
        </ThirdwebSDKProvider>
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
            const response = await Queries.userAuthenticate({ email, password });
            setLoading(false);
            if (!response) {
              setModal({
                name: 'ERROR',
                message: 'Something went wrong. This is also a lazy message. Ideally the error message would have told you that you forgot to put your email or password.',
              });
              return;
            }
            Cookies.remove('sitekey');
            setKey('');
            setUser(response.user);
          }}
          style={{ marginTop: 24, width: '100%' }}
        >
          Submit
        </Button>

        {currentUser ? (
          <>
            <FormHeading style={{ marginTop: 64 }}>Your user data</FormHeading>
            <FormParagraph>
              You can grab your API key from the API response below. If you're modifying this template, you will need to implement your own session management if you want to
              provide a better user experience.
            </FormParagraph>
            <FormParagraph>If you verify your e-mail, your user account level should update.</FormParagraph>
            <MonospacePreview style={{ marginTop: 24, opacity: 1 }} title="User Response - /api/users/authenticate">
              {JSON.stringify(currentUser, null, 2)}
            </MonospacePreview>
            <div style={{ marginTop: 16 }}>
              <ActionItem
                icon={`✳`}
                onClick={async () => {
                  const response = await Queries.userAuthenticate({ email, password });
                  if (!response) {
                    setModal({
                      name: 'ERROR',
                      message: 'Something went wrong. This is also a lazy message. Ideally the error message would have told you that you forgot to put your email or password.',
                    });
                    return;
                  }
                  setUser(response.user);
                  alert('The user data was refreshed.');
                }}
              >
                Refresh
              </ActionItem>
              <ActionItem
                icon={`✳`}
                onClick={async () => {
                  const response = await Queries.userRefreshKey({ email, password });
                  if (!response) {
                    setModal({
                      name: 'ERROR',
                      message: 'Something went wrong. This is also a lazy message. Ideally the error message would have told you that you forgot to put your email or password.',
                    });
                    return;
                  }
                  Cookies.remove('sitekey');
                  setUser(response.user);
                  alert('A new API key was issued. You will need to set the Cookie again.');
                }}
              >
                Generate new API key
              </ActionItem>
              <ActionItem
                icon={`✳`}
                onClick={async () => {
                  setKey(currentUser.key);
                  Cookies.set('sitekey', currentUser.key, { domain: props.host, secure: true });
                  alert('Your API key was attached to a cookie with domain and secure options.');
                }}
              >
                Set Cookie (persistent session / sign in)
              </ActionItem>
              <ActionItem
                icon={`⭡`}
                onClick={() => {
                  setUser(null);
                }}
              >
                Hide user information
              </ActionItem>
              <ActionItem icon={`⭢`} href="/examples/settings">
                View settings
              </ActionItem>
            </div>
          </>
        ) : null}
      </ThinAppLayout>
      <GlobalModalManager currentModal={currentModal} setModal={setModal} onHandleThemeChange={Utilities.onHandleThemeChange} />
    </Page>
  );
}

export async function getServerSideProps(context) {
  let viewer = null;
  let sessionKey = context.req.cookies['sitekey'] || '';
  if (Utilities.isEmpty(sessionKey)) {
    return {
      props: { sessionKey: '', viewer: null },
    };
  }

  try {
    const response = await fetch('https://api.internet.dev/api/users/viewer', {
      method: 'PUT',
      headers: { 'X-API-KEY': sessionKey, 'Content-Type': 'application/json' },
    });
    const result = await response.json();
    if (result && result.viewer) {
      viewer = result.viewer;
    }
  } catch (e) {}

  return {
    props: { sessionKey, viewer },
  };
}

export default ExampleAuthentication;
