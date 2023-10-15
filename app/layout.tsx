import { Inter } from 'next/font/google';
import type { Metadata } from 'next';

import Navbar from './Navbar';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

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
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
