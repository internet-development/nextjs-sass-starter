import styles from '@system/SkipToContent.module.scss';

export default function SkipToContent(props) {
  const targetId = props.targetId || 'main-content';

  return (
    <a className={styles.root} href={`#${targetId}`}>
      Skip to main content
    </a>
  );
}

