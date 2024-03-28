import type { Metadata } from 'next';
import { Maven_Pro } from 'next/font/google';
import './globals.css';

const maven_pro = Maven_Pro({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Jay Prakash Pathak',
  description: "I'm a full stack developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={maven_pro.className}>{children}</body>
    </html>
  );
}
