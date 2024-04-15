import * as Queries from '@common/queries';
import * as React from 'react';
import * as Server from '@common/server';
import * as Utilities from '@common/utilities';

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

import { P } from '@system/typography';
import { FormHeading, FormSubHeading, FormParagraph, InputLabel } from '@system/typography/forms';
import { useModal } from '@system/providers/ModalContextProvider';

function ExampleAuthentication(props) {
  const { showModal } = useModal();

  const [currentUser, setUser] = React.useState<Record<string, any> | null>(props.viewer);
  const [key, setKey] = React.useState<string>(props.sessionKey);
  const [email, setEmail] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');
  const [loading, setLoading] = React.useState<boolean>(false);

  if (props.viewer) {
    return (
      <Page
        title="api.internet.dev: Authentication"
        description="A lightweight website template to test our design system. You can view this template on GitHub and see how we write websites."
        url="https://wireframes.internet.dev/examples/authentication"
      >
        <KeyHeader onInputChange={setKey} value={key} />
        <ThinAppLayout>
          <FormHeading style={{ marginTop: 64 }}>You have a session</FormHeading>
          <FormParagraph>
            Would you like to sign out? This example demonstrates detecting whether you have a cookie and signing you in if you are the authenticated user.
          </FormParagraph>
          <FormParagraph>
            By signing out, your cookie and session key will be deleted, and you will have to reauthenticate. After clicking "Sign out," you will see the sign-in form again.
          </FormParagraph>
          <Button
            loading={loading}
            onClick={async () => {
              const confirm = window.confirm('Are you sure?');
              if (!confirm) {
                return;
              }

              Cookies.remove('sitekey');
              window.location.reload();
            }}
            style={{ marginTop: 24, width: '100%' }}
          >
            Sign out
          </Button>
          <div style={{ marginTop: 16 }}>
            <ActionItem icon={`⭢`} href="/examples/settings">
              View settings
            </ActionItem>
          </div>
        </ThinAppLayout>
        <GlobalModalManager viewer={currentUser} />
      </Page>
    );
  }

  return (
    <Page
      title="api.internet.dev: Authentication"
      description="A lightweight website template to test our design system. You can view this template on GitHub and see how we write websites."
      url="https://wireframes.internet.dev/examples/authentication"
    >
      <KeyHeader onInputChange={setKey} value={key} />
      <ThinAppLayout>
        <FormHeading style={{ marginTop: 64 }}>Sign in</FormHeading>
        <FormParagraph>Enhance your experience by signing in or creating an account. Simply enter your e-mail and password to get started.</FormParagraph>
        <FormParagraph>
          Using a Cookie to maintain your session is entirely optional. Once you've successfully signed in, you'll have the option to use a Cookie to persist your session.
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
              showModal({
                name: 'ERROR',
                message: 'You must provide an e-mail.',
              });
              return;
            }

            if (Utilities.isEmpty(password)) {
              showModal({
                name: 'ERROR',
                message: 'You must provide a password.',
              });
              return;
            }

            if (password.length < 4) {
              showModal({
                name: 'ERROR',
                message: 'You must use at least 4 characters for your password.',
              });
              return;
            }

            setLoading(true);
            const response = await Queries.userAuthenticate({ email, password });
            setLoading(false);
            if (!response) {
              showModal({
                name: 'ERROR',
                message: 'Something went wrong. This is also a lazy message. Ideally the error message would have told you that you forgot to put your email or password.',
              });
              return;
            }
            Cookies.remove('sitekey');
            setKey('');

            const confirm = window.confirm('Would you like to save your Cookie to maintain a session?');
            if (confirm) {
              setKey(response.user.key);
              Cookies.set('sitekey', response.user.key, { secure: true });
            }

            setUser(response.user);
          }}
          style={{ marginTop: 24, width: '100%' }}
        >
          Submit
        </Button>

        {currentUser ? (
          <>
            <FormSubHeading style={{ marginTop: 64 }}>Your user data</FormSubHeading>
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
                icon={`⊹`}
                onClick={async () => {
                  const response = await Queries.userAuthenticate({ email, password });
                  if (!response) {
                    showModal({
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
                icon={`⊹`}
                onClick={async () => {
                  const response = await Queries.userRefreshKey({ email, password });
                  if (!response) {
                    showModal({
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
                icon={`⊹`}
                onClick={async () => {
                  setKey(currentUser.key);
                  Cookies.set('sitekey', currentUser.key, { secure: true });
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
      <GlobalModalManager viewer={currentUser} />
    </Page>
  );
}

export async function getServerSideProps(context) {
  const { sessionKey, viewer } = await Server.setup(context);

  return {
    props: { sessionKey, viewer },
  };
}

export default ExampleAuthentication;
