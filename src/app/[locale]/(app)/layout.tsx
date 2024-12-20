// import Link from 'next/link';

'use client';

import { ThemeProvider } from '@mui/system';
import React from 'react';

import theme from '@/app/theme';

import Footer from './components/footer';
import Header from './components/header';

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <main className="min-h-screen">
        <div>
          <Header />
        </div>
        <div className="pt-[110px]">{props.children}</div>
        <div>
          <Footer />
        </div>
      </main>
    </ThemeProvider>
  );
}
