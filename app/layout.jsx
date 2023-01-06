'use client';


import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'
import ThemeWrapper from './contexts/theme';

export default function RootLayout({ children }) {

  return (
    <html lang="en">


      <ThemeWrapper>
        <body>
          <Header />
          <main className="dark:bg-[url('../public/assets/cookies-removebg-preview.jpg')] py-28 h-max bg-[url('../public/assets/cookies.jpg')]">
            {children}
          </main>
          <Footer />
        </body>
      </ThemeWrapper>
    </html>
  )
}
