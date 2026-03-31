"use client"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-4 gap-8">
          
          {/* Colonne 1 - Logo et adresse */}
          <div>
            <h3 className="text-2xl font-bold text-foreground">Futura.</h3>
            <p className="text-muted-foreground mt-6 text-sm leading-relaxed">
              400 University Drive Suite 200 Coral Gables,
              <br />
              FL 33134 USA
            </p>
          </div>

          {/* Colonne 2 - Links */}
          <div>
            <h4 className="text-muted-foreground font-medium mb-6">Links</h4>
            <nav className="flex flex-col gap-4">
              <Link href="/" className="text-foreground hover:text-[#B88E2F] transition-colors">
                Home
              </Link>
              <Link href="/shop" className="text-foreground hover:text-[#B88E2F] transition-colors">
                Shop
              </Link>
              <Link href="/about" className="text-foreground hover:text-[#B88E2F] transition-colors">
                About
              </Link>
              <Link href="/contact" className="text-foreground hover:text-[#B88E2F] transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          {/* Colonne 3 - Help */}
          <div>
            <h4 className="text-muted-foreground font-medium mb-6">Help</h4>
            <nav className="flex flex-col gap-4">
              <Link href="/payment" className="text-foreground hover:text-[#B88E2F] transition-colors">
                Payment Options
              </Link>
              <Link href="/returns" className="text-foreground hover:text-[#B88E2F] transition-colors">
                Returns
              </Link>
              <Link href="/privacy-policies" className="text-foreground hover:text-[#B88E2F] transition-colors">
                Privacy Policies
              </Link>
            </nav>
          </div>

          {/* Colonne 4 - Newsletter */}
          <div>
            <h4 className="text-muted-foreground font-medium mb-6">Newsletter</h4>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Enter Your Email Address"
                className="flex-1 border-b border-foreground bg-transparent py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:border-[#B88E2F]"
              />
              <button 
                type="submit"
                className="border-b border-foreground py-2 text-sm font-semibold hover:border-[#B88E2F] hover:text-[#B88E2F] transition-colors"
              >
                SUBSCRIBE
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border mt-12 pt-8">
          <p className="text-foreground">
            2026 Futura. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  )
}
