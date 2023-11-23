import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css';
import { Theme } from '@radix-ui/themes';
import { ThemeProvider } from 'next-themes';
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono';
import { Providers } from './providers';
import { cn } from '@/lib/utils';
import SideNavbar from '@/components/side-navbar';
import ThemeSwitcher from '@/components/ThemeSwitcher';

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
      <html lang="en" suppressHydrationWarning >
        <body className={cn(GeistSans.className)}>
          <Providers>
            <div className='fixed xl:top-8 xl:left-8 lg:left-4 lg:top-4 bottom-4 right-4 w-fit h-fit'>
              <ThemeSwitcher></ThemeSwitcher>
            </div>
            <SideNavbar></SideNavbar>
            {children}
          </Providers>
        </body>
      </html>
    </>
    
  )
}
