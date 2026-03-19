import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Updaze News Demo',
  description: 'Static Next.js demo news site deployed to GitHub Pages under /demo.'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen">{children}</div>
      </body>
    </html>
  );
}
