"use client"

import { useState } from "react"

export default function ProfilePage() {
  const [user, setUser] = useState({
    name: "Emmanuel",
    email: "emmanuel@email.com",
    phone: "01020304",
  })

  return (
    <main className="min-h-screen p-8 bg-gray-50">
      <div className="max-w-2xl mx-auto bg-white p-6 rounded-xl shadow">
        <h1 className="text-2xl font-bold mb-6">Mon profil</h1>

        {/* Formulaire */}
        <form className="space-y-4">
          <input
            type="text"
            value={user.name}
            onChange={(e) => setUser({ ...user, name: e.target.value })}
            className="w-full border p-3 rounded"
            placeholder="Nom"
          />

          <input
            type="email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            className="w-full border p-3 rounded"
            placeholder="Email"
          />

          <input
            type="text"
            value={user.phone}
            onChange={(e) => setUser({ ...user, phone: e.target.value })}
            className="w-full border p-3 rounded"
            placeholder="Téléphone"
          />

          <button className="bg-[#B88E2F] text-white px-6 py-3 rounded hover:bg-[#A07B2A]">
            Sauvegarder
          </button>
        </form>
      </div>
    </main>
  )
}