import './globals.css' ;
import { Inter } from 'next/font/google' ;
import 'bootstrap/dist/css/bootstrap.min.css' ;
import Navbar from '../components/navbar';
import Footer from '@/components/footer';




const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'InvestCheque | Home',
  description: 'A simple platform for stock market',
  icons: {icon: '/svg_img/banner.png'}
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      
      <Navbar></Navbar>
      {children}
      <Footer>
      
      </Footer>
      </body>
    </html>
  )
}
