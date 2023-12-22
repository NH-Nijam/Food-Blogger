
import { Inter } from 'next/font/google'
import './globals.css'
import Layout from './Layout/Layout'

const inter = Inter({ subsets: ['latin'] })
export const metadata = {
  title: 'NH-Blogger',
  description: 'This is food & drink blogger',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className={`${inter.className} bg-[#F3F6F3]`}>
        <Layout>  
          {children}
        </Layout>
      </body>
    </html>
  )
}
