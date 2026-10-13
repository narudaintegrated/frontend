"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { SectionTitle } from "@/components/ui/section-title"
import { BRAND_GREEN } from "@/lib/site"

const team = [
  {
    name: "Rupert Naantuam Adidi",
    role: "Founder & CEO",
    credential: "MSc, Aviation Engineering & Management",
    bio: "A skilled leader in project management and communication, known for delivering high-quality service and achieving company goals through effective planning and prioritisation.",
    image: "/images/team-rupert.webp",
  },
  {
    name: "Ruby Petkwap Sallah",
    role: "Co-Founder & MD",
    credential: "PGD, Management — University of Jos",
    bio: "An industrious and passionate entrepreneur with a drive for growth, development and innovation — a critical thinker leading Naruda's vision from Jos to the world.",
    image: "/images/team-ruby.webp",
  },
  {
    name: "Brendan Keriaknian Sallah",
    role: "Marketing Director",
    credential: "B.Ed, Administration & Planning",
    bio: "An entrepreneur grounded in business and administration, enthusiastic about herbal tea and set on making an impact in the industry through strategic planning.",
    image: "/images/team-brendan.webp",
  },
]

export function Team() {
  return (
    <section id="team" className="py-20 md:py-32 border-border border-t-0">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-12 md:mb-16">
          <SectionTitle className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight">
            The people behind the leaves
          </SectionTitle>
          <Link
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 text-sm transition-colors"
            style={{ color: BRAND_GREEN }}
          >
            Partner with us
            <ArrowUpRight className="w-4 h-4" style={{ color: BRAND_GREEN }} />
          </Link>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {team.map((member) => (
            <article key={member.name} className="group h-full">
              {/* Image */}
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-secondary mb-4">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Meta */}
              <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                <span style={{ color: BRAND_GREEN }} className="font-medium">
                  {member.role}
                </span>
                <span>•</span>
                <span>{member.credential}</span>
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold">{member.name}</h3>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{member.bio}</p>
            </article>
          ))}
        </div>

        {/* Mobile partner link */}
        <div className="md:hidden mt-8 text-center">
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium border rounded-full hover:bg-secondary transition-colors"
            style={{ color: BRAND_GREEN, borderColor: BRAND_GREEN }}
          >
            Partner with us
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
