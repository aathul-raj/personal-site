import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "athul suresh",
  description: "tamu junior studying applied math and cs. exploring ai and building full-stack projects. check out my work with machine learning, web development, and startups.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
