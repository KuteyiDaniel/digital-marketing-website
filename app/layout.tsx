import { DM_Sans, Montserrat, Nunito, Urbanist, Work_Sans, Lexend } from 'next/font/google';
import "./globals.css";
import NavigationBar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-primary',
  display: 'swap',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-secondary',
  display: 'swap',
});

const nunito = Nunito({
  subsets: ['latin'],
  variable: '--font-tertiary',
  display: 'swap',
});

const urbanist = Urbanist({
  subsets: ['latin'],
  variable: '--font-urbanist',
  display: 'swap',
});

const workSans = Work_Sans({
  subsets: ['latin'],
  variable: '--font-work-sans',
  display: 'swap',
});

const lexend = Lexend({
  subsets: ['latin'],
  variable: '--font-lexend',
  display: 'swap',
});


export const metadata = {
  title: "The Assisials",
  description: "Boost Your Brand with Creative Solutions",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${dmSans.variable} ${montserrat.variable} ${nunito.variable} ${urbanist.variable} ${workSans.variable} ${lexend.variable}`}>
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body>
        <NavigationBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
