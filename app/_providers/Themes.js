'use client'

import { ThemeProvider } from 'next-themes'

export default function Themes({ children }) {
  return <ThemeProvider>{children}</ThemeProvider>
}