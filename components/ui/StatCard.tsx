type Trend = "up" | "down"

interface StatCardProps {
  label: string
  value: string | number
  sub?: string
  trend?: Trend
  trendLabel?: string
  accent: "tan" | "green" | "blue" | "red"
}

const accents = {
  tan:   "bg-[#C0A882]",
  green: "bg-[#3A7D44]",
  blue:  "bg-[#3A5F8A]",
  red:   "bg-[#B84040]",
}

export default function StatCard({ label, value, sub, trend, trendLabel, accent }: StatCardProps) {
  return (
    <div className="bg-white border border-[#F0EBE3] rounded-xl p-5 relative overflow-hidden">
      <div className={`absolute top-0 left-0 right-0 h-0.5 ${accents[accent]}`} />
      <p className="text-[10px] uppercase tracking-widest text-[#9B8878] mb-2">{label}</p>
      <p className="font-serif text-3xl text-[#2C1A0E]">{value}</p>
      {sub && <p className="text-xs text-[#9B8878] mt-1">{sub}</p>}
      {trend && trendLabel && (
        <span className={`inline-flex items-center gap-1 text-[10px] px-2 py-0.5 rounded-full mt-2 font-medium
          ${trend === "up" ? "bg-green-50 text-green-700" : "bg-red-50 text-red-600"}`}>
          {trend === "up" ? "▲" : "▼"} {trendLabel}
        </span>
      )}
    </div>
  )
}