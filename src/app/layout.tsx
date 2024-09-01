import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
          <Link href={'/'}>Job Board</Link>
        </header>
        <nav>
         <Link href={'/login'}>Login</Link>
         <Link href={'/post'}>Post</Link>

        </nav>
        {children}
        </body>
    </html>
  );
}
