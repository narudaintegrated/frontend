// Adapted from the original site's legal pages for WhatsApp/email ordering (online checkout coming soon).
import { SITE } from "@/lib/site"

export interface LegalPage {
  title: string
  sections: { heading: string; body: string }[]
}

export const LEGAL_PAGES = {
  privacy: {
    title: "Privacy Policy",
    sections: [
      {
        heading: "What we collect",
        body: "When you order or send an enquiry (including wholesale enquiries) by WhatsApp, phone or email, we receive your name, contact details, delivery address and the details of your request — such as business name, location, product interest and quantity. We collect only what is needed to fulfil your order or respond to your enquiry.",
      },
      {
        heading: "How we use your information",
        body: "Your information is used to process and deliver orders, send order confirmations and status updates, respond to enquiries, and meet legal or accounting obligations. We do not sell your personal information to anyone.",
      },
      {
        heading: "Service providers",
        body: "Orders are currently arranged over WhatsApp and email, and those services process your messages under their own privacy policies. Online payments are coming soon; when they launch, payments will be handled by a secure payment provider and this policy will be updated.",
      },
      {
        heading: "Storage & security",
        body: "Order and enquiry records are kept securely, with access limited to authorised Naruda personnel.",
      },
      {
        heading: "Data retention",
        body: "We keep order records as long as needed for fulfilment, accounting and legal purposes. Enquiry records are kept while the business relationship is active. You may request deletion at any time (see Your rights).",
      },
      {
        heading: "Your rights",
        body: `Under the Nigeria Data Protection Act 2023, you may request access to, correction of, or deletion of your personal data, and you may withdraw consent for communication. Email ${SITE.email} to exercise any of these rights.`,
      },
      {
        heading: "Cookies & tracking",
        body: "This website does not use advertising, analytics or tracking cookies.",
      },
    ],
  },
  terms: {
    title: "Terms & Conditions",
    sections: [
      {
        heading: "Orders & pricing",
        body: "All prices are listed in Nigerian Naira (NGN). Orders are placed by WhatsApp or email and confirmed by our team. We may decline or cancel an order in exceptional circumstances, in which case any payment made is refunded in full.",
      },
      {
        heading: "Payment",
        body: "Payment is arranged with our team after your order is confirmed. Online checkout is coming soon.",
      },
      {
        heading: "Product information",
        body: "We describe ingredients, pack sizes and preparation guidance as accurately as possible. Naruda teas and beverages are food products for refreshment and general wellness; they are not medicines and are not intended to diagnose, treat, cure or prevent any disease. Always read the cautions printed on each pack.",
      },
      {
        heading: "Intellectual property",
        body: "The Naruda name, logo, product packaging and all website content are the property of Naruda Integrated Limited and may not be reproduced without written permission.",
      },
      {
        heading: "Liability",
        body: "Our liability for any order is limited to the amount you paid for that order. Nothing in these terms excludes liability that cannot be excluded under Nigerian law.",
      },
      {
        heading: "Governing law",
        body: "These terms are governed by the laws of the Federal Republic of Nigeria.",
      },
    ],
  },
  delivery: {
    title: "Delivery & Shipping Policy",
    sections: [
      {
        heading: "Delivery fees",
        body: "Jos (including Bukuru): FREE delivery. Abuja: ₦5,000 flat. All other cities: ₦4,000, and FREE on orders above ₦30,000.",
      },
      {
        heading: "Dispatch & delivery time",
        body: "Orders are prepared in Jos and usually dispatched within 3–5 business days. Delivery time varies by destination and will be confirmed with you when your order ships.",
      },
      {
        heading: "Order updates",
        body: "We keep you updated by WhatsApp or email from confirmation through dispatch and delivery. Keep your order confirmation message handy if you need to contact us about it.",
      },
      {
        heading: "Delivery address",
        body: "Please make sure your delivery address and phone number are accurate when you order — we cannot be responsible for delays caused by incorrect details. Contact us immediately if you need to correct an address.",
      },
      {
        heading: "Delays",
        body: "Occasionally logistics partners or customs processes may cause delays beyond our control. If your order is significantly delayed, contact us and we will investigate.",
      },
    ],
  },
  returns: {
    title: "Returns & Refund Policy",
    sections: [
      {
        heading: "Returns",
        body: "Unopened products in their original sealed packaging may be returned within 7 days of delivery. Because our teas and beverages are food products, opened or used items cannot be returned unless they arrived faulty or incorrect.",
      },
      {
        heading: "Faulty or incorrect orders",
        body: "If your order arrives damaged, faulty or incorrect, contact us within 48 hours of delivery with your order details and a photo of the item. We will replace the item or refund you in full — your choice.",
      },
      {
        heading: "How to start a return",
        body: `Email ${SITE.email} or WhatsApp ${SITE.phones[0]} with your order details and reason for return. We will guide you through the process.`,
      },
      {
        heading: "Refunds",
        body: "Approved refunds are made to your original payment method, or as agreed with our team.",
      },
    ],
  },
} satisfies Record<string, LegalPage>

export type LegalSlug = keyof typeof LEGAL_PAGES
