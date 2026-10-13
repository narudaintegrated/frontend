"use client"

import { useState } from "react"
import { SectionTitle } from "@/components/ui/section-title"
import { BOTANICALS, PRODUCTS, type ProductPalette } from "@/lib/products"

interface Card {
  id: string
  title: string
  subtitle: string
  body: string
  palette: ProductPalette
}

const benefitCards: Card[] = PRODUCTS.flatMap((product) =>
  product.healthBenefits.map((benefit) => ({
    id: `${product.id}-${benefit}`,
    title: product.name,
    subtitle: product.category,
    body: benefit,
    palette: product.palette,
  })),
)

const ingredientCards: Card[] = BOTANICALS.map((botanical) => ({
  id: botanical.name,
  title: "Botanical",
  subtitle: `In ${botanical.products.map((p) => p.shortName).join(" · ")}`,
  body: botanical.name,
  palette: botanical.products[0].palette,
}))

function BenefitCard({ card }: { card: Card }) {
  const [a, b, c] = card.palette.orb
  return (
    <>
      <div className="flex items-center gap-3 mb-4">
        <span
          className="w-12 h-12 rounded-full flex-shrink-0"
          style={{ background: `linear-gradient(135deg, ${c} 0%, ${b} 45%, ${a} 100%)` }}
          aria-hidden="true"
        />
        <div>
          <div className="font-semibold">{card.title}</div>
          <div className="text-sm text-muted-foreground">{card.subtitle}</div>
        </div>
      </div>

      <p className="text-base leading-relaxed font-semibold text-zinc-950 relative z-10">{card.body}</p>

      <div
        className="absolute -bottom-12 -right-12 w-48 h-48 rounded-full opacity-10"
        style={{ filter: "blur(72px)", backgroundColor: b }}
      />
    </>
  )
}

const cardClass =
  "relative flex-shrink-0 w-[85vw] md:w-[400px] p-6 md:p-8 border bg-card hover:shadow-lg transition-shadow overflow-hidden border-zinc-100 md:px-6 md:py-6 rounded-3xl"

export function Benefits() {
  const [isPaused, setIsPaused] = useState(false)

  const rows = [
    { cards: [...benefitCards, ...benefitCards], className: "animate-scroll-left" },
    { cards: [...ingredientCards, ...ingredientCards], className: "animate-scroll-right" },
  ]
  const mobileCards = [0, 1, 2].flatMap((i) => [benefitCards[i * 3], ingredientCards[i]])

  return (
    <section id="benefits" className="py-20 border-border overflow-hidden md:py-32 border-t-[0] pb-0 relative">
      <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-t from-background via-background/80 to-transparent pointer-events-none z-20 hidden lg:block" />

      <div className="hidden lg:block pl-6 md:pl-12">
        {/* Section Header */}
        <div className="mb-12 md:mb-16 max-w-[1280px]">
          <SectionTitle className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight">
            Goodness in every cup
          </SectionTitle>
        </div>

        {rows.map((row, rowIndex) => (
          <div key={rowIndex} className={rowIndex === 0 ? "relative mb-6" : "relative"}>
            <div
              className={`flex gap-6 ${row.className}`}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              onTouchStart={() => setIsPaused(true)}
              onTouchEnd={() => setIsPaused(false)}
              style={{
                animationPlayState: isPaused ? "paused" : "running",
                // Keep the template pace (7 cards per 25s) regardless of card count
                animationDuration: `${(row.cards.length / 2) * (25 / 7)}s`,
              }}
            >
              {row.cards.map((card, index) => (
                <article key={`${card.id}-${index}`} className={cardClass}>
                  <BenefitCard card={card} />
                </article>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="lg:hidden max-w-[1280px] mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="mb-12 md:mb-16">
          <SectionTitle className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight">
            Goodness in every cup
          </SectionTitle>
        </div>

        <div className="relative">
          {mobileCards.map((card, index) => (
            <div
              key={card.id}
              className="sticky pt-10"
              style={{
                top: `${70 + index * 0}px`,
                zIndex: index + 1,
              }}
            >
              <article className="relative p-6 md:p-8 border bg-card transition-shadow overflow-hidden border-zinc-100 rounded-3xl">
                <BenefitCard card={card} />
              </article>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-background via-background/90 to-transparent pointer-events-none z-10 lg:hidden" />

      <p className="relative z-30 max-w-[1280px] mx-auto px-6 md:px-12 pt-10 pb-4 text-xs text-muted-foreground">
        Naruda teas and beverages are food products for refreshment and general wellness — not medicines.
      </p>
    </section>
  )
}
