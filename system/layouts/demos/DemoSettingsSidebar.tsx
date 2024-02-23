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
  DELETE: 'Delete account',
};

export default function DemoSettingsSidebar(props) {
  return (
    <div className={styles.root}>
      <ActionItem icon={`⭢`} active={props.active === 'PERSONAL'} href="/examples/settings">
        Settings
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
      <ActionItem icon={`⭢`} active={props.active === 'PURCHASE'} href="/examples/services">
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
    </div>
  );
}
