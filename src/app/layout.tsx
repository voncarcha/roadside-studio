import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Roadside Studio - Band Rehearsal Studio",
  description:
    "Professional music recording studio offering high-quality recording sessions, jam spaces, and music production services. Perfect for bands, solo artists, and musicians looking to create their next hit.",
  keywords:
    "music studio, recording studio, jam sessions, band recording, music production, rehearsal space, audio recording, mixing, mastering",
  openGraph: {
    title: "Roadside Studio - Band Rehearsal Studio",
    description:
      "Professional music recording studio offering high-quality recording sessions, jam spaces, and music production services. Perfect for bands, solo artists, and musicians looking to create their next hit.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Roadside Studio - Band Rehearsal Studio",
    description:
      "Professional music recording studio offering high-quality recording sessions, jam spaces, and music production services. Perfect for bands, solo artists, and musicians looking to create their next hit.",
  },
  robots: {
    index: true,
    follow: true,
  },
  authors: [{ name: "Roadside Studio" }],
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
