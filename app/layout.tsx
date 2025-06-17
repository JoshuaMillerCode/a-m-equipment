import "./globals.css"
import { Inter } from "next/font/google"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Banner from "./components/Banner"
import type React from "react" // Added import for React
import { Toaster } from "@/components/ui/toaster"


const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "A&M Equipment",
  description: "Leading manufacturer of high-quality valves for various industries",
  icons: {
    icon: [
      { url: '/favicon-for-public/web-app-manifest-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/favicon-for-public/web-app-manifest-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/favicon-for-public/web-app-manifest-192x192.png', sizes: '192x192', type: 'image/png' },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="apple-mobile-web-app-title" content="A&M Equipment" />
      </head>
      <body className={inter.className}>
        <Toaster />
        <Banner />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

