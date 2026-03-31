"use client"
import { useState } from "react"

type Page = "users" | "products" | "orders" | "stats" | "settings"

interface SidebarProps {
  activePage: Page
  onNavigate: (page: Page) => void
}

const navItems = [
  {
    section: "Principal",
    items: [
      { id: "users" as Page,    label: "Utilisateurs", icon: UsersIcon },
      { id: "products" as Page, label: "Produits",      icon: GridIcon },
      { id: "orders" as Page,   label: "Commandes",     icon: BoxIcon },
    ],
  },
  {
    section: "Analytique",
    items: [
      { id: "stats" as Page,    label: "Statistiques",  icon: TrendIcon },
    ],
  },
  {
    section: "Système",
    items: [
      { id: "settings" as Page, label: "Paramètres",    icon: SettingsIcon },
    ],
  },
]

export default function Sidebar({ activePage, onNavigate }: SidebarProps) {
  return (
    <aside className="w-[220px] min-w-[220px] bg-[#2C1A0E] flex flex-col">
      {/* Logo */}
      <div className="px-5 py-6 border-b border-white/10">
        <span className="font-serif text-xl text-white tracking-wide">Futura.</span>
        <small className="block text-[10px] text-[#C0A882] uppercase tracking-[2px] mt-0.5">
          Administration
        </small>
      </div>

      {/* Navigation */}
      <nav className="flex-1 py-4 overflow-y-auto">
        {navItems.map(({ section, items }) => (
          <div key={section}>
            <p className="text-[9px] uppercase tracking-[2px] text-[#9B8878] px-5 py-3 pt-5">
              {section}
            </p>
            {items.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => onNavigate(id)}
                className={`w-full flex items-center gap-2.5 px-5 py-2.5 text-xs font-normal transition-all border-l-[3px]
                  ${activePage === id
                    ? "text-white bg-[#B8860B]/15 border-l-[#B8860B] font-medium"
                    : "text-white/50 border-transparent hover:text-white/80 hover:bg-white/5"
                  }`}
              >
                <Icon className="w-4 h-4 opacity-80 shrink-0" />
                {label}
              </button>
            ))}
          </div>
        ))}
      </nav>

      {/* Profil admin */}
      <div className="px-5 py-4 border-t border-white/10">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-full bg-[#C0A882] flex items-center justify-center text-white text-xs font-medium">
            AD
          </div>
          <div>
            <p className="text-xs font-medium text-white/80">Admin</p>
            <p className="text-[10px] text-[#9B8878]">Super Admin</p>
          </div>
        </div>
      </div>
    </aside>
  )
}

// Icônes SVG inline
function UsersIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="6" cy="5" r="2.5" />
      <path d="M1 13c0-3 2-4.5 5-4.5s5 1.5 5 4.5" />
      <circle cx="12" cy="6" r="2" />
      <path d="M14 13c0-2-1-3.5-3-3.5" />
    </svg>
  )
}
function GridIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="2" y="2" width="5" height="5" rx="1" /><rect x="9" y="2" width="5" height="5" rx="1" />
      <rect x="2" y="9" width="5" height="5" rx="1" /><rect x="9" y="9" width="5" height="5" rx="1" />
    </svg>
  )
}
function BoxIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M2 4h12v9a1 1 0 01-1 1H3a1 1 0 01-1-1V4z" />
      <path d="M5 4V3a1 1 0 011-1h4a1 1 0 011 1v1" />
    </svg>
  )
}
function TrendIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M2 12l4-4 3 2 5-6" />
    </svg>
  )
}
function SettingsIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="8" cy="8" r="2.5" />
      <path d="M8 2v1M8 13v1M2 8h1M13 8h1M3.5 3.5l.7.7M11.8 11.8l.7.7M3.5 12.5l.7-.7M11.8 4.2l.7-.7" />
    </svg>
  )
}