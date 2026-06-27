import './globals.css';
import './responsive.css';
import { ThemeProvider } from '@/context/ThemeContext';
import { LanguageProvider } from '@/context/LanguageContext';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ScrollProgress from '@/components/ui/ScrollProgress';

export const metadata = {
  title: 'Sankassapura Sri Sambuddharaja Buddhist Mansion',
  description:
    'Sankassapura Sri Sambuddharaja Buddhist Mansion',
  keywords:
    'Sankassapura Sri Sambuddharaja Buddhist Mansion, Theravada Buddhism, meditation classes London, Dhamma school.',
  openGraph: {
    title: 'Sankassapura Sri Sambuddharaja Buddhist Mansion',
    description: 'Sankassapura Sri Sambuddharaja Buddhist Mansion',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Inter:wght@300;400;500;600;700&family=Noto+Sans+Sinhala:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <ThemeProvider>
          <LanguageProvider>
            <ScrollProgress />
            <Navbar />
            <main>{children}</main>
            <Footer />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
