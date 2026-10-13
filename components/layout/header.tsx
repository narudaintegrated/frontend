"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { NarudaLogo } from "@/components/brand/naruda-mark"
import { BRAND_GRADIENT, BRAND_SHADOW } from "@/lib/site"

const navItems = [
  { href: "#flavours", label: "Flavours" },
  { href: "#about", label: "About" },
  { href: "#benefits", label: "Benefits" },
  { href: "#process", label: "Our process" },
  { href: "#team", label: "Team" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const isHome = usePathname() === "/"

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (!element) {
      // Section links from the legal pages go back to the home page
      window.location.href = `/${href}`
      return
    }
    if (element) {
      const headerOffset = 80 // Height of fixed header
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled ? "bg-background/80 backdrop-blur-md border-b border-border" : "bg-transparent",
        )}
      >
        <div className="max-w-[1280px] mx-auto px-6 md:px-12">
          <nav className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link
              href="/"
              onClick={(e) => {
                if (!isHome) return
                e.preventDefault()
                window.scrollTo({ top: 0, behavior: "smooth" })
              }}
              aria-label="Naruda home"
            >
              <NarudaLogo />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <Link
                href={isHome ? "#contact" : "/#contact"}
                className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium rounded-full text-white transition-all hover:shadow-xl relative overflow-hidden group"
                style={{ background: BRAND_GRADIENT, boxShadow: BRAND_SHADOW }}
              >
                <span className="relative z-10">Order Now</span>
                {/* Glow effect on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl bg-gradient-to-r from-[#1F4D3A] to-[#3B6E47]" />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button onClick={() => setIsMobileMenuOpen(true)} className="md:hidden p-2 -mr-2" aria-label="Open menu">
              <Menu className="w-5 h-5" />
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-background md:hidden">
          <div className="flex flex-col h-full p-6">
            <div className="flex items-center justify-between">
              <Link href="/" aria-label="Naruda home">
                <NarudaLogo />
              </Link>
              <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 -mr-2" aria-label="Close menu">
                <X className="w-5 h-5" />
              </button>
            </div>
            <nav className="flex flex-col gap-6 mt-12">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="text-3xl font-semibold hover:text-muted-foreground transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="mt-auto">
              <Link
                href={isHome ? "#contact" : "/#contact"}
                onClick={() => setIsMobileMenuOpen(false)}
                className="inline-flex items-center justify-center w-full px-5 py-3 text-base font-medium rounded-full text-white transition-all hover:shadow-xl relative overflow-hidden group"
                style={{ background: BRAND_GRADIENT, boxShadow: BRAND_SHADOW }}
              >
                <span className="relative z-10">Order Now</span>
                {/* Glow effect on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl bg-gradient-to-r from-[#1F4D3A] to-[#3B6E47]" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
