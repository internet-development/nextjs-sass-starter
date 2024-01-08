import Script from 'next/script';
import Package from '@root/package.json';
import { headers } from 'next/headers';

import '@root/global.scss';

import DefaultLayout from '@components/DefaultLayout';

export async function generateMetadata({ params, searchParams }) {
  const title = Package.name;
  const description = Package.description;
  const url = 'https://wireframes.internet.dev';
  const handle = '@internetxstudio';

  return {
    metadataBase: new URL('https://wireframes.internet.dev'),
    title,
    description,
    url,
    openGraph: {
      title,
      description,
      url,
      type: 'website',
      images: [
        {
          url: 'https://intdev-global.s3.us-west-2.amazonaws.com/template-twitter-summary-large.png',
          width: 1200,
          height: 628,
        },
        {
          url: 'https://intdev-global.s3.us-west-2.amazonaws.com/template-app-icon.png',
          width: 1200,
          height: 1200,
        },
      ],
    },
    twitter: {
      title,
      description,
      url,
      handle,
      card: 'summary_large_image',
      images: ['https://intdev-global.s3.us-west-2.amazonaws.com/template-twitter-summary-large.png'],
    },
    icons: {
      icon: '/favicon-32x32.png',
      shortcut: '/favicon-16x16.png',
      apple: [{ url: '/apple-touch-icon.png' }, { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
      other: [
        {
          rel: 'apple-touch-icon-precomposed',
          url: '/apple-touch-icon-precomposed.png',
        },
      ],
    },
  };
}

export default async function Page(props) {
  const headersList = headers();
  const host = headersList.get('host');
  const protocol = headersList.get('x-forwarded-proto');
  const absoluteURL = `${protocol}://${host}`;

  const response = await fetch(`${absoluteURL}/api`);
  const { text } = await response.json();

  return (
    <DefaultLayout previewPixelSRC="https://intdev-global.s3.us-west-2.amazonaws.com/template-app-icon.png">
      <Script src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'GA_MEASUREMENT_ID');
        `}
      </Script>
      Below is a list of templates provided by nextjs-sass-starter. Use any of them as a starting point for a website or a way to use our API.
      <ul style={{ paddingLeft: 64, marginTop: 64 }}>
        <li>
          <a href="/examples">[1] Navigation, hero text</a>
        </li>
        <li>
          <a href="/examples/full-section">[2] Navigation, full browser height sections</a>
        </li>
        <li>
          <a href="/examples/full-section">[3] Navigation, half browser height sections</a>
        </li>
        <li>
          <a href="/examples/full-section">[4] Navigation, no sections, just components</a>
        </li>
        <li>[5] Authentication</li>
        <li>[6] Payment</li>
        <li>[7] Subscription management</li>
        <li>[8] Messages</li>
      </ul>
    </DefaultLayout>
  );
}
