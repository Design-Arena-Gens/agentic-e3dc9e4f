import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Frontend Developer Portfolio',
  description: 'Portfolio of a frontend developer with 3 years of experience in React and Angular',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
