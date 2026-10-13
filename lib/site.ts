export const SITE = {
  name: "Naruda Integrated Limited",
  shortName: "Naruda",
  tagline: "Natural. Healthy. Nigerian.",
  email: "narudaintegrated@gmail.com",
  phones: ["0813 665 6569", "0703 499 6107"],
  whatsappNumber: "2348136656569",
  address: "TIC Bukuru, Jos South, Plateau State, Nigeria",
  url: "https://narudaintegrated.com",
}

export const SOCIALS = {
  facebook: "https://facebook.com/NarudaTea",
  instagram: "https://instagram.com/NarudaTea",
  tiktok: "https://tiktok.com/@Narudateaglobal",
  x: "https://x.com/NarudaTea",
}

export const LEGAL_LINKS = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms & Conditions" },
  { href: "/delivery", label: "Delivery Policy" },
  { href: "/returns", label: "Returns & Refunds" },
]

export function whatsappLink(message = "Hello Naruda, I'd like to place an order.") {
  return `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(message)}`
}

// Naruda green — replaces the template's blue gradient on every primary action.
export const BRAND_GRADIENT = "linear-gradient(135deg, #1F4D3A 0%, #3B6E47 100%)"
export const BRAND_GREEN = "#1F4D3A"
export const BRAND_SHADOW = "0 4px 20px rgba(31, 77, 58, 0.3)"
export const BRAND_SHADOW_HOVER = "0 8px 30px rgba(31, 77, 58, 0.45), 0 0 40px rgba(59, 110, 71, 0.3)"
