import styles from '@system/SkipLink.module.scss';

import * as React from 'react';

export interface SkipLinkProps {
  /** The ID of the target element to skip to. Defaults to 'main-content'. */
  targetId?: string;
  /** Custom link text. Defaults to 'Skip to main content'. */
  children?: React.ReactNode;
}

/**
 * SkipLink - Accessibility component for keyboard navigation.
 *
 * Provides a mechanism to bypass repeated navigation blocks, satisfying
 * WCAG 2.1 Success Criterion 2.4.1 (Bypass Blocks) at Level A.
 *
 * The link is visually hidden until focused via keyboard (Tab key),
 * then appears at the top-left of the viewport. Activating it moves
 * focus to the main content area.
 *
 * Note: The target element must be focusable (e.g., via tabIndex={-1})
 * to properly receive keyboard focus when the skip link is activated.
 *
 * @example
 * // Basic usage (renders as first child in Navigation)
 * <SkipLink />
 *
 * @example
 * // Custom target and text
 * <SkipLink targetId="content">Skip to content</SkipLink>
 */
export default function SkipLink({ targetId = 'main-content', children = 'Skip to main content' }: SkipLinkProps) {
  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    const target = document.getElementById(targetId);
    if (target) {
      // Prevent default only if we can handle focus programmatically
      event.preventDefault();
      target.focus();
      // Also scroll into view for visual users
      target.scrollIntoView();
    }
    // If target doesn't exist, let the default anchor behavior work
  };

  return (
    <a
      href={`#${targetId}`}
      className={styles.skipLink}
      onClick={handleClick}
      aria-label="Skip navigation, go to main content"
    >
      {children}
    </a>
  );
}

