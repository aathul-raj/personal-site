import type { Metadata } from "next";
import "./globals.css";

const description =
  "Athul Suresh — a computer programmer who specializes in building systems that solve hard problems for lots of people.";

export const metadata: Metadata = {
  metadataBase: new URL("https://athulrs.com"),
  title: {
    default: "Athul Suresh",
    template: "%s · Athul Suresh",
  },
  description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Athul Suresh",
    description,
    url: "/",
    siteName: "Athul Suresh",
    type: "website",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 1200,
        alt: "The Pillars of Creation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Athul Suresh",
    description,
    images: ["/og.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
