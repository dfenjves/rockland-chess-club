import type { Metadata } from "next";
import { Playfair_Display, Libre_Baskerville } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-baskerville",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rockland County Chess Club | Chess Community in Rockland County",
  description: "Join the Rockland County Chess Club - a welcoming chess community for players of all skill levels. Events, classes, tournaments, and casual play in Rockland County, NY.",
  keywords: "chess club, Rockland County, chess lessons, chess tournaments, chess community, New York chess",
  openGraph: {
    title: "Rockland County Chess Club",
    description: "A welcoming chess community for players of all skill levels",
    type: "website",
    locale: "en_US",
  },
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script 
          src="https://zeffy-scripts.s3.ca-central-1.amazonaws.com/embed-form-script.min.js" 
          async
        ></script>
      </head>
      <body className={`${playfairDisplay.variable} ${libreBaskerville.variable} font-serif antialiased`}>
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        
        {/* Hidden form for Netlify to detect during build */}
        <form name="newsletter-signup" method="POST" data-netlify="true" style={{ display: 'none' }}>
          <input type="hidden" name="form-name" value="newsletter-signup" />
          <input type="email" name="email" />
        </form>
        
      </body>
    </html>
  );
}
