// import Link from 'next/link';
'use client';

import { useTranslations } from 'next-intl';
import { ThemeProvider } from '@mui/system';
import theme from '@/app/theme';

export default function Layout(props: { children: React.ReactNode }) {
  const t = useTranslations('RootLayout');

  return (
    <ThemeProvider theme={theme}>
      {props.children}
    </ThemeProvider>
  );
}
