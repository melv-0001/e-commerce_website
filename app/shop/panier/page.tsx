"use client"
import { useCart } from "@/context/CartContext"
import { Navbar } from "@/components/my_components/Navbar"
import { Footer } from "@/components/my_components/footer"
import { Button } from "@/components/ui/button1"
import { ChevronRight } from "lucide-react"
import Link from "next/link"

export default function CartPage() {
  const { cart, removeFromCart } = useCart()

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <main className="min-h-screen bg-[#FAF8F5]">
      {/* Navbar */}
      <Navbar />

      {/* Banner / Top section */}
      <section className="relative h-40 md:h-64 bg-[#F9F1E7] flex flex-col items-center justify-center">
        <h1 className="text-4xl md:text-5xl font-bold text-[#3A3A3A]">Mon Panier</h1>
        <div className="flex items-center gap-2 mt-4 text-sm">
          <Link href="/" className="text-[#3A3A3A] hover:underline">
            Home
          </Link>
          <ChevronRight className="w-4 h-4 text-[#3A3A3A]" />
          <span className="font-medium text-[#3A3A3A]">Panier</span>
        </div>
      </section>

      {/* Contenu du panier */}
      <section className="max-w-4xl mx-auto p-8">
        {cart.length === 0 ? (
          <p className="text-center text-xl text-[#3A3A3A] font-medium mt-16">
            Votre panier est vide 😔
          </p>
        ) : (
          <div className="bg-white p-6 rounded-xl shadow-md">
            <ul className="space-y-4">
              {cart.map((item) => (
                <li
                  key={item.id}
                  className="flex flex-col md:flex-row items-center md:items-start justify-between border-b pb-4"
                >
                  <div className="flex items-center gap-4 w-full md:w-3/4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded-lg border"
                    />
                    <div>
                      <p className="font-semibold text-[#3A3A3A]">{item.name}</p>
                      <p className="text-sm text-[#898989]">Qté: {item.quantity}</p>
                      <p className="mt-1 font-medium text-[#B88E2F]">
                        {(item.price * item.quantity).toLocaleString()} F
                      </p>
                    </div>
                  </div>
                  <button
                    className="mt-3 md:mt-0 text-white bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg transition"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Supprimer
                  </button>
                </li>
              ))}
            </ul>

            {/* Total et checkout */}
            <div className="mt-6 flex flex-col md:flex-row justify-between items-center">
              <p className="text-xl font-bold text-[#3A3A3A]">
                Total: <span className="text-[#B88E2F]">{total.toLocaleString()} F</span>
              </p>
              <Button className="mt-4 md:mt-0 bg-[#B88E2F] hover:bg-[#8B5E3C] text-white px-6 py-3 rounded-lg font-medium transition">
                Passer à la caisse
              </Button>
            </div>
          </div>
        )}
      </section>

      {/* Footer */}
      <Footer />
    </main>
  )
}