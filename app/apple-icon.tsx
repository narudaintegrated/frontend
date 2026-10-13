import { ImageResponse } from "next/og"
import { MARK_N_PATH, MARK_SEGMENTS } from "@/components/brand/naruda-mark"

export const size = { width: 180, height: 180 }
export const contentType = "image/png"

const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none">${MARK_SEGMENTS.map(
  (s) => `<path d="${s.d}" stroke="${s.color}" stroke-width="7" stroke-linecap="round"/>`,
).join("")}<path d="${MARK_N_PATH}" stroke="#0A0A0A" stroke-width="6.6" stroke-linecap="round"/></svg>`

export default function AppleIcon() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: "#ffffff" }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={`data:image/svg+xml;utf8,${encodeURIComponent(svg)}`} width={136} height={136} alt="" />
    </div>,
    size,
  )
}
