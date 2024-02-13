import styles from '@system/layouts/demos/DemoSettingsSidebar.module.scss';

import * as React from 'react';

import ActionItem from '@system/documents/ActionItem';
import Cookies from 'js-cookie';

const SUB_SECTION_LINKS = {
  DOCUMENTS: 'Documents',
  CONTENT: 'Content',
  CREDITS: 'Credits',
  PURCHASE: 'Purchase services',
  END: 'End services',
  DELETE: 'Delete accoount',
};

export default function DemoSettingsSidebar(props) {
  return (
    <div className={styles.root}>
      <ActionItem icon={`⭠`} href="/">
        Return home
      </ActionItem>
      <ActionItem icon={`⭢`} active={props.active === 'PERSONAL'} href="/examples/settings">
        Your settings
      </ActionItem>
      <ActionItem icon={`⭢`} active={props.active === 'DOCUMENTS'} href="/examples/settings/documents">
        {SUB_SECTION_LINKS['DOCUMENTS']}
      </ActionItem>
      <ActionItem icon={`⭢`} active={props.active === 'CONTENT'} href="/examples/settings/content">
        {SUB_SECTION_LINKS['CONTENT']}
      </ActionItem>
      <ActionItem icon={`⭢`} active={props.active === 'CREDITS'} href="/examples/settings/credits">
        {SUB_SECTION_LINKS['CREDITS']}
      </ActionItem>
      <ActionItem icon={`⭢`} active={props.active === 'PURCHASE'} href="/examples/settings/purchase">
        {SUB_SECTION_LINKS['PURCHASE']}
      </ActionItem>
      {props.viewer ? (
        <ActionItem icon={`⭢`} active={props.active === 'END'} href="/examples/settings/end-services">
          {SUB_SECTION_LINKS['END']}
        </ActionItem>
      ) : null}
      {props.viewer ? (
        <ActionItem icon={`⭢`} active={props.active === 'DELETE'} href="/examples/settings/delete-account">
          {SUB_SECTION_LINKS['DELETE']}
        </ActionItem>
      ) : null}
      {props.viewer ? (
        <ActionItem
          icon={`⭠`}
          onClick={() => {
            const confirm = window.confirm('Are you sure you want to sign out? You will manually have to enter your API key again.');
            if (!confirm) {
              return;
            }
            props.onSetKey('');
            Cookies.remove('sitekey');
            window.location.reload();
          }}
        >
          Sign out
        </ActionItem>
      ) : null}
    </div>
  );
}
