import type { Metadata } from "next"
import { LegalPageView } from "@/components/legal/legal-page"
import { LEGAL_PAGES } from "@/lib/legal"

export const metadata: Metadata = { title: `${LEGAL_PAGES.privacy.title} | Naruda` }

export default function PrivacyPage() {
  return <LegalPageView slug="privacy" />
}
