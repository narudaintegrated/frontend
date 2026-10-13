import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter_Tight, Geist_Mono } from "next/font/google"
import { MagneticCursor } from "@/components/ui/magnetic-cursor"
import { SITE } from "@/lib/site"
import "./globals.css"

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter-tight",
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
})

const title = "Naruda Integrated Limited — Botanical Teas, Delivered Worldwide"
const description =
  "Natural. Healthy. Nigerian. Premium hibiscus, mint, moringa and specialty teas crafted in Jos, Plateau State — delivered anywhere in the world."

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title,
  description,
  keywords: ["Naruda", "zobo tea", "hibiscus tea", "mint tea", "moringa tea", "Nigerian tea", "Jos", "Plateau State"],
  authors: [{ name: SITE.name }],
  openGraph: {
    title,
    description,
    type: "website",
    images: [{ url: "/images/og.jpg", width: 1200, height: 628, alt: "The Naruda tea family" }],
  },
  twitter: { card: "summary_large_image", title, description, images: ["/images/og.jpg"] },
}

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${interTight.className} ${interTight.variable} ${geistMono.variable} font-sans antialiased`}>
        <MagneticCursor />
        {children}
      </body>
    </html>
  )
}
