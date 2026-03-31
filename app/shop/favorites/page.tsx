"use client"
import { useFavorites } from "@/context/FavoriteContext"
import {Navbar} from "@/components/my_components/Navbar"
import { Footer } from "@/components/my_components/footer"
import { ProductCard } from "@/components/my_components/productCard"
import type { StaticImageData } from "next/image"
import chambre2 from "@/assets/images/chambre2.jpg"
import chambre3 from "@/assets/images/chambre3.jpg"
import cuisine6 from "@/assets/images/cuisine6.jpg"
import cuisine3 from "@/assets/images/cuisine3.jpg"
import cuisine4 from "@/assets/images/cuisine4.jpg"
import salon2 from "@/assets/images/salon2.jpg"
import salon3 from "@/assets/images/salon3.jpg"

export type Product = {
  id: number
  name: string
  description: string
  price: number
  originalPrice?: number
  image: StaticImageData
  badge?: {
    text: string
    color: "red" | "green"
  }
}

const products: Product[] = [

  {
    id: 1,
    name: "Syltherine",
    description: "Stylish cafe chair",
    price: 2500000,
    originalPrice: 3500000,
    image: salon2,
    badge: { text: "-30%", color: "red" }
  },
  {
    id: 2,
    name: "Leviosa",
    description: "Stylish cafe chair",
    price: 2500000,
    image: salon3,
  },
  {
    id: 3,
    name: "Lolito",
    description: "Luxury big sofa",
    price: 7000000,
    originalPrice: 14000000,
    image: chambre2,
    badge: { text: "-50%", color: "red" }
  },
  {
    id: 4,
    name: "Respira",
    description: "Outdoor bar table and stool",
    price: 500000,
    image: chambre3,
    badge: { text: "New", color: "green" }
  },
  {
    id: 5,
    name: "Grifo",
    description: "Night lamp",
    price: 1500000,
    image: cuisine3,
  },
  {
    id: 6,
    name: "Muggo",
    description: "Small mug",
    price: 150000,
    image: cuisine4,
    badge: { text: "New", color: "green" }
  },
  {
    id: 7,
    name: "Pingky",
    description: "Cute bed set",
    price: 7000000,
    originalPrice: 14000000,
    image: salon2,
    badge: { text: "-50%", color: "red" }
  },
  {
    id: 8,
    name: "Potty",
    description: "Minimalist flower pot",
    price: 500000,
    image: cuisine6,
    badge: { text: "New", color: "green" }
  },
]

export default function FavoritesPage() {
  const { favorites } = useFavorites()
  const favoriteProducts = products.filter(p => favorites.includes(p.id))

  return (
    <main className="min-h-screen bg-[#FAF8F5]">
      <Navbar />

      <section className="max-w-7xl mx-auto p-8">
        <h1 className="text-3xl font-bold text-[#3A3A3A] mb-6">Mes favoris</h1>

        {favoriteProducts.length === 0 ? (
          <p className="text-center text-xl text-[#3A3A3A] font-medium mt-16">
            Vous n'avez encore aucun produit dans vos favoris 😔
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {favoriteProducts.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        )}
      </section>

      <Footer />
    </main>
  )
}