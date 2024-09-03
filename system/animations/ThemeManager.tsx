'use client';

import { createContext, useEffect, useState } from 'react';

interface ThemeContextType {
  theme: string;
  updateTheme: (newTheme: THEME_TYPES) => void;
}

export enum THEME_TYPES {
  THEME_LIGHT = 'theme-light',
  THEME_DARK = 'theme-dark',
  THEME_DAYBREAK = 'theme-daybreak',
  THEME_BLUE = 'theme-blue',
  THEME_NEON_GREEN = 'theme-neon-green',
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const getThemeColor = (theme: THEME_TYPES) => {
  switch (theme) {
    case THEME_TYPES.THEME_LIGHT:
      return {
        background: 'var(--color-white)',
        text: 'var(--color-black-100)',
      };

    case THEME_TYPES.THEME_DARK:
      return {
        background: 'var(--color-black-100)',
        text: 'var(--color-white)',
      };
    case THEME_TYPES.THEME_DAYBREAK:
      return {
        background: 'var(--color-black-daybreak-100)',
        text: 'var(--color-daybreak)',
      };
    case THEME_TYPES.THEME_BLUE:
      return {
        background: 'var(--color-blue-80)',
        text: 'var(--color-blue-10)',
      };
    case THEME_TYPES.THEME_NEON_GREEN:
      return {
        background: 'var(--color-neon-green-100)',
        text: 'var(--color-neon-green-70)',
      };
    // (@xBalbinus): default to light theme
    default:
      return {
        background: 'var(--color-white)',
        text: 'var(--color-black-100)',
      };
  }
};

export type ThemeType = keyof typeof THEME_TYPES;

export function determineTheme(context, themePathMap, desiredTheme) {
  const currentUrl = new URL(`http://${context.req.headers.host}${context.req.url}`);
  const refererUrl = context.req.headers.referer ? new URL(context.req.headers.referer) : null;

  if (refererUrl && refererUrl.pathname === currentUrl.pathname) {
    // (@xBalbinus): If the referer URL is the same as the current URL, use the newTheme directly
    return desiredTheme;
  } else {
    // (@xBalbinus): Otherwise, determine the theme based on the referer
    const pathSegments = currentUrl.pathname.split('/');
    let lastSegment = pathSegments[pathSegments.length - 1];
    // (@xBalbinus): NextJS sometimes appends .json to the URL for page routes.
    // This check ensures that we correctly identify the last segment of the path without the .json extension.
    if (lastSegment.endsWith('.json')) {
      lastSegment = lastSegment.replace('.json', '');
    }
    return themePathMap[lastSegment] || desiredTheme;
  }
}

export function useTheme(initialTheme?: any, newTheme?: any) {
  const [theme, setTheme] = useState<ThemeType>(initialTheme || newTheme);

  useEffect(() => {
    const setThemeClass = (theme) => {
      Object.values(THEME_TYPES).forEach((themeType) => {
        if (document.body.classList.contains(themeType)) {
          document.body.classList.replace(themeType, theme);
        }
      });
    };

    if (theme) {
      setThemeClass(theme);
    }

    if (newTheme && newTheme !== theme) {
      setThemeClass(newTheme);
      setTheme(newTheme);
    }
  }, [theme, newTheme]);

  const updateTheme = (newTheme) => {
    if (newTheme === theme) return;
    setTheme(newTheme);
    Object.values(THEME_TYPES).forEach((themeType) => {
      document.body.classList.remove(themeType);
    });
    document.body.classList.add(newTheme);
  };

  return { theme, updateTheme };
}
