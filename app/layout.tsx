import '@radix-ui/themes/styles.css';
import './globals.css';
import './theme-config.css';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { Theme } from '@radix-ui/themes';

import Navbar from './Navbar';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Issue Tracker',
  description:
    'Ship great software with automated bugtracking. A simple, fast and scalable bug tracking system that helps you manage bugs easily and deliver great products on time.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        <Theme appearance="light" accentColor="purple">
          <Navbar />
          <main className="p-5">{children}</main>
        </Theme>
      </body>
    </html>
  );
}
