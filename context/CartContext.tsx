"use client"
import { createContext, useContext, useState, ReactNode, useEffect } from "react"

export type ProductInCart = {
  id: number
  name: string
  price: number
  quantity: number
  image: string
}

type CartContextType = {
  cart: ProductInCart[]
  addToCart: (product: ProductInCart) => void
  removeFromCart: (id: number) => void
  toggleLike: (id: number) => void
  likes: number[]
  share: (product: ProductInCart) => void
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<ProductInCart[]>([])
  const [likes, setLikes] = useState<number[]>([])

  // Charger le panier du localStorage si présent
  useEffect(() => {
    const storedCart = localStorage.getItem("cart")
    const storedLikes = localStorage.getItem("likes")
    if (storedCart) setCart(JSON.parse(storedCart))
    if (storedLikes) setLikes(JSON.parse(storedLikes))
  }, [])

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart))
  }, [cart])

  useEffect(() => {
    localStorage.setItem("likes", JSON.stringify(likes))
  }, [likes])

  const addToCart = (product: ProductInCart) => {
    setCart(prev => {
      const exist = prev.find(p => p.id === product.id)
      if (exist) {
        return prev.map(p =>
          p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
        )
      }
      return [...prev, { ...product, quantity: 1 }]
    })
  }

  const removeFromCart = (id: number) => {
    setCart(prev => prev.filter(p => p.id !== id))
  }

  const toggleLike = (id: number) => {
    setLikes(prev =>
      prev.includes(id) ? prev.filter(l => l !== id) : [...prev, id]
    )
  }

  const share = (product: ProductInCart) => {
    // Simple exemple : copier lien dans le presse-papier
    navigator.clipboard.writeText(`https://myshop.com/product/${product.id}`)
    alert(`${product.name} copié pour partager !`)
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, toggleLike, likes, share }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) throw new Error("useCart must be used within CartProvider")
  return context
}