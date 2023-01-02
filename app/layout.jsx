

import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'

export default function RootLayout({ children }) {

  return (
    <html lang="en">



      <body>
        <Header />
        <main className="py-28 h-max bg-[url('../public/assets/cookies.jpg')]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
