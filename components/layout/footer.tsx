"use client"

import type React from "react"
import Link from "next/link"
import { Facebook, Instagram, Twitter, MapPin, Phone, ShoppingBag } from "lucide-react"
import { NarudaLogo } from "@/components/brand/naruda-mark"
import { BRAND_GREEN, LEGAL_LINKS, SITE, SOCIALS } from "@/lib/site"

function TikTokIcon({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} style={style} aria-hidden="true">
      <path d="M16.6 5.82A4.28 4.28 0 0 1 15.54 3h-3.09v12.4a2.59 2.59 0 0 1-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6 0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64 0 3.33 2.76 5.7 5.69 5.7 3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3s-1.88.09-3.24-1.48z" />
    </svg>
  )
}

const socialLinks = [
  { href: SOCIALS.facebook, icon: Facebook, label: "Facebook" },
  { href: SOCIALS.instagram, icon: Instagram, label: "Instagram" },
  { href: SOCIALS.tiktok, icon: TikTokIcon, label: "TikTok" },
  { href: SOCIALS.x, icon: Twitter, label: "X (Twitter)" },
]

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/#flavours", label: "Flavours" },
  { href: "/#about", label: "About" },
  { href: "/#team", label: "Team" },
  { href: "/#contact", label: "Contact" },
]

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" aria-label="Naruda home">
              <NarudaLogo />
            </Link>
            <p className="mt-4 text-muted-foreground text-sm max-w-xs leading-relaxed">
              {SITE.tagline} Premium botanical teas crafted in Jos, Plateau State — sipped worldwide.
            </p>
            <div className="flex items-center gap-4 mt-6">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-secondary transition-colors hover:bg-opacity-10"
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#1F4D3A20")}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "")}
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" style={{ color: BRAND_GREEN }} />
                </Link>
              ))}
            </div>
            <div className="mt-4">
              <Link
                href={`mailto:${SITE.email}`}
                className="text-sm transition-colors hover:underline"
                style={{ color: BRAND_GREEN }}
              >
                {SITE.email}
              </Link>
            </div>
          </div>

          {/* Pages */}
          <div>
            <h4 className="text-sm font-semibold mb-4">Pages</h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Visit */}
          <div>
            <h4 className="text-sm font-semibold mb-4">Visit & Call</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: BRAND_GREEN }} />
                {SITE.address}
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: BRAND_GREEN }} />
                {SITE.phones.join(" · ")}
              </li>
              <li className="flex items-start gap-2">
                <ShoppingBag className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: BRAND_GREEN }} />
                Online checkout coming soon
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mt-16 pt-8 border-t border-border">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6">
            {LEGAL_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
