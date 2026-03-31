"use client"

interface TopbarProps {
  title: string
  breadcrumb: string
  onSearch: (q: string) => void
}

export default function Topbar({ title, breadcrumb, onSearch }: TopbarProps) {
  return (
    <header className="bg-white border-b border-[#F0EBE3] px-7 h-[60px] flex items-center justify-between shrink-0">
      <div>
        <h1 className="font-serif text-base text-[#2C1A0E]">{title}</h1>
        <span className="text-[11px] text-[#9B8878]">{breadcrumb}</span>
      </div>

      <div className="flex items-center gap-3">
        {/* Recherche */}
        <div className="flex items-center gap-2 bg-[#FAF8F5] border border-[#F0EBE3] rounded-lg px-3 py-1.5 w-48">
          <SearchIcon className="w-3 h-3 text-[#9B8878] shrink-0" />
          <input
            onChange={e => onSearch(e.target.value)}
            placeholder="Rechercher..."
            className="bg-transparent text-xs text-[#3D2B1A] outline-none placeholder:text-[#9B8878] w-full"
          />
        </div>

        {/* Notification */}
        <div className="relative w-8 h-8 rounded-lg bg-[#FAF8F5] border border-[#F0EBE3] flex items-center justify-center cursor-pointer">
          <BellIcon className="w-4 h-4 text-[#3D2B1A]" />
          <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 rounded-full bg-red-500 border border-white" />
        </div>

        {/* Avatar */}
        <div className="w-8 h-8 rounded-full bg-[#C0A882] flex items-center justify-center text-white text-xs font-medium cursor-pointer">
          AD
        </div>
      </div>
    </header>
  )
}

function SearchIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="7" cy="7" r="4.5" /><path d="M10.5 10.5L14 14" />
    </svg>
  )
}
function BellIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M8 2a5 5 0 00-5 5v3l-1 2h12l-1-2V7a5 5 0 00-5-5z" />
      <path d="M6.5 13a1.5 1.5 0 003 0" />
    </svg>
  )
}