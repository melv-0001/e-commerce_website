"use client"
import { Button } from "@/components/ui/button1"
import salon_hero from "@/assets/images/salon_hero1.jpg"
import Image from "next/image"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative w-full min-h-[600px] bg-[#FCF8F3]">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={salon_hero}
          alt="Modern living room with stylish furniture"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 container mx-auto px-4 h-full min-h-[600px] flex items-center justify-end">
        <div className="bg-[#FFF3E3] p-10 md:p-16 max-w-[640px] rounded-sm">
          <span className="text-sm font-semibold tracking-widest text-[#333333]">
            New Arrival
          </span>
          
          <h1 className="mt-2 text-3xl md:text-[52px] md:leading-tight font-bold text-[#B88E2F]">
            Discover Our New Collection
          </h1>
          
          <p className="mt-4 text-base text-[#333333] leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
          </p>
          <Link href="/shop">
                <Button className="mt-8 bg-[#B88E2F] hover:bg-[#A67C28] text-white font-bold px-16 py-6 text-base rounded-none">
                    BUY NOW
                </Button>
            </Link>
        </div>
      </div>
    </section>
  )
}
