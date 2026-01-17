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
  /**
   * Handles click on the skip link.
   * 
   * Note: document.getElementById is safe here because onClick only fires
   * in the browser (client-side). Adding a defensive check for future-proofing
   * if this logic is ever refactored to run during SSR.
   */
  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (typeof document === 'undefined') return;
    
    const target = document.getElementById(targetId);
    if (target) {
      // Prevent default only if we can handle focus programmatically
      event.preventDefault();
      target.focus();
      // Ensure consistent scroll behavior across all browsers.
      // Using 'nearest' to avoid jarring scroll if main-content is already mostly visible.
      // While focus() often scrolls the element into view, this is not
      // guaranteed in all browsers (especially for elements with tabIndex={-1}).
      target.scrollIntoView({ block: 'nearest' });
    }
    // If target doesn't exist, let the default anchor behavior work
  };

  return (
    <a
      href={`#${targetId}`}
      className={styles.skipLink}
      onClick={handleClick}
    >
      {children}
    </a>
  );
}

