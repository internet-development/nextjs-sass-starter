import Script from 'next/script';

import '@root/global.scss';

import DefaultLayout from '@components/DefaultLayout';

export async function generateMetadata({ params, searchParams }) {
  const title = 'Hello world';
  const description = 'Time to build your website.';
  const url = 'http://localhost:3005';
  const handle = '@internetxstudio';

  return {
    title,
    description,
    url,
    openGraph: {
      title,
      description,
      url,
      // SUMMARY_LARGE_IMAGE: 1500x785
      images: [''],
    },
    twitter: {
      title,
      description,
      url,
      handle,
      cardType: 'summary_large_image',
    },
  };
}

export default async function Page(props) {
  return (
    <DefaultLayout>
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
    </DefaultLayout>
  );
}
