"use client"

import type React from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowDown, ArrowRight } from "lucide-react"
import { useEffect, useState } from "react"
import { PRODUCTS, formatNaira } from "@/lib/products"
import { BRAND_GRADIENT, BRAND_GREEN, BRAND_SHADOW, BRAND_SHADOW_HOVER } from "@/lib/site"

const ROTATE_MS = 5000

export function Hero() {
  const titleText = "Pure botanical teas, crafted in Africa, delivered anywhere."
  const words = titleText.split(" ")
  const [maskReveal, setMaskReveal] = useState(0)
  const [opacity, setOpacity] = useState(0)
  const [isDesktop, setIsDesktop] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [reducedMotion, setReducedMotion] = useState(false)

  const product = PRODUCTS[activeIndex]

  useEffect(() => {
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth >= 768)
    }

    checkDesktop()
    window.addEventListener("resize", checkDesktop)

    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const maxScroll = 500
      const revealPercentage = Math.min(100, (scrollPosition / maxScroll) * 100)
      const calculatedOpacity = Math.min(1, scrollPosition / maxScroll)
      setMaskReveal(revealPercentage)
      setOpacity(calculatedOpacity)
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", checkDesktop)
    }
  }, [])

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)")
    const update = () => setReducedMotion(query.matches)
    update()
    query.addEventListener("change", update)
    return () => query.removeEventListener("change", update)
  }, [])

  // Cycle through the products; the orb, accent word and product details all follow activeIndex.
  // Depending on activeIndex restarts the timer after a manual pick.
  useEffect(() => {
    if (isPaused || reducedMotion) return
    const timer = window.setTimeout(() => {
      setActiveIndex((index) => (index + 1) % PRODUCTS.length)
    }, ROTATE_MS)
    return () => window.clearTimeout(timer)
  }, [activeIndex, isPaused, reducedMotion])

  const [orbA, orbB, orbC] = product.palette.orb

  return (
    <section className="min-h-screen flex flex-col justify-center pt-20 relative overflow-hidden">
      <div className="absolute -right-32 md:-right-48 top-32 md:top-40 w-[500px] h-[500px] md:w-[750px] md:h-[750px] pointer-events-none animate-orb-rotate -z-10 scale-125 opacity-50 md:opacity-100">
        <div
          className="naruda-orb w-full h-full"
          style={{ "--orb-a": orbA, "--orb-b": orbB, "--orb-c": orbC } as React.CSSProperties}
        />
      </div>

      <div className="max-w-[1280px] w-full mx-auto px-6 md:px-12 py-20 md:py-32 md:pb-4 pb-4 pt-4 md:pt-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          <div className="lg:col-span-8">
            <p className="text-muted-foreground mb-6 text-lg font-normal">
              Naruda Integrated Limited · Jos, Plateau State
            </p>

            {/* Main Title with animated words */}
            <h1 className="text-5xl sm:text-6xl lg:text-[96px] font-semibold tracking-tight leading-[1] text-balance md:text-9xl">
              {words.map((word, index) => {
                const isAccent = index === words.length - 1
                return (
                  <span
                    key={index}
                    className={`${isAccent ? "hero-word-accent" : "hero-word"} my-0 py-2 font-mono font-normal text-5xl md:text-7xl`}
                    style={{
                      animationDelay: `${index * 0.1}s`,
                      marginRight: index < words.length - 1 ? "0.25em" : "0",
                      ...(isAccent ? { color: product.palette.accent } : {}),
                    }}
                  >
                    {word}
                  </span>
                )
              })}
            </h1>

            <p className="mt-8 max-w-xl leading-relaxed text-left text-lg text-zinc-500 ml-0">
              Natural. Healthy. Nigerian. Farm-grown African botanicals transformed into premium wellness teas —
              delivered from Jos to any part of the world.
            </p>

            <div className="flex flex-row items-start gap-4 mt-10">
              <Link
                href="#flavours"
                className="inline-flex items-center justify-center px-6 md:px-8 py-4 text-base font-medium text-white rounded-full whitespace-nowrap transition-all relative overflow-hidden group"
                style={{ background: BRAND_GRADIENT, boxShadow: BRAND_SHADOW }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = BRAND_SHADOW_HOVER
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = BRAND_SHADOW
                }}
              >
                Shop the Flavours
              </Link>
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 px-4 md:px-8 py-4 text-base font-medium whitespace-nowrap transition-colors"
                style={{ color: BRAND_GREEN }}
              >
                Wholesale
                <ArrowDown className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Featured product — changes in step with the orb colour */}
          <div
            className="lg:col-span-4 p-4 rounded-[28px] bg-white/75 backdrop-blur-xl border border-white/70 shadow-xl"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onFocus={() => setIsPaused(true)}
            onBlur={() => setIsPaused(false)}
          >
            <div className="relative aspect-[16/10] lg:aspect-[5/4] rounded-3xl overflow-hidden bg-secondary">
              {PRODUCTS.map((item, index) => (
                <Image
                  key={item.id}
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="(min-width: 1024px) 400px, 100vw"
                  className="object-cover transition-opacity duration-1000 ease-out"
                  style={{ opacity: index === activeIndex ? 1 : 0 }}
                  priority={index === 0}
                />
              ))}
            </div>

            <div key={product.id} className="animate-product-swap mt-5 px-2 min-h-[236px]" aria-live="polite">
              <p className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: product.palette.accent }} />
                {product.category}
              </p>
              <h2 className="mt-3 text-2xl font-semibold">{product.name}</h2>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{product.tagline}</p>
              <div className="flex flex-wrap gap-2 mt-4">
                {product.ingredients.map((ingredient) => (
                  <span
                    key={ingredient}
                    className="px-3 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-full"
                  >
                    {ingredient}
                  </span>
                ))}
              </div>
              <div className="flex items-center justify-between mt-5">
                <span className="text-sm text-muted-foreground">
                  {product.packSize} · <span className="font-semibold text-foreground">{formatNaira(product.price)}</span>
                </span>
                <Link
                  href={`#flavour-${product.id}`}
                  className="inline-flex items-center gap-1 text-sm font-medium"
                  style={{ color: product.palette.accent }}
                >
                  View flavour
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="flex items-center gap-2 mt-5 px-2 pb-2" role="group" aria-label="Featured flavour">
              {PRODUCTS.map((item, index) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Show ${item.shortName}`}
                  aria-pressed={index === activeIndex}
                  className="h-2 rounded-full transition-all duration-500"
                  style={{
                    width: index === activeIndex ? 28 : 8,
                    backgroundColor: index === activeIndex ? item.palette.accent : "oklch(0.9 0 0)",
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="w-full mt-8">
        <div
          className="relative w-full aspect-[16/10] md:aspect-[21/9] transition-all duration-100 ease-out"
          style={{
            opacity: opacity,
            clipPath: isDesktop ? `inset(${100 - maskReveal}% 0 0 0)` : "none",
          }}
        >
          <Image
            src="/images/naruda-all-products.webp"
            alt="The Naruda family — Green Monkey, Mint, Zobo, Moringa and 3in1"
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  )
}
