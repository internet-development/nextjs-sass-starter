import React from 'react';
import Loader from '@components/clients/nova/Loader';
import ArrowRightSVG from './svgs/ArrowRightSVG';
import { classNames } from '@root/common/utilities';

import buttonStyles from './Button.module.scss';

export const enum ButtonStyleEnum {
  BLACK = 'black',
  GREEN = 'green',
}

function getButtonStyle(style, withArrow) {
  switch (style) {
    case ButtonStyleEnum.BLACK:
      return withArrow ? classNames(buttonStyles.buttonStyleBlackWithArrow, buttonStyles.button) : classNames(buttonStyles.buttonStyleBlack, buttonStyles.button);
    case ButtonStyleEnum.GREEN:
    default:
      return withArrow ? classNames(buttonStyles.buttonStyleGreenWithArrow, buttonStyles.button) : classNames(buttonStyles.buttonStyleGreen, buttonStyles.button);
  }
}

export interface ButtonProps {
  children: any;
  className?: string;
  style?: ButtonStyleEnum;
  styles?: any;
  target?: any;
  type?: any;
  disabled?: boolean;
  withArrow?: boolean;
  loading?: boolean;
  href?: string;
  onClick?: () => void;
}

export default function Button({
  children,
  className,
  disabled,
  style = ButtonStyleEnum.GREEN,
  styles,
  target,
  type,
  withArrow,
  loading,
  href,
  onClick,
}: ButtonProps) {
  if (loading) {
    return (
      <div className={buttonStyles.loader} style={styles}>
        <Loader />
      </div>
    );
  }

  const buttonClass = getButtonStyle(style, withArrow);
  const buttonContent = (
    <>
      <span className={withArrow ? buttonStyles.buttonText : ''}>{children}</span>
      {withArrow && <ArrowRightSVG className={buttonStyles.arrowIcon} />}
    </>
  );

  if (href) {
    return <a href={href} className={classNames(buttonStyles.root, buttonClass, className)} style={styles} target={target} onClick={onClick}>{buttonContent}</a>;
  }

  return (
    <button
      style={styles}
      type={type}
      disabled={disabled}
      className={classNames(buttonStyles.root, buttonClass, className)}
      onClick={onClick}
    >
      {buttonContent}
    </button>
  );
}
