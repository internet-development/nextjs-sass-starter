import styles from '@demos/modals/Modals.module.scss';

import * as Queries from '@common/queries';
import * as React from 'react';
import * as Utilities from '@common/utilities';

import ActionItem from '@system/documents/ActionItem';
import Bluesky from '@system/svg/social/Bluesky';
import Button from '@system/Button';
import Cookies from 'js-cookie';
import Google from '@system/svg/social/Google';
import Input from '@system/Input';
import OutsideElementEvent from '@system/detectors/OutsideElementEvent';

import { FormHeading, FormSubHeading, FormParagraph, InputLabel } from '@system/typography/forms';

export default function ModalAuthentication(props) {
  const [email, setEmail] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');
  const [loading, setLoading] = React.useState<boolean>(false);

  if (props.viewer) {
    return (
      <div className={styles.wrapper}>
        <OutsideElementEvent onOutsideEvent={() => props.onShowModal(null)} style={{ width: '100%', maxWidth: 488, margin: `0 auto 0 auto` }}>
          <div className={styles.childModal} style={{ width: '100%', padding: 24 }}>
            <FormSubHeading>You are authenticated</FormSubHeading>
            <FormParagraph>To clear your session, click on the button below.</FormParagraph>
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
          </div>
        </OutsideElementEvent>
      </div>
    );
  }

  return (
    <div className={styles.wrapper}>
      <OutsideElementEvent onOutsideEvent={() => props.onShowModal(null)} style={{ width: '100%', maxWidth: 488, margin: `0 auto 0 auto` }}>
        <div className={styles.childModal} style={{ width: '100%', padding: 24 }}>
          <FormSubHeading>Join or sign in</FormSubHeading>
          <FormParagraph>Sign in or create an account to enhance your experience. Enter your e-mail and password or use an OAuth provider to get started.</FormParagraph>
          <InputLabel style={{ marginTop: 24 }}>E-mail</InputLabel>
          <Input onChange={(e) => setEmail(e.target.value)} name="email" style={{ marginTop: 8 }} type="text" placeholder="Your e-mail" value={email} />
          <InputLabel style={{ marginTop: 24 }}>Password</InputLabel>
          <Input onChange={(e) => setPassword(e.target.value)} placeholder="Your password" name="password" style={{ marginTop: 8 }} type="password" value={password} />

          <div style={{ marginTop: 24 }}>
            <ActionItem icon={`⭢`} active={props.active === 'PERSONAL'} href="/examples/features/authentication/forgot-password">
              Forgot password?
            </ActionItem>
          </div>

          <Button
            loading={loading}
            onClick={async () => {
              if (Utilities.isEmpty(email)) {
                alert('You must provide an e-mail.');
                return;
              }

              if (Utilities.isEmpty(password)) {
                alert('You must provide a password.');
                return;
              }

              if (password.length < 4) {
                alert('You must use at least 4 characters for your password.');
                return;
              }

              setLoading(true);
              const response = await Queries.onPublicUserAuthenticate({ email, password });
              setLoading(false);
              if (!response) {
                alert('Something went wrong. This is also a lazy message. Ideally the error message would have told you that you forgot to put your email or password.');
                return;
              }
              Cookies.remove('sitekey');

              const confirm = window.confirm('Would you like to save your Cookie to maintain a session?');
              if (confirm) {
                Cookies.set('sitekey', response.user.key, { secure: true });
              }

              props.onShowModal(null);
              window.location.reload();
            }}
            style={{ marginTop: 24, width: '100%' }}
          >
            Continue with e-mail
          </Button>
          {loading ? null : (
            <Button loading={loading} href="https://api.internet.dev/authenticate-google?domain=REDIRECT_WIREFRAMES_INTERNET_DEV" style={{ marginTop: 16, width: '100%' }}>
              <Google height="16px" style={{ marginRight: 16 }} /> Sign in with Google
            </Button>
          )}
          {loading ? null : (
            <Button visual loading={loading} style={{ marginTop: 16, width: '100%' }}>
              <Bluesky height="16px" style={{ marginRight: 16, color: '#0A7AFF' }} /> Sign in with Bluesky
            </Button>
          )}
        </div>
      </OutsideElementEvent>
    </div>
  );
}
