import styles from '@demos/modals/Modals.module.scss';

import * as Constants from '@common/constants';
import * as React from 'react';
import * as Utilities from '@common/utilities';

import OutsideElementEvent from '@system/detectors/OutsideElementEvent';

const MODAL_WIDTH = 480;
const MODAL_GUTTER_OFFSET = 24;

import { SubTitle, SubText, UnitLabel } from '@system/typography';

export default function ModalNavigationV2(props) {
  const style = Utilities.calculatePositionWithGutter(props.parentRect, MODAL_WIDTH, window.innerWidth, MODAL_GUTTER_OFFSET);

  return (
    <div className={styles.wrapper}>
      <OutsideElementEvent className={styles.modal} onOutsideEvent={() => props.onShowModal(null)} style={{ top: style.top, right: style.right }}>
        <div className={styles.wideFlexibleModal}>
          <div className={styles.wideFlexibleModalRow}>
            <div className={styles.wideFlexibleModalColumn}>
              <SubText style={{ opacity: 0.4, padding: `4px 16px 4px 16px`, letterSpacing: '0.6' }}>FEATURES</SubText>
              {Constants.TEMPLATE_EXAMPLES_FEATURES.map((each, index) => {
                return (
                  <a className={styles.wideFlexibleModalColumnItem} href={each.href}>
                    {each.label}
                  </a>
                );
              })}
            </div>
            <div className={styles.wideFlexibleModalColumn}>
              <SubText style={{ opacity: 0.4, padding: `4px 16px 4px 16px`, letterSpacing: '0.6' }}>EXAMPLES</SubText>
              {Constants.TEMPLATE_EXAMPLES_COMPONENTS.map((each, index) => {
                return (
                  <a className={styles.wideFlexibleModalColumnItem} href={each.href}>
                    {each.label}
                  </a>
                );
              })}
            </div>
          </div>
          <hr className={styles.divider} />
          <div className={styles.wideFlexibleModalRow}>
            <div className={styles.wideFlexibleModalColumn}>
              <SubText style={{ opacity: 0.4, padding: `4px 16px 4px 16px`, letterSpacing: '0.6' }}>ANIMATION</SubText>
              {Constants.TEMPLATE_EXAMPLES_ANIMATIONS.map((each, index) => {
                return (
                  <a className={styles.wideFlexibleModalColumnItem} href={each.href}>
                    {each.label}
                  </a>
                );
              })}
            </div>
            <div className={styles.wideFlexibleModalColumn}>
              <SubText style={{ opacity: 0.4, padding: `4px 16px 4px 16px`, letterSpacing: '0.6' }}>DESIGN SYSTEM</SubText>
              {Constants.TEMPLATE_EXAMPLES_SYSTEM.map((each, index) => {
                return (
                  <a className={styles.wideFlexibleModalColumnItem} href={each.href}>
                    {each.label}
                  </a>
                );
              })}

              <SubText style={{ opacity: 0.4, padding: `16px 16px 4px 16px`, letterSpacing: '0.6' }}>EMPTY</SubText>
              {Constants.TEMPLATE_EXAMPLES_EMPTY.map((each, index) => {
                return (
                  <a className={styles.wideFlexibleModalColumnItem} href={each.href}>
                    {each.label}
                  </a>
                );
              })}
            </div>
          </div>

          <hr className={styles.divider} />

          <div className={styles.wideFlexibleModalRow}>
            <div className={styles.wideFlexibleModalColumn}>
              <SubText style={{ opacity: 0.4, padding: `4px 16px 4px 16px`, letterSpacing: '0.6' }}>POLICIES</SubText>
              {Constants.TEMPLATE_POSTS.map((each, index) => {
                return (
                  <a className={styles.wideFlexibleModalColumnItem} href={each.href}>
                    {each.label}
                  </a>
                );
              })}
            </div>
            <div className={styles.wideFlexibleModalColumn}>
              <SubText style={{ opacity: 0.4, padding: `4px 16px 4px 16px`, letterSpacing: '0.6' }}>SOCIAL</SubText>
              {Constants.TEMPLATE_LINKS.map((each, index) => {
                return (
                  <a className={styles.wideFlexibleModalColumnItem} href={each.href}>
                    {each.label}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </OutsideElementEvent>
    </div>
  );
}
