import Link from "next/link"
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react"
import { BRAND_GRADIENT, BRAND_GREEN, SITE, whatsappLink } from "@/lib/site"

export function Contact() {
  return (
    <section id="contact" className="py-20 border-border md:py-20 border-t-0">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm text-muted-foreground uppercase tracking-wider mb-6">Order & Wholesale</p>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-balance">
            Ready for your next cup?
          </h2>

          <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
            Order a box, stock your shelves, or supply your hotel or café. Message us on WhatsApp and our team will
            confirm your order and delivery. Online checkout is coming soon.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
            <Link
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-medium text-white rounded-full transition-all hover:shadow-2xl relative overflow-hidden group"
              style={{
                background: BRAND_GRADIENT,
                boxShadow: "0 8px 32px rgba(31, 77, 58, 0.4)",
              }}
            >
              <span className="relative z-10 inline-flex items-center gap-2">
                Order on WhatsApp
                <ArrowUpRight className="w-4 h-4" />
              </span>
              {/* Glow effect on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-2xl bg-gradient-to-r from-[#1F4D3A] to-[#3B6E47]" />
            </Link>
            <Link
              href={`mailto:${SITE.email}?subject=${encodeURIComponent("Wholesale enquiry")}`}
              className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-full hover:bg-secondary transition-colors"
              style={{ borderColor: BRAND_GREEN, borderWidth: "1px", color: BRAND_GREEN }}
            >
              Wholesale Enquiry
            </Link>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-8 mt-12 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-2 whitespace-nowrap">
              <Phone className="w-4 h-4" style={{ color: BRAND_GREEN }} />
              {SITE.phones.join(" · ")}
            </span>
            <a href={`mailto:${SITE.email}`} className="inline-flex items-center gap-2 hover:text-foreground transition-colors">
              <Mail className="w-4 h-4" style={{ color: BRAND_GREEN }} />
              {SITE.email}
            </a>
            <span className="inline-flex items-center gap-2">
              <MapPin className="w-4 h-4" style={{ color: BRAND_GREEN }} />
              {SITE.address}
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
