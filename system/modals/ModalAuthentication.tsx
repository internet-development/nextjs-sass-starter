import styles from '@system/modals/Modals.module.scss';

import * as React from 'react';
import * as Utilities from '@common/utilities';

import Button from '@system/Button';
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
        <OutsideElementEvent onOutsideEvent={() => props.onShowModal(null)} style={{ width: '100%', maxWidth: 296, margin: `0 auto 0 auto` }}>
          <div className={styles.childModal} style={{ width: '100%', padding: 24 }}>
            <FormSubHeading>You are authenticated</FormSubHeading>
            <FormParagraph>To clear your session, click on the button below.</FormParagraph>
            <Button
              loading={loading}
              onClick={async () => {
                alert('wip');
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
      <OutsideElementEvent onOutsideEvent={() => props.onShowModal(null)} style={{ width: '100%', maxWidth: 296, margin: `0 auto 0 auto` }}>
        <div className={styles.childModal} style={{ width: '100%', padding: 24 }}>
          <FormSubHeading>Sign in</FormSubHeading>
          <FormParagraph>Enhance your experience by signing in or creating an account.</FormParagraph>
          <InputLabel style={{ marginTop: 24 }}>E-mail</InputLabel>
          <Input onChange={(e) => setEmail(e.target.value)} name="email" style={{ marginTop: 8 }} type="text" placeholder="Your e-mail" value={email} />
          <InputLabel style={{ marginTop: 24 }}>Password</InputLabel>
          <Input onChange={(e) => setPassword(e.target.value)} placeholder="Your password" name="password" style={{ marginTop: 8 }} type="password" value={password} />
          <Button
            loading={loading}
            onClick={async () => {
              alert('wip');
            }}
            style={{ marginTop: 24, width: '100%' }}
          >
            Continue and sign in
          </Button>
          <Button
            loading={loading}
            onClick={async () => {
              alert('wip');
            }}
            style={{ marginTop: 16, width: '100%' }}
          >
            Sign in with Google
          </Button>
          <Button
            disabled
            loading={loading}
            onClick={async () => {
              alert('wip');
            }}
            style={{ marginTop: 16, width: '100%' }}
          >
            Sign in with Bluesky
          </Button>
        </div>
      </OutsideElementEvent>
    </div>
  );
}
