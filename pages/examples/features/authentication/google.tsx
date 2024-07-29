import * as Queries from '@common/queries';
import * as React from 'react';
import * as Server from '@common/server';
import * as Utilities from '@common/utilities';

import ActionItem from '@system/documents/ActionItem';
import Button from '@root/system/interactive/Button';
import Cookies from 'js-cookie';
import GlobalModalManager from '@system/modals/GlobalModalManager';
import Input from '@root/system/interactive/Input';
import KeyHeader from '@system/KeyHeader';
import MonospacePreview from '@system/MonospacePreview';
import Page from '@components/Page';
import ThinAppLayout from '@system/layouts/ThinAppLayout';
import ThinAppLayoutHeader from '@system/layouts/ThinAppLayoutHeader';

import { P } from '@system/typography';
import { FormHeading, FormParagraph, InputLabel } from '@system/typography/forms';

function ExampleAuthentication(props) {
  const [currentUser, setUser] = React.useState<Record<string, any> | null>(props.viewer);
  const [key, setKey] = React.useState<string>(props.sessionKey);
  const [email, setEmail] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');
  const [loading, setLoading] = React.useState<boolean>(false);

  if (props.viewer) {
    return (
      <Page
        title="wireframes.internet.dev ➝ features ➝ authentication ➝ you have a session"
        description="A lightweight website template to test our design system. You can view this template on GitHub and see how we write websites."
        url="https://wireframes.internet.dev/examples/features/authentication/google"
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
            <ActionItem icon={`⭢`} href="/examples/features/settings">
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
      title="wireframes.internet.dev ➝ features ➝ authentication ➝ google"
      description="A lightweight website template to test our design system. You can view this template on GitHub and see how we write websites."
      url="https://wireframes.internet.dev/examples/features/authentication/google"
    >
      <KeyHeader onInputChange={setKey} value={key} />
      <ThinAppLayout>
        <FormHeading style={{ marginTop: 64 }}>Sign in with Google</FormHeading>
        <FormParagraph>Enhance your experience by signing in with Google. Simply click the button below.</FormParagraph>
        <Button href="https://api.internet.dev/authenticate-google" style={{ marginTop: 24, width: '100%' }}>
          Sign in with Google
        </Button>

        {!currentUser ? (
          <>
            <FormParagraph style={{ marginTop: 32 }}>If you our Services through these wireframes you agree to the following: </FormParagraph>
            <div style={{ marginTop: 16 }}>
              <ActionItem icon={`⊹`} href="https://txt.dev/wwwjim/intdev-acceptable-use" target="_blank">
                Acceptable Use Policy
              </ActionItem>
              <ActionItem icon={`⊹`} href="https://txt.dev/wwwjim/intdev-terms-of-service" target="_blank">
                Terms of Service
              </ActionItem>
              <ActionItem icon={`⊹`} href="https://txt.dev/wwwjim/intdev-privacy-policy" target="_blank">
                Privacy Policy
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
