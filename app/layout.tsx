import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'programming for everyone event',
  description: 'programming for everyone event',
  generator: 'next.js',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
