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
import Footer from '@/components/footer';

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
            <div className='fixed lg:top-8 lg:left-8 right-4 top-4 w-fit h-fit z-[10001]'>
              <ThemeSwitcher></ThemeSwitcher>
            </div>
            <SideNavbar></SideNavbar>
            {children}
            <Footer/>
          </Providers>
        </body>
      </html>
    </>
    
  )
}
