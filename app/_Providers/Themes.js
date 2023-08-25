'use client'

import { ThemeProvider } from 'next-themes'

export default function Themes({ children }) {
  return <ThemeProvider 
  disableTransitionOnChange 
  resolvedTheme={false}
  enableSystem={false}
  systemTheme='light'
  >

    {children}
    </ThemeProvider>
}


