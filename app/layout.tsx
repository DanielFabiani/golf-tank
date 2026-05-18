import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import { EVENT } from '@/config/event';
import './globals.css';

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight:  ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-jakarta',
});

export const metadata: Metadata = {
  title:       EVENT.meta.title,
  description: EVENT.meta.description,
  openGraph: {
    title:       EVENT.meta.title,
    description: EVENT.meta.description,
    images:      [EVENT.meta.ogImage],
    type:        'website',
  },
  twitter: {
    card:        'summary_large_image',
    title:       EVENT.meta.title,
    description: EVENT.meta.description,
    images:      [EVENT.meta.ogImage],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${jakarta.variable} scroll-smooth`}>
      <body className="font-sans bg-background text-on-surface antialiased">
        {children}
      </body>
    </html>
  );
}
