"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"

export default function RegisterPage() {
  const router = useRouter()
  const [form, setForm] = useState({ firstName: "",lastName: "",  email: "", password: "" })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [serverError, setServerError] = useState("")
  const [loading, setLoading] = useState(false)

  const update = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm(prev => ({ ...prev, [field]: e.target.value }))
    setErrors(prev => ({ ...prev, [field]: "" })) // efface l'erreur au changement
  }

  const validate = () => {
    const e: Record<string, string> = {}
    if (!form.lastName.trim()) e.lastname = "Le nom est requis"
    if (!form.firstName.trim()) e.firstName = "Le prénom est requis"
    if (!form.email.includes("@")) e.email = "Email invalide"
    if (form.password.length < 8) e.password = "8 caractères minimum"
    return e
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setServerError("")

    const validationErrors = validate()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    setLoading(true)
    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })

      const data = await res.json()

      if (res.ok) {
        router.push("/login?registered=true") // paramètre pour afficher un message de bienvenue sur /login
      } else {
        // Le backend renvoie { message: "..." }
        setServerError(data.message || "Une erreur est survenue")
      }
    } catch {
      setServerError("Impossible de contacter le serveur. Réessayez.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-[#FAF8F5]">
      <div className="bg-white p-8 rounded-xl shadow-sm w-full max-w-md border border-[#F0EBE3]">
        
        <div className="mb-8">
          <h1 className="font-serif text-2xl text-[#2C1A0E] mb-1">Créer un compte</h1>
          <p className="text-sm text-[#9B8878]">Rejoignez Futura et découvrez nos collections</p>
        </div>

        {serverError && (
          <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-700 text-sm rounded-lg">
            {serverError}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            
            <Field label="Prénom" error={errors.firstName}>
              <input
                type="text"
                value={form.firstName}
                onChange={update("firstName")}
                placeholder="Amara"
                className={inputClass(errors.firstName)}
              />
            </Field>

            <Field label="Nom" error={errors.name}>
              <input
                type="text"
                value={form.lastName}
                onChange={update("lastName")}
                placeholder="Diallo"
                className={inputClass(errors.name)}
              />
            </Field>
          </div>

          <Field label="Email" error={errors.email}>
            <input
              type="email"
              value={form.email}
              onChange={update("email")}
              placeholder="amara@exemple.com"
              className={inputClass(errors.email)}
            />
          </Field>

          <Field label="Mot de passe" error={errors.password}>
            <input
              type="password"
              value={form.password}
              onChange={update("password")}
              placeholder="8 caractères minimum"
              className={inputClass(errors.password)}
            />
          </Field>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#B88E2F] hover:bg-[#8B5E3C] text-white py-3 rounded-lg text-sm font-medium transition-colors disabled:opacity-60 disabled:cursor-not-allowed mt-2"
          >
            {loading ? "Inscription en cours..." : "Créer mon compte"}
          </button>
        </form>

        <p className="text-center text-sm text-[#9B8878] mt-6">
          Déjà un compte ?{" "}
          <Link href="/login" className="text-[#B88E2F] hover:underline font-medium">
            Se connecter
          </Link>
        </p>
      </div>
    </main>
  )
}

// Composants utilitaires
function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="block text-xs font-medium text-[#3D2B1A] uppercase tracking-wide mb-1.5">
        {label}
      </label>
      {children}
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  )
}

function inputClass(error?: string) {
  return `w-full border ${error ? "border-red-400" : "border-[#E8DDD2]"} bg-[#FAF8F5] focus:bg-white focus:border-[#C0A882] rounded-lg p-3 text-sm text-[#3D2B1A] outline-none transition-colors placeholder:text-[#9B8878]`
}