import * as React from 'react';
import * as Utilities from '@common/utilities';

import Cookies from 'js-cookie';

function OAuthPage(props) {
  React.useEffect(() => {
    if (Utilities.isEmpty(props.code)) {
      window.location.replace('/');
    }

    Cookies.set('sitekey', props.code, { domain: props.host, secure: true });
    window.location.replace('/examples/authentication-google');
  });

  return <div>Redirecting...</div>;
}

export async function getServerSideProps(context) {
  const host = context.req.headers.host.replace(':10000', '');

  if (Utilities.isEmpty(context.query.key)) {
    return {
      redirect: {
        permanent: false,
        destination: `/`,
      },
    };
  }

  return {
    props: {
      code: String(context.query.key),
      host,
    },
  };
}

export default OAuthPage;
