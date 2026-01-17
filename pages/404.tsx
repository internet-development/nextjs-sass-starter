import * as React from 'react';

import Content from '@system/layouts/Content';
import GlobalModalManager from '@system/modals/GlobalModalManager';
import Navigation from '@system/Navigation';
import Page from '@components/Page';
import SectionFullHeight from '@system/sections/SectionFullHeight';

import { H1, Lead } from '@system/typography';

function NotFoundPage(props) {
  return (
    <Page
      title="404 - Page Not Found"
      description="The page you're looking for doesn't exist or has been moved."
      url="https://wireframes.internet.dev/404"
    >
      <Navigation />
      <SectionFullHeight>
        <Content>
          <H1>404</H1>
          <Lead style={{ marginTop: `var(--type-scale-5)` }}>
            This page doesn't exist or has been moved.
          </Lead>
          <Lead style={{ marginTop: `var(--type-scale-5)` }}>
            <a href="/">Go back home</a>
          </Lead>
        </Content>
      </SectionFullHeight>
      <GlobalModalManager />
    </Page>
  );
}

export default NotFoundPage;

