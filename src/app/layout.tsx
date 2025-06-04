import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Rockland Chess Club | Chess Community in Rockland County",
  description: "Join the Rockland Chess Club - a welcoming chess community for players of all skill levels. Events, classes, tournaments, and casual play in Rockland County, NY.",
  keywords: "chess club, Rockland County, chess lessons, chess tournaments, chess community, New York chess",
  openGraph: {
    title: "Rockland Chess Club",
    description: "A welcoming chess community for players of all skill levels",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
