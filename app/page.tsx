import Script from 'next/script';
import Package from '@root/package.json';
import { headers } from 'next/headers';

import '@root/global.scss';

import DefaultLayout from '@components/DefaultLayout';

export async function generateMetadata({ params, searchParams }) {
  const title = Package.name;
  const description = Package.description;
  const url = 'https://int-dev-testing.onrender.com';
  const handle = '@internetxstudio';

  return {
    metadataBase: new URL('https://int-dev-testing.onrender.com'),
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
      Your objective should always be to eliminate instructions entirely by making everything self-explanatory, or as close to it as possible. When instructions are absolutely
      necessary, cut them back to a bare minimum.
      <br />
      <br />
      <br />
      Scratches
      <br />
      {absoluteURL}/api
      <br />
      API server response text: "{text}"
      <br />
      <br />
      <br />
      Image Test
      <br />
      Google should pick up the `previewPixelSRC` over this image in a SEO preview
      <br />
      <img style={{ display: 'block', width: '100%' }} src="https://intdev-global.s3.us-west-2.amazonaws.com/template-twitter-summary-large.png" />
    </DefaultLayout>
  );
}
