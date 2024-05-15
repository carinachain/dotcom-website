// import Link from 'next/link';
'use client';

import { ThemeProvider } from '@mui/system';
import theme from '@/app/theme';
import React from 'react';
import Header from './compontents/header';
import Footer from './compontents/footer';

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <main className="min-h-screen">
        <Header></Header>
        {props.children}
        <Footer></Footer>
      </main>
    </ThemeProvider>
  );
}
