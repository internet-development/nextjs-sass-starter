import Script from 'next/script';
import Package from '@root/package.json';
import { headers } from 'next/headers';

import '@root/global.scss';

import DefaultLayout from '@components/DefaultLayout';
import ListItem from '@components/ListItem';

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
      <div>
        Explore the array of templates offered by{' '}
        <a href="https://github.com/internet-development/nextjs-sass-starter" target="_blank">
          nextjs-sass-starter
        </a>
        , designed to kick-start your upcoming projects. These templates serve as an ideal foundation, and some even feature real APIs that you can access and integrate if they
        meet your project's needs.
      </div>
      <div>
        <ListItem href="/examples">[navigation] [hero section]</ListItem>
        <ListItem href="/examples/full-section">[navigation] [full dvh sections]</ListItem>
        <ListItem href="/examples/half-section">[navigation] [½ dvh sections]</ListItem>
        <ListItem href="/examples/no-sections">[navigation] [naked components]</ListItem>
        <ListItem href="/examples/forms">[navigation] [form components]</ListItem>
        <ListItem href="/examples/table">[navigation] [table component]</ListItem>
        <ListItem href="/examples/post">[navigation] [blog post] [footer]</ListItem>
        <ListItem href="/examples/empty-application-template-page">Empty application template page</ListItem>
        <ListItem href="/examples/authentication">Authentication to API key</ListItem>
        <ListItem href="/examples/files">File management (with AWS S3 presigned URL)</ListItem>
        <ListItem href="/examples/invoices">Invoice management</ListItem>
        <ListItem href="/examples/statement-of-work">Statement of Work management</ListItem>
        <ListItem href="/examples/settings">[WIP] Settings</ListItem>
        <ListItem href="/examples/services">Services</ListItem>
      </div>
      <div style={{ marginTop: 64 }}>
        Are you new to web development and want to work alongside the <a href="https://internet.dev">Internet Development Studio</a> team?
      </div>
      <div>
        <ListItem href="https://github.com/internet-development/nextjs-sass-starter/issues/2">Part I ➝ Setting up SSH keys locally (MacOS)</ListItem>
        <ListItem href="https://github.com/internet-development/nextjs-sass-starter/issues/3">Part II ➝ The software we recommend for web development (MacOS)</ListItem>
        <ListItem href="https://github.com/internet-development/nextjs-sass-starter/issues/4">[WIP] Part III ➝ The anatomy of a nextjs-sass-starter</ListItem>
        <ListItem href="https://github.com/internet-development/nextjs-sass-starter/issues/5">Part IV ➝ Accounts, grants, organizations, and data upload</ListItem>
        <ListItem href="https://github.com/internet-development/nextjs-sass-starter/issues/6">[WIP] Part V ➝ Additional endpoints</ListItem>
      </div>
    </DefaultLayout>
  );
}
