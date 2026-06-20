import './globals.css';
import './responsive.css';
import { ThemeProvider } from '@/context/ThemeContext';
import { LanguageProvider } from '@/context/LanguageContext';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ScrollProgress from '@/components/ui/ScrollProgress';

export const metadata = {
  title: 'Sankassapura Buddhist Temple | Berlin, Germany',
  description:
    'Sankassapura Buddhist Temple — A sacred sanctuary of peace, wisdom, and compassion in Berlin, Germany. Offering Dhamma teachings, meditation programs, Poya observances, and cultural events for the Sri Lankan Buddhist community.',
  keywords:
    'Buddhist temple Berlin, Sri Lankan temple Germany, Theravada Buddhism, meditation classes Berlin, Dhamma school, Buddhist events Germany',
  openGraph: {
    title: 'Sankassapura Buddhist Temple',
    description: 'A sacred sanctuary of peace, wisdom and compassion in Berlin, Germany.',
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
