import styles from '@demos/DemoSettingsSidebar.module.scss';

import * as React from 'react';

import ActionItem from '@system/documents/ActionItem';

const SUB_SECTION_LINKS = {
  DOCUMENTS: 'Documents',
  CHANGE_PASSWORD: 'Change password',
  CONTENT: 'Content',
  CREDITS: 'Credits',
  PURCHASE: 'Purchase services',
  END: 'End services',
  DELETE: 'Delete account',
};

export default function DemoSettingsSidebar(props) {
  return (
    <div className={styles.root}>
      <ActionItem icon={`⭢`} active={props.active === 'PERSONAL'} href="/examples/features/settings">
        Settings
      </ActionItem>
      <ActionItem icon={`⭢`} active={props.active === 'CHANGE_PASSWORD'} href="/examples/features/settings/change-password">
        {SUB_SECTION_LINKS['CHANGE_PASSWORD']}
      </ActionItem>
      <ActionItem icon={`⭢`} active={props.active === 'DOCUMENTS'} href="/examples/features/settings/documents">
        {SUB_SECTION_LINKS['DOCUMENTS']}
      </ActionItem>
      <ActionItem icon={`⭢`} active={props.active === 'CONTENT'} href="/examples/features/settings/content">
        {SUB_SECTION_LINKS['CONTENT']}
      </ActionItem>
      <ActionItem icon={`⭢`} active={props.active === 'CREDITS'} href="/examples/features/settings/credits">
        {SUB_SECTION_LINKS['CREDITS']}
      </ActionItem>
      <ActionItem icon={`⭢`} active={props.active === 'PURCHASE'} href="/examples/features/services">
        {SUB_SECTION_LINKS['PURCHASE']}
      </ActionItem>
      {props.viewer ? (
        <ActionItem icon={`⭢`} active={props.active === 'END'} href="/examples/features/settings/end-services">
          {SUB_SECTION_LINKS['END']}
        </ActionItem>
      ) : null}
      {props.viewer ? (
        <ActionItem icon={`⭢`} active={props.active === 'DELETE'} href="/examples/features/settings/delete-account">
          {SUB_SECTION_LINKS['DELETE']}
        </ActionItem>
      ) : null}
    </div>
  );
}
