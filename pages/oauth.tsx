import * as React from 'react';
import * as Utilities from '@common/utilities';

import Cookies from 'js-cookie';

function OAuthPage(props) {
  React.useEffect(() => {
    if (Utilities.isEmpty(props.code)) {
      window.location.replace('/');
    }

    Cookies.set('sitekey', props.code, { secure: true });
    window.location.replace('/examples/authentication-google');
  });

  return <div>Redirecting...</div>;
}

export async function getServerSideProps(context) {
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
    },
  };
}

export default OAuthPage;
