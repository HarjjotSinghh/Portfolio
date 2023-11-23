'use client'

import { ThemeProvider } from 'next-themes'

export function Providers({
    children,
  }: {
    children: React.ReactNode
}) {
  return <ThemeProvider disableTransitionOnChange enableSystem attribute='class' defaultTheme='dark'>{children}</ThemeProvider>
}