
import './globals.scss'
import type { ReactNode } from 'react'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import StyledComponentsRegistry from '@/lib/registry';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div style={{ textAlign: 'center', padding: '21px 0'}}>
          Menu:{' '}
          <Link href="/">home</Link>{' '}|{' '}
          <Link href="/another">another</Link>{' '}|{' '}
          <Link href="/separate">separate</Link>{' '}|{' '}
          <Link href="/style-changes">style changes</Link>{' '}
        </div>
        <StyledComponentsRegistry>
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
