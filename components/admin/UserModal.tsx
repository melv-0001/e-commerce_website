"use client"
import { useEffect, useState } from "react"
import { User, UserRole, UserStatus } from "@/types/admin"
import Button from "@/components/ui/Button"

type ModalMode = "add" | "edit" | "view"

interface UserModalProps {
  mode: ModalMode
  user?: User | null
  onClose: () => void
  onSave: (data: Partial<User>) => void
}

export default function UserModal({ mode, user, onClose, onSave }: UserModalProps) {
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", role: "Client" as UserRole, status: "active" as UserStatus })

  useEffect(() => {
    if (user && (mode === "edit" || mode === "view")) {
      const [firstName, ...rest] = user.name.split(" ")
      setForm({ firstName, lastName: rest.join(" "), email: user.email, role: user.role, status: user.status })
    }
  }, [user, mode])

  const update = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setForm(prev => ({ ...prev, [field]: e.target.value }))

  const handleSave = () => {
    onSave({ ...form, name: `${form.firstName} ${form.lastName}`, avatar: `${form.firstName[0] ?? ""}${form.lastName[0] ?? ""}`.toUpperCase() })
    onClose()
  }

  const title = mode === "add" ? "Ajouter un utilisateur" : mode === "edit" ? "Modifier l'utilisateur" : "Profil utilisateur"
  const isView = mode === "view"

  return (
    <div className="fixed inset-0 bg-[#2C1A0E]/50 flex items-center justify-center z-50" onClick={onClose}>
      <div className="bg-white rounded-xl w-[420px] max-w-[90vw] overflow-hidden shadow-xl" onClick={e => e.stopPropagation()}>
        
        {/* Header */}
        <div className="px-6 py-5 border-b border-[#F0EBE3] flex items-center justify-between">
          <h2 className="font-serif text-base text-[#2C1A0E]">{title}</h2>
          <button onClick={onClose} className="text-[#9B8878] hover:text-[#3D2B1A] text-lg leading-none transition-colors">×</button>
        </div>

        {/* Body */}
        <div className="px-6 py-5 space-y-4">
          {isView && user ? (
            <ViewProfile user={user} form={form} />
          ) : (
            <EditForm form={form} update={update} />
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-[#F0EBE3] flex justify-end gap-2">
          <Button variant="ghost" onClick={onClose}>Annuler</Button>
          {!isView && <Button variant="primary" onClick={handleSave}>Enregistrer</Button>}
        </div>
      </div>
    </div>
  )
}

function ViewProfile({ user, form }: { user: User; form: typeof defaultForm }) {
  return (
    <>
      <div className="text-center pb-4 border-b border-[#F0EBE3]">
        <div className="w-14 h-14 rounded-full flex items-center justify-center text-white text-lg font-medium mx-auto mb-2" style={{ background: user.color }}>
          {user.avatar}
        </div>
        <p className="font-medium text-[#2C1A0E]">{user.name}</p>
        <p className="text-xs text-[#9B8878]">{user.email}</p>
      </div>
      <div className="grid grid-cols-2 gap-3 text-xs">
        {[["Rôle", form.role], ["Statut", form.status === "active" ? "Actif" : "Inactif"], ["Inscrit le", user.date], ["Commandes", String(user.orders)]].map(([k, v]) => (
          <div key={k}>
            <p className="text-[#9B8878] mb-1">{k}</p>
            <p className="font-medium text-[#3D2B1A]">{v}</p>
          </div>
        ))}
      </div>
    </>
  )
}

const defaultForm = { firstName: "", lastName: "", email: "", role: "Client" as UserRole, status: "active" as UserStatus }

function EditForm({ form, update }: { form: typeof defaultForm; update: (f: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void }) {
  return (
    <>
      <div className="grid grid-cols-2 gap-3">
        <Field label="Prénom"><input value={form.firstName} onChange={update("firstName")} className={input} placeholder="Amara" /></Field>
        <Field label="Nom"><input value={form.lastName} onChange={update("lastName")} className={input} placeholder="Diallo" /></Field>
      </div>
      <Field label="Email"><input type="email" value={form.email} onChange={update("email")} className={input} placeholder="amara@furniro.ci" /></Field>
      <div className="grid grid-cols-2 gap-3">
        <Field label="Rôle">
          <select value={form.role} onChange={update("role")} className={input}>
            <option>Client</option><option>Admin</option><option>Vendeur</option>
          </select>
        </Field>
        <Field label="Statut">
          <select value={form.status} onChange={update("status")} className={input}>
            <option value="active">Actif</option><option value="inactive">Inactif</option>
          </select>
        </Field>
      </div>
    </>
  )
}

const input = "w-full border border-[#E8DDD2] bg-[#FAF8F5] focus:bg-white focus:border-[#C0A882] rounded-lg px-3 py-2 text-xs text-[#3D2B1A] outline-none transition-colors"

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="block text-[10px] uppercase tracking-widest text-[#3D2B1A] mb-1.5">{label}</label>
      {children}
    </div>
  )
}