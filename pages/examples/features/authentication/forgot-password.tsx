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
import ModalError from '@demos/modals/ModalError';
import MonospacePreview from '@system/MonospacePreview';
import Page from '@components/Page';
import ThinAppLayout from '@system/layouts/ThinAppLayout';
import ThinAppLayoutHeader from '@system/layouts/ThinAppLayoutHeader';

import { P } from '@system/typography';
import { FormHeading, FormSubHeading, FormParagraph, InputLabel } from '@system/typography/forms';
import { useModals } from '@root/system/modals/ModalContext';

function ExampleResetPassword(props) {
  const modals = useModals();

  const [currentUser, setUser] = React.useState<Record<string, any> | null>(props.viewer);
  const [key, setKey] = React.useState<string>(props.sessionKey);
  const [email, setEmail] = React.useState<string>('');
  const [loading, setLoading] = React.useState<boolean>(false);

  if (props.viewer) {
    return (
      <Page
        title="wireframes.internet.dev ➝ features ➝ you have a session"
        description="A lightweight website template to test our design system. You can view this template on GitHub and see how we write websites."
        url="https://wireframes.internet.dev/examples/features/authentication/forgot-password"
      >
        <KeyHeader onInputChange={setKey} value={key} viewer={currentUser} />
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
        <GlobalModalManager />
      </Page>
    );
  }

  return (
    <Page
      title="wireframes.internet.dev ➝ features ➝ forgot password"
      description="A lightweight website template to test our design system. You can view this template on GitHub and see how we write websites."
      url="https://wireframes.internet.dev/examples/features/authentication/forgot-password"
    >
      <KeyHeader onInputChange={setKey} value={key} viewer={currentUser} />
      <ThinAppLayout>
        <FormHeading style={{ marginTop: 64 }}>Forgot password</FormHeading>
        <FormParagraph>Enter your e-mail and we'll send you a link to reset your password.</FormParagraph>

        <InputLabel style={{ marginTop: 48 }}>E-mail</InputLabel>
        <Input onChange={(e) => setEmail(e.target.value)} name="email" style={{ marginTop: 8 }} type="text" placeholder="Your e-mail" value={email} />

        <Button
          loading={loading}
          onClick={async () => {
            setLoading(true);
            const response = await Queries.onPublicUserForgotPassword({ email });
            if (!response) {
              setLoading(false);
              modals.open(ModalError, {
                message: 'Something went wrong. This is also a lazy message. Ideally the error message would have told you that you forgot to put your email or password.',
              });
              return;
            }

            window.location.href = `/examples/features/authentication`;
          }}
          style={{ marginTop: 24, width: '100%' }}
        >
          Confirm
        </Button>
      </ThinAppLayout>
      <GlobalModalManager />
    </Page>
  );
}

export async function getServerSideProps(context) {
  const { sessionKey, viewer } = await Server.setup(context);

  return {
    props: { sessionKey, viewer },
  };
}

export default ExampleResetPassword;
