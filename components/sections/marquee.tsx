"use client"

const phrases = [
  "Natural. Healthy. Nigerian.",
  "Worldwide Tea Delivery",
  "100% Botanical Harvest",
  "5 Signature Blends",
  "Direct from Jos to the World",
]

export function Marquee() {
  return (
    <section className="py-16 border-border overflow-hidden md:py-10 border-t-[0]">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 mb-8">
        <p className="text-sm text-muted-foreground text-center">From the Plateau highlands to your cup</p>
      </div>

      {/* Marquee Container */}
      <div className="relative">
        <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
          {[...phrases, ...phrases].map((phrase, index) => (
            <div key={`${phrase}-${index}`} className="flex flex-shrink-0 items-center justify-center min-w-[200px] px-8">
              <span className="text-2xl md:text-3xl font-semibold text-muted-foreground/50 whitespace-nowrap">
                {phrase}
              </span>
              <span className="ml-16 w-2 h-2 rounded-full bg-[#1F4D3A]/40" aria-hidden="true" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
