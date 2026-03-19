import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Updaze x Sebenza Admin Portal',
  description: 'Role-based admin portal for news publishing and recruitment management.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
