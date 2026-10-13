// Product catalogue. Copy comes from the original Naruda site (original-site/data/products.json);
// pack sizes, Green Monkey ingredients/brewing and its caution come from the printed packaging.

export interface ProductPalette {
  /** Three stops of the hero orb gradient, dark → light */
  orb: [string, string, string]
  /** Readable accent on white, used for text and highlights */
  accent: string
}

export interface Product {
  id: string
  name: string
  shortName: string
  category: string
  tagline: string
  flavorProfile: string
  ingredients: string[]
  healthBenefits: string[]
  brewGuide: string
  packSize: string
  price: number
  image: string
  caution?: string
  palette: ProductPalette
}

export const PRODUCTS: Product[] = [
  {
    id: "zobo",
    name: "Naruda Zobo Tea",
    shortName: "Zobo",
    category: "Botanical Elixir",
    tagline: "Rich Hibiscus infused with Ginger, Cloves & Strawberry",
    flavorProfile: "Tart Crimson Hibiscus, Warm Ginger, Clove Spice, Sweet Strawberry",
    ingredients: ["Hibiscus (Zobo) Petals", "Ginger Root", "Cloves", "Natural Strawberry"],
    healthBenefits: ["Heart-healthy drink", "Supports the immune system", "Rich in vitamin C & iron"],
    brewGuide: "Steep in boiling water for 6 minutes. Exquisite served warm or poured over ice.",
    packSize: "20 tea bags",
    price: 2500,
    image: "/images/naruda-zobo.webp",
    palette: { orb: ["#8B263E", "#E02539", "#F7A1AE"], accent: "#B0213A" },
  },
  {
    id: "mint",
    name: "Naruda Mint Tea",
    shortName: "Mint",
    category: "Refreshing Herbal Infusion",
    tagline: "A Soothing Spearmint Blend with Lemongrass & Ginger",
    flavorProfile: "Cool Spearmint, Bright Lemongrass & Lemon Leaves, Warm Clove-Ginger Finish",
    ingredients: ["Mint Leaves", "Lemongrass", "Lemon Leaves", "Cloves", "Ginger"],
    healthBenefits: ["Rich in vitamin C & antioxidants", "Naturally soothing", "A refreshing daily ritual"],
    brewGuide: "Steep 1 sachet in 95°C water for 4–5 minutes.",
    packSize: "20 tea bags",
    price: 2500,
    image: "/images/naruda-mint.webp",
    palette: { orb: ["#1F6B3A", "#3BA935", "#B6E88F"], accent: "#2E8B3E" },
  },
  {
    id: "moringa",
    name: "Naruda Moringa Tea",
    shortName: "Moringa",
    category: "Nutritional Vitality",
    tagline: "Pure Moringa Leaves with Warming Ginger",
    flavorProfile: "Earthy Green Moringa, Gentle Warming Ginger, Clean Herbal Finish",
    ingredients: ["Moringa Oleifera Leaves", "Warming Ginger"],
    healthBenefits: ["Loaded with antioxidants & minerals", "Boosts energy and well-being", "A time-honoured botanical tradition"],
    brewGuide: "Steep 1 bag in boiling water for 5 minutes.",
    packSize: "25 tea bags",
    price: 2500,
    image: "/images/naruda-moringa.webp",
    palette: { orb: ["#0F3D24", "#2E7D32", "#F2D21B"], accent: "#3B6E47" },
  },
  {
    id: "green-monkey",
    name: "Naruda Green Monkey Tea",
    shortName: "Green Monkey",
    category: "Antioxidant Energy",
    tagline: "A Specialty Local Herbal Blend for Everyday Enjoyment",
    flavorProfile: "Fresh Vegetal, Soft Honey, Crisp Bergamot",
    ingredients: ["Green Monkey Leaves"],
    healthBenefits: ["A refreshing everyday lift", "Rich in natural antioxidants", "Sustained natural energy"],
    brewGuide: "Pour boiled water into a cup, add one sachet and brew for 3–5 minutes. Serve hot or as desired.",
    packSize: "7 sachets",
    price: 5000,
    image: "/images/naruda-green-monkey.webp",
    caution: "Not for pregnant women, infants or breastfeeding women.",
    palette: { orb: ["#2E5A44", "#8DC63F", "#DDF28A"], accent: "#4E7A1E" },
  },
  {
    id: "3in1",
    name: "Naruda 3in1",
    shortName: "3in1",
    category: "Instant Chocolate Beverage",
    tagline: "Rich Chocolate, Creamy Milk & Sweet Sugar — All in One Sachet",
    flavorProfile: "Velvety Cocoa, Creamy Milk Body, Gentle Caramel Sweetness",
    ingredients: ["Premium Cocoa Chocolate", "Creamy Milk Powder", "Fine Cane Sugar"],
    healthBenefits: ["Instant energy boost", "Comforting mood lifter", "Calcium from real milk"],
    brewGuide: "Empty one 25g sachet into a cup, add 200ml hot water, and stir. Enjoy hot or chilled.",
    packSize: "25g sachet",
    price: 3000,
    image: "/images/naruda-3in1.webp",
    palette: { orb: ["#5A2E1A", "#B3202A", "#E8A86B"], accent: "#7A4A2B" },
  },
]

export const formatNaira = (amount: number) => `₦${amount.toLocaleString("en-NG")}`

export const orderMessage = (product: Product) =>
  `Hello Naruda, I'd like to order ${product.name} (${product.packSize}).`

// Botanicals shown on the scrolling ingredient cards, with the blends they appear in.
export const BOTANICALS = [
  { name: "Hibiscus (Zobo)", products: ["zobo"] },
  { name: "Spearmint", products: ["mint"] },
  { name: "Ginger", products: ["zobo", "mint", "moringa"] },
  { name: "Lemongrass", products: ["mint"] },
  { name: "Moringa Leaves", products: ["moringa"] },
  { name: "Cloves", products: ["zobo", "mint"] },
  { name: "Green Monkey Leaves", products: ["green-monkey"] },
  { name: "Lemon Leaves", products: ["mint"] },
  { name: "Natural Strawberry", products: ["zobo"] },
  { name: "Premium Cocoa", products: ["3in1"] },
].map((botanical) => ({
  ...botanical,
  products: botanical.products.map((id) => PRODUCTS.find((p) => p.id === id)!),
}))
