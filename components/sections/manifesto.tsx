"use client"

import { Sprout } from "lucide-react"
import { SectionTitle } from "@/components/ui/section-title"
import { BRAND_GREEN } from "@/lib/site"

const vows = [
  {
    number: "01",
    title: "Locally Sourced Botanicals",
    body: "Direct partnership with local farms empowers Nigerian growers, ensures fresh inputs and reduces post-harvest crop loss in our communities.",
  },
  {
    number: "02",
    title: "Controlled Processing & Hygiene",
    body: "Modernized drying, blending and automated packaging standardize quality across every batch.",
  },
  {
    number: "03",
    title: "Every Channel Served",
    body: "From family homes to hospitality providers, retailers and supermarkets — with retail-ready boxes and bulk orders.",
  },
]

export function Manifesto() {
  return (
    <section id="process" className="py-20 md:py-32 border-border border-t-0 md:pt-0 md:pb-0">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        {/* Section Header */}
        <SectionTitle className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mb-12 md:mb-16">
          Three vows in every leaf
        </SectionTitle>

        <div className="flex flex-col gap-4">
          {vows.map((vow) => (
            <div
              key={vow.number}
              className="group flex items-center justify-between p-5 md:p-6 border border-border rounded-2xl hover:bg-secondary/50 transition-all hover:border-foreground/20"
            >
              <div className="flex items-center gap-6 flex-1">
                <div className="flex-1">
                  <h3 className="font-semibold text-xl md:text-2xl">{vow.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1 max-w-2xl">{vow.body}</p>
                </div>
                <span className="text-sm text-muted-foreground font-medium">{vow.number}</span>
              </div>
              <Sprout
                className="w-8 h-8 md:w-10 md:h-10 ml-6 text-muted-foreground transition-all group-hover:translate-x-1"
                strokeWidth={1}
                style={{ color: BRAND_GREEN }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
