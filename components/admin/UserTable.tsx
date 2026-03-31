"use client"
import { useState } from "react"
import { User } from "@/types/admin"
import Badge from "@/components/ui/Badge"
import Button from "@/components/ui/Button"

type Tab = "all" | "active" | "admin" | "inactive"

interface UserTableProps {
  users: User[]
  searchQuery: string
  onEdit: (user: User) => void
  onView: (user: User) => void
  onDelete: (id: number) => void
  onAdd: () => void
}

const TABS: { id: Tab; label: string }[] = [
  { id: "all",      label: "Tous" },
  { id: "active",   label: "Actifs" },
  { id: "admin",    label: "Admins" },
  { id: "inactive", label: "Inactifs" },
]

export default function UserTable({ users, searchQuery, onEdit, onView, onDelete, onAdd }: UserTableProps) {
  const [activeTab, setActiveTab] = useState<Tab>("all")
  const [selectAll, setSelectAll] = useState(false)

  const filtered = users.filter(u => {
    const matchTab =
      activeTab === "all" ||
      (activeTab === "active"   && u.status === "active") ||
      (activeTab === "admin"    && u.role === "Admin") ||
      (activeTab === "inactive" && u.status === "inactive")
    const matchSearch = !searchQuery || u.name.toLowerCase().includes(searchQuery.toLowerCase()) || u.email.toLowerCase().includes(searchQuery.toLowerCase())
    return matchTab && matchSearch
  })

  const roleBadge = (role: User["role"]) => {
    if (role === "Admin")   return <Badge variant="admin"   label="Admin" />
    if (role === "Vendeur") return <Badge variant="vendor"  label="Vendeur" />
    return                         <Badge variant="inactive" label="Client" />
  }

  return (
    <div className="bg-white border border-[#F0EBE3] rounded-xl overflow-hidden">
      {/* Header */}
      <div className="px-5 py-4 border-b border-[#F0EBE3] flex items-center justify-between">
        <h2 className="font-serif text-sm text-[#2C1A0E]">Liste des Utilisateurs</h2>
        <div className="flex gap-2">
          <Button variant="ghost">↓ Exporter</Button>
          <Button variant="primary" onClick={onAdd}>+ Ajouter</Button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-[#F0EBE3] px-5">
        {TABS.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-3 py-2.5 text-[11px] font-medium border-b-2 transition-colors -mb-px
              ${activeTab === tab.id
                ? "border-[#8B5E3C] text-[#8B5E3C]"
                : "border-transparent text-[#9B8878] hover:text-[#3D2B1A]"
              }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Filters bar */}
      <div className="flex items-center gap-2.5 px-5 py-3 border-b border-[#F0EBE3]">
        <select className="border border-[#E8DDD2] rounded-lg px-2.5 py-1.5 text-[11px] bg-[#FAF8F5] text-[#3D2B1A] outline-none">
          <option>Tous les rôles</option><option>Admin</option><option>Client</option><option>Vendeur</option>
        </select>
        <select className="border border-[#E8DDD2] rounded-lg px-2.5 py-1.5 text-[11px] bg-[#FAF8F5] text-[#3D2B1A] outline-none">
          <option>Date d'inscription</option><option>A-Z</option><option>Z-A</option>
        </select>
        <span className="flex-1" />
        <span className="text-[11px] text-[#9B8878]">{filtered.length} utilisateur{filtered.length > 1 ? "s" : ""}</span>
      </div>

      {/* Table */}
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-[#FAF8F5]">
            <th className="w-8 px-5 py-2.5">
              <input type="checkbox" checked={selectAll} onChange={e => setSelectAll(e.target.checked)} className="accent-[#8B5E3C]" />
            </th>
            {["Utilisateur", "Rôle", "Statut", "Inscription", "Commandes", ""].map(h => (
              <th key={h} className="px-5 py-2.5 text-left text-[10px] uppercase tracking-widest text-[#9B8878] font-medium border-b border-[#F0EBE3]">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {filtered.map(user => (
            <tr key={user.id} className="border-b border-[#F0EBE3] last:border-0 hover:bg-[#FDFAF7] transition-colors">
              <td className="px-5 py-3">
                <input type="checkbox" checked={selectAll} className="accent-[#8B5E3C]" readOnly />
              </td>
              <td className="px-5 py-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-medium shrink-0" style={{ background: user.color }}>
                    {user.avatar}
                  </div>
                  <div>
                    <p className="text-xs font-medium text-[#2C1A0E]">{user.name}</p>
                    <p className="text-[10px] text-[#9B8878]">{user.email}</p>
                  </div>
                </div>
              </td>
              <td className="px-5 py-3">{roleBadge(user.role)}</td>
              <td className="px-5 py-3">
                <Badge variant={user.status === "active" ? "active" : "inactive"} label={user.status === "active" ? "Actif" : "Inactif"} />
              </td>
              <td className="px-5 py-3 text-xs text-[#9B8878]">{user.date}</td>
              <td className="px-5 py-3 text-xs text-center text-[#3D2B1A]">{user.orders}</td>
              <td className="px-5 py-3">
                <div className="flex items-center justify-end gap-1.5">
                  <IconBtn title="Voir" onClick={() => onView(user)}><EyeIcon /></IconBtn>
                  <IconBtn title="Modifier" onClick={() => onEdit(user)}><EditIcon /></IconBtn>
                  <IconBtn title="Supprimer" danger onClick={() => onDelete(user.id)}><TrashIcon /></IconBtn>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="flex items-center justify-between px-5 py-3 border-t border-[#F0EBE3]">
        <span className="text-[11px] text-[#9B8878]">Page 1 sur 4 · 28 utilisateurs</span>
        <div className="flex gap-1">
          {["‹", "1", "2", "3", "›"].map((p, i) => (
            <button key={i} className={`w-7 h-7 rounded-lg text-[11px] border transition-colors
              ${p === "1" ? "bg-[#8B5E3C] text-white border-[#8B5E3C]" : "border-[#E8DDD2] text-[#3D2B1A] hover:bg-[#F0EBE3]"}`}>
              {p}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

function IconBtn({ children, danger, ...props }: { children: React.ReactNode; danger?: boolean } & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={`w-7 h-7 rounded-lg border flex items-center justify-center transition-colors
      ${danger ? "border-[#E8DDD2] hover:bg-red-50 hover:border-red-200" : "border-[#E8DDD2] hover:bg-[#F0EBE3]"}`} {...props}>
      {children}
    </button>
  )
}

function EyeIcon() {
  return <svg width="13" height="13" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="8" cy="8" r="3" /><path d="M1 8s2.5-5 7-5 7 5 7 5-2.5 5-7 5-7-5-7-5z" /></svg>
}
function EditIcon() {
  return <svg width="13" height="13" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M11 2l3 3-8 8H3v-3L11 2z" /></svg>
}
function TrashIcon() {
  return <svg width="13" height="13" viewBox="0 0 16 16" fill="none" stroke="red" strokeWidth="1.5"><path d="M3 4h10M6 4V3h4v1M5 4v9h6V4" /></svg>
}