"use client"
import Link from "next/link"
import { User, Search, Heart, ShoppingCart } from "lucide-react"

export function Navbar() {
  return (
    <header className="w-full bg-background">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold text-foreground">Futura</span>
        </Link>

        {/* Navigation Links */}
        <nav className="hidden items-center gap-8 md:flex">
          <Link
            href="/"
            className="text-base font-medium text-foreground transition-colors hover:text-muted-foreground"
          >
            Home
          </Link>
          <Link
            href="/shop"
            className="text-base font-medium text-foreground transition-colors hover:text-muted-foreground"
          >
            Shop
          </Link>
          <Link
            href="/about"
            className="text-base font-medium text-foreground transition-colors hover:text-muted-foreground"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="text-base font-medium text-foreground transition-colors hover:text-muted-foreground"
          >
            Contact
          </Link>
        </nav>

        {/* Icons */}
        <div className="flex items-center gap-6">
            <Link href="/profile">
                <button
            type="button"
            className="text-foreground transition-colors hover:text-muted-foreground"
            aria-label="Account"
                >
            <User className="h-6 w-6" />
          </button>
          </Link>
          <button
            type="button"
            className="text-foreground transition-colors hover:text-muted-foreground"
            aria-label="Search"
          >
            <Search className="h-6 w-6" />
          </button>
          <Link href="/shop/favorites">
            <button
              type="button"
              className="text-foreground transition-colors hover:text-muted-foreground"
              aria-label="Wishlist"
            >
              <Heart className="h-6 w-6" />
            </button>
          </Link>
          <Link href="/shop/panier">
            <button
              type="button"
              className="relative text-foreground transition-colors hover:text-muted-foreground"
              aria-label="Cart"
            >
              <ShoppingCart className="h-6 w-6" />
            </button>
          </Link>
        </div>
      </div>
    </header>
  )
}
