import { Inter } from 'next/font/google';

import Navbar from '@/components/navbar/NavBar/Navbar';
import Footer from '@/components/footer/Footer/Footer';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: {
    default: 'Stories',
    template: '%s | stories',
  },
  description: 'A nice way to share stories.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="container">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
