"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, TriangleAlert } from "lucide-react"
import { SectionTitle } from "@/components/ui/section-title"
import { PRODUCTS, formatNaira, orderMessage } from "@/lib/products"
import { BRAND_GREEN, whatsappLink } from "@/lib/site"

export function Flavours() {
  return (
    <section id="flavours" className="py-20 md:py-10 md:pt-32 pb-4">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-12 md:mb-16">
          <div>
            <SectionTitle className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight">
              Five signature flavours
            </SectionTitle>
            <p className="mt-3 text-sm text-muted-foreground">
              Order on WhatsApp today · Online checkout coming soon
            </p>
          </div>
          <Link
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 text-sm transition-colors"
            style={{ color: BRAND_GREEN }}
          >
            Wholesale enquiries
            <ArrowUpRight className="w-4 h-4" style={{ color: BRAND_GREEN }} />
          </Link>
        </div>

        <div className="relative">
          {PRODUCTS.map((product, index) => (
            <div
              key={product.id}
              id={`flavour-${product.id}`}
              className="sticky scroll-mt-20"
              style={{
                top: `${70 + index * 0}px`,
                zIndex: index + 1,
              }}
            >
              <div className="group block pt-10">
                <article className="overflow-hidden rounded-2xl md:rounded-3xl border border-border bg-card transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  {/* Image */}
                  <div className="relative aspect-[2/1] overflow-hidden bg-secondary">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      sizes="(min-width: 1280px) 1184px, 100vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-0 left-0 right-0 h-1" style={{ backgroundColor: product.palette.accent }} />
                  </div>

                  {/* Content */}
                  <div className="p-3 md:p-3">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p
                          className="text-xs font-medium uppercase tracking-wider"
                          style={{ color: product.palette.accent }}
                        >
                          {product.category}
                        </p>
                        <h3 className="text-lg md:text-xl font-semibold mt-1">{product.name}</h3>
                        <p className="text-sm text-muted-foreground mt-1">{product.tagline}</p>
                      </div>
                      <div className="text-right flex-shrink-0">
                        <div className="text-lg md:text-xl font-semibold">{formatNaira(product.price)}</div>
                        <div className="text-xs text-muted-foreground mt-1">{product.packSize}</div>
                      </div>
                    </div>

                    <p className="text-sm text-muted-foreground mt-3">
                      <span className="font-medium text-foreground">How to brew:</span> {product.brewGuide}
                    </p>
                    {product.caution && (
                      <p className="flex items-center gap-2 text-sm mt-2 text-amber-700">
                        <TriangleAlert className="w-4 h-4 flex-shrink-0" />
                        {product.caution}
                      </p>
                    )}

                    {/* Tags + order */}
                    <div className="flex flex-wrap items-center justify-between gap-4 mt-4">
                      <div className="flex flex-wrap gap-2">
                        {product.ingredients.map((ingredient) => (
                          <span
                            key={ingredient}
                            className="px-3 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-full"
                          >
                            {ingredient}
                          </span>
                        ))}
                      </div>
                      <Link
                        href={whatsappLink(orderMessage(product))}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium border rounded-full hover:bg-secondary transition-colors"
                        style={{ color: BRAND_GREEN, borderColor: BRAND_GREEN }}
                      >
                        Order on WhatsApp
                        <ArrowUpRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile wholesale link */}
        <div className="md:hidden mt-8 text-center">
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium border rounded-full hover:bg-secondary transition-colors"
            style={{ color: BRAND_GREEN, borderColor: BRAND_GREEN }}
          >
            Wholesale enquiries
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
