"use client"

import { useRouter } from "next/navigation"
import { Navbar } from "@/components/my_components/Navbar"
import { Footer } from "@/components/my_components/footer"

export default function ProfilePage() {
  const router = useRouter()

  // Récupération des infos (localStorage pour l’instant)
  const user = JSON.parse(localStorage.getItem("user") || "{}")

  const handleLogout = () => {
    localStorage.removeItem("token")
    localStorage.removeItem("user")
    router.push("/login")
  }

  return (
    <main className="min-h-screen bg-[#FAF8F5]">
      <Navbar />

      {/* HEADER */}
      <section className="bg-[#F9F1E7] py-16 text-center">
        <h1 className="text-4xl font-bold text-[#3A3A3A]">Mon Profil</h1>
        <p className="text-[#898989] mt-2">
          Gérez vos informations personnelles
        </p>
      </section>

      {/* CARD PROFILE */}
      <section className="max-w-3xl mx-auto px-6 py-12">
        <div className="bg-white rounded-2xl shadow-md p-8 border border-[#F0EBE3]">
          
          {/* Avatar */}
          <div className="flex flex-col items-center mb-8">
            <div className="w-24 h-24 rounded-full bg-[#B88E2F] flex items-center justify-center text-white text-3xl font-bold">
              {user?.firstName?.[0] || "U"}
            </div>
            <h2 className="mt-4 text-2xl font-semibold text-[#3A3A3A]">
              {user.firstName} {user.lastname}
            </h2>
            <p className="text-[#898989]">{user.email}</p>
          </div>

          {/* INFOS */}
          <div className="space-y-4">
            
            <ProfileField label="Nom" value={user.lastname} />
            <ProfileField label="Prénom" value={user.firstName} />
            <ProfileField label="Email" value={user.email} />

          </div>

          {/* ACTIONS */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-between">
            
            <button className="border border-[#B88E2F] text-[#B88E2F] px-6 py-3 rounded-lg hover:bg-[#B88E2F] hover:text-white transition">
              Modifier mes infos
            </button>

            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg transition"
            >
              Se déconnecter
            </button>

          </div>

        </div>
      </section>

      <Footer />
    </main>
  )
}

// Composant réutilisable
function ProfileField({ label, value }: { label: string; value?: string }) {
  return (
    <div className="border-b pb-3">
      <p className="text-sm text-[#898989]">{label}</p>
      <p className="text-[#3A3A3A] font-medium">{value || "-"}</p>
    </div>
  )
}