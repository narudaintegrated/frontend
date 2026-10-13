"use client"

const botanicals = ["Hibiscus", "Spearmint", "Moringa", "Ginger", "Lemongrass", "Cloves", "Lemon Leaves", "Green Monkey"]

const stats = [
  { value: "5", label: "Signature Blends" },
  { value: "100%", label: "Natural Botanicals" },
  { value: "Global", label: "Delivery from Jos" },
]

const statements = [
  {
    label: "Our Mission",
    text: "To transform locally grown African botanicals into premium, healthy and affordable tea products through innovative automated processing, while supporting local farmers, reducing post-harvest waste, creating employment and delivering exceptional quality to consumers.",
  },
  {
    label: "Our Vision",
    text: "To become a leading African botanical tea and agribusiness brand, processing Nigerian botanical crops to finished products and recognized globally for quality, innovation and sustainability — while showcasing the richness of Nigeria's natural agricultural resources to the world.",
  },
]

import { SectionTitle } from "@/components/ui/section-title"

export function About() {
  return (
    <section id="about" className="py-20 border-border border-t-0 md:py-10 md:pb-32 md:pt-32">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Content */}
          <div>
            <SectionTitle className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-balance">
              Bridging Nigerian farms & everyday healthy living
            </SectionTitle>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              At Naruda Integrated Limited, we bridge the gap between local Nigerian agriculture and everyday healthy
              living. Based in Jos, Plateau State, we source locally cultivated botanicals — hibiscus, spearmint,
              moringa, ginger and lemongrass — and apply controlled processing and packaging to create hygienic,
              high-quality beverage products.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              By standardizing the farm-to-consumer value chain, we preserve natural nutrients, reduce post-harvest crop
              loss for farmers, and deliver convenient wellness teas to homes, hospitality providers and retailers
              across the region.
            </p>

            <div className="mt-10 space-y-6">
              {statements.map((statement) => (
                <div key={statement.label} className="border-l-2 pl-5" style={{ borderColor: "#1F4D3A" }}>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                    {statement.label}
                  </h3>
                  <p className="mt-2 text-foreground leading-relaxed">{statement.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content */}
          <div>
            {/* Botanicals */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">
                Our Botanicals
              </h3>
              <div className="flex flex-wrap gap-2">
                {botanicals.map((botanical) => (
                  <span
                    key={botanical}
                    className="px-4 py-2 text-sm font-medium border border-border rounded-full hover:bg-secondary transition-colors cursor-default"
                  >
                    {botanical}
                  </span>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-12">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center p-4 bg-secondary rounded-2xl">
                  <div className="text-2xl md:text-3xl font-semibold" style={{ color: "#1F4D3A" }}>
                    {stat.value}
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
