import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css';
import { Theme } from '@radix-ui/themes';
import { ThemeProvider } from 'next-themes';
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono';
import { Providers } from './providers';
export const metadata: Metadata = {
  title: 'HarjjotSinghh',
  description: 'Portfolio website for Harjot Singh',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <html lang="en" suppressHydrationWarning className={`${GeistSans.variable} ${GeistMono.variable}`} data-theme="dark">
        <body>
          <Providers>
            {children}
          </Providers>
        </body>
      </html>
    </>
    
  )
}
