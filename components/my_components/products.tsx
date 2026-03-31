"use client"
import Image from "next/image"
import type { StaticImageData } from "next/image"
/* Import des images */
import chambre2 from "@/assets/images/chambre2.jpg"
import chambre3 from "@/assets/images/chambre3.jpg"
import cuisine6 from "@/assets/images/cuisine6.jpg"
import cuisine3 from "@/assets/images/cuisine3.jpg"
import cuisine4 from "@/assets/images/cuisine4.jpg"
import salon2 from "@/assets/images/salon2.jpg"
import salon3 from "@/assets/images/salon3.jpg"
import { Heart, Share2, ArrowLeftRight } from "lucide-react"
import { Button } from "@/components/ui/button1"
import Link from "next/link"

// TYPE = la structure d'un produit (ce qu'on recevra de la BD plus tard)
type Product = {
  id: string
  name: string
  description: string
  price: number
  originalPrice?: number // prix barre (optionnel)
  image: StaticImageData
  badge?: {
    text: string
    color: string // "red" pour -30%, "green" pour New
  }
}

// DONNEES TEMPORAIRES - sera remplace par un appel a la BD
const products: Product[] = [
  {
    id: "1",
    name: "Syltherine",
    description: "Stylish cafe chair",
    price: 2500000,
    originalPrice: 3500000,
    image: salon2,
    badge: { text: "-30%", color: "red" }
  },
  {
    id: "2",
    name: "Leviosa",
    description: "Stylish cafe chair",
    price: 2500000,
    image: salon3,
  },
  {
    id: "3",
    name: "Lolito",
    description: "Luxury big sofa",
    price: 7000000,
    originalPrice: 14000000,
    image: chambre2,
    badge: { text: "-50%", color: "red" }
  },
  {
    id: "4",
    name: "Respira",
    description: "Outdoor bar table and stool",
    price: 500000,
    image: cuisine4,
    badge: { text: "New", color: "green" }
  },
  {
    id: "5",
    name: "Grifo",
    description: "Night lamp",
    price: 1500000,
    image: cuisine6,
  },
  {
    id: "6",
    name: "Muggo",
    description: "Small mug",
    price: 150000,
    image: cuisine3,
    badge: { text: "New", color: "green" }
  },
  {
    id: "7",
    name: "Pingky",
    description: "Cute bed set",
    price: 7000000,
    originalPrice: 14000000,
    image: chambre3,
    badge: { text: "-50%", color: "red" }
  },
  {
    id: "8",
    name: "Potty",
    description: "Minimalist flower pot",
    price: 500000,
    image: salon3,
    badge: { text: "New", color: "green" }
  },
]

// Fonction pour formater le prix (ex: 2500000 -> "Rp 2.500.000")
function formatPrice(price: number): string {
  return `Rp ${price.toLocaleString("id-ID")}`
}

// COMPOSANT CARTE PRODUIT - reutilisable pour chaque produit
function ProductCard({ product }: { product: Product }) {
  return (
    <div className="group relative bg-[#F4F5F7] overflow-hidden">
      {/* Image du produit */}
      <div className="relative aspect-square">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover"
        />
        
        {/* Badge (si present) */}
        {product.badge && (
          <span
            className={`absolute top-4 right-4 w-12 h-12 rounded-full flex items-center justify-center text-white text-sm font-medium ${
              product.badge.color === "red" ? "bg-[#E97171]" : "bg-[#2EC1AC]"
            }`}
          >
            {product.badge.text}
          </span>
        )}

        {/* Overlay au survol - avec boutons d'action 
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-4">
          <Button className="bg-white text-[#B88E2F] hover:bg-[#B88E2F] hover:text-white px-12">
            Add to cart
          </Button>
          <div className="flex items-center gap-4 text-white text-sm">
            <button className="flex items-center gap-1 hover:text-[#B88E2F]">
              <Share2 className="w-4 h-4" /> Share
            </button>
            <button className="flex items-center gap-1 hover:text-[#B88E2F]">
              <ArrowLeftRight className="w-4 h-4" /> Compare
            </button>
            <button className="flex items-center gap-1 hover:text-[#B88E2F]">
              <Heart className="w-4 h-4" /> Like
            </button>
          </div>
        </div>
        */}
      </div>

      {/* Infos produit */}
      <div className="p-4">
        <h3 className="text-[#3A3A3A] text-xl font-semibold">{product.name}</h3>
        <p className="text-[#898989] text-sm mt-1">{product.description}</p>
        <div className="flex items-center gap-3 mt-2">
          <span className="text-[#3A3A3A] font-semibold">{formatPrice(product.price)}</span>
          {product.originalPrice && (
            <span className="text-[#B0B0B0] line-through text-sm">
              {formatPrice(product.originalPrice)}
            </span>
          )}
        </div>
      </div>
    </div>
  )
}

// COMPOSANT PRINCIPAL - affiche la grille de produits
export function Products() {
  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <h2 className="text-[#3A3A3A] text-3xl font-bold text-center mb-8">
        Our Products
      </h2>

      {/* Grille 4 colonnes */}
      <div className="grid grid-cols-4 gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Bouton Show More */}
      <div className="flex justify-center mt-8">
        <Link href="/shop">
            <Button 
              variant="outline" 
              className="border-[#B88E2F] text-[#B88E2F] hover:bg-[#B88E2F] hover:text-white px-16 py-6"
            >
                Show More
            </Button>
        </Link>
      </div>
    </section>
  )
}
