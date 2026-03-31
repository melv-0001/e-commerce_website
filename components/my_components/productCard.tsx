"use client"

import { useCart } from "@/context/CartContext"
import { useFavorites } from "@/context/FavoriteContext"
import { Heart, Share2, ArrowLeftRight } from "lucide-react"
import { Product } from "@/app/shop/favorites/page"
import Image from "next/image"
import { Button } from "@/components/ui/button1"

export function ProductCard({ product }: { product: Product }) {
  const { addToCart, share } = useCart()
  const { toggleFavorite, isFavorite } = useFavorites()

  const liked = isFavorite(product.id)

  return (
    <article className="group relative bg-[#F4F5F7] overflow-hidden rounded-xl transition hover:shadow-lg">
      <div className="relative aspect-square overflow-hidden">
        <Image src={product.image} alt={product.name} fill className="object-cover transition duration-300 group-hover:scale-105" />
        {product.badge && (
          <span className={`absolute top-4 right-4 w-12 h-12 rounded-full flex items-center justify-center text-white text-sm font-medium ${product.badge.color === "red" ? "bg-[#E97171]" : "bg-[#2EC1AC]"}`}>
            {product.badge.text}
          </span>
        )}
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col items-center justify-center gap-4">
          <Button onClick={() => addToCart({ id: product.id, name: product.name, price: product.price, quantity: 1, image: product.image.src || "" })}
            className="bg-white text-[#B88E2F] hover:bg-[#B88E2F] hover:text-white px-12">
            Add to cart
          </Button>
          <div className="flex items-center gap-4 text-white text-sm">
            <button onClick={() => share({ id: product.id, name: product.name, price: product.price, quantity: 1, image: product.image.src || "" })} className="flex items-center gap-1 hover:text-[#B88E2F]">
              <Share2 className="w-4 h-4" /> Share
            </button>
            <button className="flex items-center gap-1 hover:text-[#B88E2F]">
              <ArrowLeftRight className="w-4 h-4" /> Compare
            </button>
            <button className="flex items-center gap-1" onClick={() => toggleFavorite(product.id)}>
              <Heart className={`w-4 h-4 transition ${liked ? "fill-red-500 text-red-500" : "text-white"}`} /> Like
            </button>
          </div>
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-[#3A3A3A] text-xl font-semibold">{product.name}</h3>
        <p className="text-[#898989] text-sm mt-1">{product.description}</p>
        <div className="flex items-center gap-3 mt-2">
          <span className="text-[#3A3A3A] font-semibold">{product.price.toLocaleString()} F</span>
          {product.originalPrice && <span className="text-[#B0B0B0] line-through text-sm">{product.originalPrice.toLocaleString()} F</span>}
        </div>
      </div>
    </article>
  )
}