import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'DataInsights Blog - Marketing & Sales Insights',
  description: 'Get the latest articles on data-driven marketing, sales strategies, and business growth.',
  openGraph: {
    images: [
      {
        url: 'http://localhost:3000',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: [
      {
        url: 'http://localhost:3000',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen bg-white">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
