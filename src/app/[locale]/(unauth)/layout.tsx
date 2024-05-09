// import Link from 'next/link';
'use client';

import { ThemeProvider } from '@mui/system';
import theme from '@/app/theme';

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      {props.children}
    </ThemeProvider>
  );
}
