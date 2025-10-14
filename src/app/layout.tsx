import type { Metadata } from "next";
import { Jomhuria, JetBrains_Mono, Instrument_Sans } from "next/font/google";
import HeroBackground from "@/components/background/HeroBackground";
import Header from "@/components/header/Header";
import "@/styles/globals.scss";

const jomhuria = Jomhuria({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-jomhuria",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument-sans",
});

export const metadata: Metadata = {
  title: "Sankassapura Buddhist Mansion",
  description: "The teaching of the Buddha will last long in this world",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${jomhuria.variable} ${jetbrainsMono.variable} ${instrumentSans.variable} relative`}
        style={{ backgroundColor: "#C3E7EF" }}
      >
        <Header />
        <HeroBackground />
        <main>{children}</main>
      </body>
    </html>
  );
}