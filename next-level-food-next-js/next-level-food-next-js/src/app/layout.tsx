import type { Metadata } from 'next';

import './globals.css';
import { MainHeader } from '@/components/header';

export const metadata: Metadata = {
  title: 'Next Level Food',
  description: 'Share your best food experience.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <MainHeader />

        {children}
      </body>
    </html>
  );
}
