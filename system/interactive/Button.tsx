import styles from './Button.module.scss';

import Loader from '@system/Loader';

export default function Button(props: {
  /** If set, this button will act as a link. */
  href?: string,
  loading?: boolean,
  disabled?: boolean,
  visual?: boolean,
  style?: React.CSSProperties,
  children?: React.ReactNode,
  onClick?: React.MouseEventHandler<HTMLElement>,
}) {
  if (props.visual) {
    return <button children={props.children} style={props.style} className={styles.visual} />;
  }

  if (props.loading) {
    return (
      <div className={styles.loader} style={props.style}>
        <Loader />
      </div>
    );
  }

  if (props.href) {
    return <a className={styles.root} {...props} />;
  }

  return <button children={props.children} className={styles.root} disabled={props.disabled} onClick={!props.visual && props.onClick} style={props.style} />;
}
