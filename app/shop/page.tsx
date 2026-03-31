"use client"

import { useState } from "react"
import { Navbar } from "@/components/my_components/Navbar"
import { Footer } from "@/components/my_components/footer"
import { Button } from "@/components/ui/button1"
import { ChevronRight } from "lucide-react"

import chambre2 from "@/assets/images/chambre2.jpg"
import chambre3 from "@/assets/images/chambre3.jpg"
import cuisine6 from "@/assets/images/cuisine6.jpg"
import cuisine3 from "@/assets/images/cuisine3.jpg"
import cuisine4 from "@/assets/images/cuisine4.jpg"
import salon2 from "@/assets/images/salon2.jpg"
import salon3 from "@/assets/images/salon3.jpg"
import Link from "next/link"
import { ProductCard } from "@/components/my_components/productCard"

// Liste des produits - Plus tard ce sera fetch depuis la BD
const products = [
  { id: 1, name: "Syltherine", description: "Stylish cafe chair", price: 2500000, originalPrice: 3500000, image: cuisine6/*, badge: "-30%", badgeColor: "#E97171"*/ },
  { id: 2, name: "Leviosa", description: "Stylish cafe chair", price: 2500000, image: chambre2 },
  { id: 3, name: "Lolito", description: "Luxury big sofa", price: 7000000, originalPrice: 14000000, image: salon3/*, badge: "-50%", badgeColor: "#E97171"*/ },
  { id: 4, name: "Respira", description: "Outdoor bar table and stool", price: 500000, image: chambre3/*, badge: "New", badgeColor: "#2EC1AC"*/ },
  { id: 5, name: "Grifo", description: "Night lamp", price: 1500000, image: cuisine3 },
  { id: 6, name: "Muggo", description: "Small mug", price: 150000, image: cuisine4/*, badge: "New", badgeColor: "#2EC1AC"*/ },
  { id: 7, name: "Pingky", description: "Cute bed set", price: 7000000, originalPrice: 14000000, image: salon2/*, badge: "-50%", badgeColor: "#E97171"*/ },
  { id: 8, name: "Potty", description: "Minimalist flower pot", price: 500000, image: cuisine6/*, badge: "New", badgeColor: "#2EC1AC"*/ },

]

// Nombre de produits par page
const PRODUCTS_PER_PAGE = 8

export default function ShopPage() {
  // Page actuelle (commence a 1)
  const [currentPage, setCurrentPage] = useState(1)

  // Calculer le nombre total de pages
  // Math.ceil arrondit vers le haut (ex: 8 produits / 8 par page = 1 page)
  const totalPages = Math.ceil(products.length / PRODUCTS_PER_PAGE)

  // Calculer quels produits afficher sur cette page
  // Page 1: produits 0-7, Page 2: produits 8-15, etc.
  const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE
  const endIndex = startIndex + PRODUCTS_PER_PAGE
  const currentProducts = products.slice(startIndex, endIndex)

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Banner de la page */}
      <section className="relative h-64 bg-[#F9F1E7] flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-[#3A3A3A]">Shop</h1>
        {/* Fil d'Ariane (breadcrumb) */}
        <div className="flex items-center gap-2 mt-4 text-sm">
          <Link href="/" className="text-[#3A3A3A] hover:underline">
            Home
          </Link>
          <ChevronRight className="w-4 h-4 text-[#3A3A3A]" />
          <span className="font-medium text-[#3A3A3A]">Shop</span>
        </div>
      </section>

      {/* Barre de filtres */}
      <section className="bg-[#F9F1E7] border-t border-[#D9D9D9]">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="text-[#3A3A3A]">
              Showing {startIndex + 1}-{Math.min(endIndex, products.length)} of {products.length} results
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-[#3A3A3A]">Sort by</span>
            <select className="border border-[#9F9F9F] px-4 py-2 bg-white">
              <option>Default</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Newest</option>
            </select>
          </div>
        </div>
      </section>

      {/* Grille de produits */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-4 gap-8">
          {currentProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-4 mt-12">
            {/* Generer les boutons de pagination */}
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <Button
                key={page}
                variant={page === currentPage ? "default" : "outline"}
                className={`w-12 h-12 ${
                  page === currentPage
                    ? "bg-[#B88E2F] hover:bg-[#A67D29] text-white"
                    : "border-[#B88E2F] text-[#B88E2F] hover:bg-[#B88E2F] hover:text-white"
                }`}
                onClick={() => setCurrentPage(page)}
              >
                {page}
              </Button>
            ))}
            
            {/* Bouton Next */}
            {currentPage < totalPages && (
              <Button
                variant="outline"
                className="border-[#B88E2F] text-[#B88E2F] hover:bg-[#B88E2F] hover:text-white px-6"
                onClick={() => setCurrentPage(currentPage + 1)}
              >
                Next
              </Button>
            )}
          </div>
        )}
      </section>

      <Footer />
    </main>
  )
}
