import styles from './Footer.module.scss';

export interface FooterProps {
  className?: string;
}

export default function Footer({ className }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={className ? `${styles.footer} ${className}` : styles.footer}>
      <p className={styles.copyright}>&copy; {currentYear}</p>
    </footer>
  );
}
