import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    template: '%s - JOIN SLD',
    default: 'JOIN SLD ! Telegram Group Invite',
  },
  description:
    'Gabung ke komunitas eksklusif kami di Telegram! Dapatkan informasi terkini, berbagi wawasan, dan koneksi dengan anggota lain melalui proses pendaftaran yang mudah, cepat, dan aman.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='id' data-theme='corporate'>
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <Navbar />
        <main className='flex-grow bg-base-200'>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
