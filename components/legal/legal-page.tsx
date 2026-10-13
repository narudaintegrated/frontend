import Link from "next/link"
import { ArrowLeft, Mail, MapPin, Phone } from "lucide-react"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { LEGAL_PAGES, type LegalSlug } from "@/lib/legal"
import { BRAND_GREEN, SITE } from "@/lib/site"

export function LegalPageView({ slug }: { slug: LegalSlug }) {
  const page = LEGAL_PAGES[slug]

  return (
    <>
      <Header />
      <main className="pt-32 md:pt-40 pb-20 md:pb-32">
        <div className="max-w-3xl mx-auto px-6 md:px-12">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium mb-10"
            style={{ color: BRAND_GREEN }}
          >
            <ArrowLeft className="w-4 h-4" />
            Back to home
          </Link>

          <h1 className="section-title-animate text-4xl md:text-5xl font-semibold tracking-tight">{page.title}</h1>

          <div className="mt-12 space-y-10">
            {page.sections.map((section) => (
              <section key={section.heading}>
                <h2 className="text-xl font-semibold">{section.heading}</h2>
                <p className="mt-3 text-muted-foreground leading-relaxed">{section.body}</p>
              </section>
            ))}
          </div>

          <div className="mt-14 p-6 bg-secondary rounded-2xl space-y-3 text-sm text-muted-foreground">
            <p className="flex items-center gap-3">
              <Mail className="w-4 h-4 flex-shrink-0" style={{ color: BRAND_GREEN }} />
              {SITE.email}
            </p>
            <p className="flex items-center gap-3">
              <Phone className="w-4 h-4 flex-shrink-0" style={{ color: BRAND_GREEN }} />
              {SITE.phones.join(" · ")}
            </p>
            <p className="flex items-center gap-3">
              <MapPin className="w-4 h-4 flex-shrink-0" style={{ color: BRAND_GREEN }} />
              {SITE.address}
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
