const MONTHS = ["Jan", "Fév", "Mar", "Avr", "Mai", "Juin", "Juil"]
const VALUES = [18, 24, 31, 28, 42, 38, 47]
const MAX = Math.max(...VALUES)

export default function BarChart() {
  return (
    <div className="bg-white border border-[#F0EBE3] rounded-xl overflow-hidden">
      <div className="px-4 py-3 border-b border-[#F0EBE3]">
        <h3 className="font-serif text-sm text-[#2C1A0E]">Inscriptions / mois</h3>
      </div>
      <div className="flex items-end gap-1.5 px-4 py-4 h-28">
        {MONTHS.map((month, i) => (
          <div key={month} className="flex flex-col items-center gap-1 flex-1">
            <div
              className="w-full rounded-t bg-[#C0A882] transition-all"
              style={{
                height: `${Math.round((VALUES[i] / MAX) * 56) + 8}px`,
                opacity: 0.5 + 0.5 * (VALUES[i] / MAX),
              }}
            />
            <span className="text-[9px] text-[#9B8878]">{month}</span>
          </div>
        ))}
      </div>
    </div>
  )
}