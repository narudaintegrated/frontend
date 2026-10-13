import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Hero } from "@/components/sections/hero"
import { Flavours } from "@/components/sections/flavours"
import { About } from "@/components/sections/about"
import { Marquee } from "@/components/sections/marquee"
import { Benefits } from "@/components/sections/benefits"
import { Manifesto } from "@/components/sections/manifesto"
import { Team } from "@/components/sections/team"
import { Contact } from "@/components/sections/contact"
import { GradientBar } from "@/components/ui/gradient-bar"

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Flavours />
        <About />
        <Marquee />
        <Benefits />
        <Manifesto />
        <Team />
        <Contact />
      </main>
      <Footer />
      <GradientBar />
    </>
  )
}
