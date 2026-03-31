"use client"
import { useState } from "react"
import { User } from "@/types/admin"
import { mockUsers, AVATAR_COLORS } from "@/lib/data/user"

import Sidebar from "@/components/admin/Sidebar"
import Topbar from "@/components/admin/Topbar"
import StatCard from "@/components/ui/StatCard"
import UserTable from "@/components/admin/UserTable"
import UserModal from "@/components/admin/UserModal"
import ActivityFeed from "@/components/admin/ActivityFeed"
import BarChart from "@/components/admin/BarChart"

type Page = "users" | "products" | "orders" | "stats" | "settings"
type ModalMode = "add" | "edit" | "view"

const PAGE_META: Record<Page, { title: string; breadcrumb: string }> = {
  users:    { title: "Gestion des Utilisateurs", breadcrumb: "Tableau de bord › Utilisateurs" },
  products: { title: "Catalogue Produits",       breadcrumb: "Tableau de bord › Produits" },
  orders:   { title: "Commandes",                breadcrumb: "Tableau de bord › Commandes" },
  stats:    { title: "Statistiques",             breadcrumb: "Tableau de bord › Statistiques" },
  settings: { title: "Paramètres",               breadcrumb: "Tableau de bord › Paramètres" },
}

export default function AdminPage() {
  const [activePage, setActivePage] = useState<Page>("users")
  const [users, setUsers] = useState<User[]>(mockUsers)
  const [searchQuery, setSearchQuery] = useState("")
  const [modal, setModal] = useState<{ mode: ModalMode; user?: User } | null>(null)

  // CRUD handlers
  const handleAdd = () => setModal({ mode: "add" })
  const handleEdit = (user: User) => setModal({ mode: "edit", user })
  const handleView = (user: User) => setModal({ mode: "view", user })
  const handleDelete = (id: number) => {
    if (confirm("Supprimer cet utilisateur ?")) setUsers(prev => prev.filter(u => u.id !== id))
  }
  const handleSave = (data: Partial<User>) => {
    if (modal?.mode === "edit" && modal.user) {
      setUsers(prev => prev.map(u => u.id === modal.user!.id ? { ...u, ...data } : u))
    } else if (modal?.mode === "add") {
      const newUser: User = {
        id: Date.now(),
        name: data.name ?? "",
        email: data.email ?? "",
        role: data.role ?? "Client",
        status: data.status ?? "active",
        date: "Aujourd'hui",
        orders: 0,
        avatar: data.avatar ?? "??",
        color: AVATAR_COLORS[users.length % AVATAR_COLORS.length],
      }
      setUsers(prev => [...prev, newUser])
    }
  }

  const stats = {
    total:    users.length,
    actifs:   users.filter(u => u.status === "active").length,
    admins:   users.filter(u => u.role === "Admin").length,
    suspendus: users.filter(u => u.status === "inactive").length,
  }

  return (
    <div className="flex h-screen bg-[#FAF8F5] overflow-hidden">
      <Sidebar activePage={activePage} onNavigate={setActivePage} />

      <div className="flex flex-col flex-1 overflow-hidden">
        <Topbar
          title={PAGE_META[activePage].title}
          breadcrumb={PAGE_META[activePage].breadcrumb}
          onSearch={setSearchQuery}
        />

        <main className="flex-1 overflow-y-auto p-7">
          {activePage === "users" && (
            <>
              {/* Stats */}
              <div className="grid grid-cols-4 gap-4 mb-7">
                <StatCard label="Total Utilisateurs" value={stats.total}    accent="tan"   trend="up"   trendLabel="12% ce mois" />
                <StatCard label="Actifs"              value={stats.actifs}   accent="green" trend="up"   trendLabel="8% ce mois" />
                <StatCard label="Admins"              value={stats.admins}   accent="blue"  sub="Dont 3 super admins" />
                <StatCard label="Suspendus"           value={stats.suspendus} accent="red"  trend="down" trendLabel="2 nouveaux" />
              </div>

              {/* Contenu principal */}
              <div className="grid grid-cols-[1fr_280px] gap-5">
                <UserTable
                  users={users}
                  searchQuery={searchQuery}
                  onEdit={handleEdit}
                  onView={handleView}
                  onDelete={handleDelete}
                  onAdd={handleAdd}
                />
                <div className="flex flex-col gap-4">
                  <BarChart />
                  <ActivityFeed />
                </div>
              </div>
            </>
          )}

          {activePage !== "users" && (
            <div className="flex items-center justify-center h-64 text-[#9B8878] text-sm">
              Page "{PAGE_META[activePage].title}" — à implémenter
            </div>
          )}
        </main>
      </div>

      {/* Modal */}
      {modal && (
        <UserModal
          mode={modal.mode}
          user={modal.user}
          onClose={() => setModal(null)}
          onSave={handleSave}
        />
      )}
    </div>
  )
}