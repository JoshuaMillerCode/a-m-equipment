import "./globals.css"
import { Inter } from "next/font/google"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Banner from "./components/Banner"
import type React from "react" // Added import for React


const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "A&M Equipment",
  description: "Leading manufacturer of high-quality valves for various industries",
  
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={inter.className}>
        <Banner />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

