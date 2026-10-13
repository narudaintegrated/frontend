// Naruda hexagon mark, redrawn from naruda-logo.png (segment colours sampled from the original).
export const MARK_SEGMENTS = [
  { d: "M13.6 29 L50 8", color: "#E02539" },
  { d: "M50 8 L86.4 29", color: "#52184E" },
  { d: "M86.4 29 L86.4 71", color: "#2DB1E3" },
  { d: "M86.4 71 L50 92", color: "#6D6E71" },
  { d: "M50 92 L13.6 71", color: "#1FAA4A" },
  { d: "M13.6 71 L13.6 29", color: "#F38F20" },
]

export const MARK_N_PATH = "M30.2 69.6 V49.9 A19.7 19.7 0 0 1 69.6 49.9 V69.6"

interface NarudaMarkProps {
  className?: string
  title?: string
}

export function NarudaMark({ className = "w-7 h-7", title }: NarudaMarkProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      role={title ? "img" : undefined}
      aria-hidden={title ? undefined : true}
      fill="none"
    >
      {title && <title>{title}</title>}
      {MARK_SEGMENTS.map((segment) => (
        <path key={segment.color} d={segment.d} stroke={segment.color} strokeWidth="7" strokeLinecap="round" />
      ))}
      <path d={MARK_N_PATH} stroke="currentColor" strokeWidth="6.6" strokeLinecap="round" />
    </svg>
  )
}

export function NarudaLogo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <NarudaMark className="w-7 h-7 text-foreground" />
      <span className="text-lg font-semibold tracking-tight">naruda</span>
    </span>
  )
}
