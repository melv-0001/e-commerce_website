"use client"
import Image from "next/image"
import img2 from "@/assets/images/img2.jpg"
import img3 from "@/assets/images/img3.jpg"
import img6 from "@/assets/images/img6.jpg"
import img7 from "@/assets/images/img7.jpg"
import { ChevronRight } from "lucide-react"
import { useState } from "react"
import type { StaticImageData } from "next/image"
import Link from "next/link"

// Ces donnees viendront de la BD plus tard
// Structure: id, image, titre de la piece, categorie
type Room = {
  id: number
  image: StaticImageData
  title: string
  category: string
}

const rooms: Room[] = [
  {
    id: 1,
    title: "Inner Peace",
    category: "Bed Room",
    image: img2
  },
  {
    id: 2,
    title: "Modern Comfort",
    category: "Living Room",
    image: img3
  },
  {
    id: 3,
    title: "Minimal Space",
    category: "Kitchen",
    image: img6
  },
  {
    id: 4,
    title: "Cozy Corner",
    category: "Bed Room",
    image: img7
  },
]

export function Inspiration() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section className="py-16 bg-[#FCF8F3]">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex items-center gap-8">
          
          {/* Partie gauche - Texte */}
          <div className="w-[400px] pl-24 flex-shrink-0">
            <h2 className="text-[40px] font-bold text-foreground leading-tight">
              50+ Beautiful rooms inspiration
            </h2>
            <p className="text-muted-foreground mt-4">
              Our designer already made a lot of beautiful prototype of rooms that inspire you
            </p>
            <Link href="/shop">
                <button className="mt-6 px-8 py-3 bg-[#B88E2F] text-white font-semibold hover:bg-[#A07B2A] transition-colors">
                    Explore More
                </button>
            </Link>
          </div>

          {/* Partie droite - Carousel d'images */}
          <div className="flex-1 flex gap-6 overflow-hidden">
            
            {/* Image principale (grande) */}
            <div className="relative w-[400px] h-[550px] flex-shrink-0">
              <Image
                src={rooms[activeIndex].image}
                alt={rooms[activeIndex].title}
                fill
                className="object-cover"
              />
              {/* Badge en bas de l'image */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/80 backdrop-blur-sm p-4 flex items-end gap-4">
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground">
                      0{activeIndex + 1} — {rooms[activeIndex].category}
                    </p>
                    <h3 className="text-xl font-semibold mt-1">
                      {rooms[activeIndex].title}
                    </h3>
                  </div>
                  <button className="w-10 h-10 bg-[#B88E2F] text-white flex items-center justify-center">
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Images secondaires (plus petites) */}
            <div className="flex gap-4">
              {rooms.slice(1, 3).map((room, index) => (
                <div 
                  key={room.id} 
                  className="relative w-[300px] h-[450px] flex-shrink-0 cursor-pointer"
                  onClick={() => setActiveIndex(index + 1)}
                >
                  <Image
                    src={room.image}
                    alt={room.title}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Points de navigation (dots) */}
        <div className="flex justify-center gap-3 mt-8">
          {rooms.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === activeIndex 
                  ? "bg-[#B88E2F] ring-2 ring-[#B88E2F] ring-offset-2" 
                  : "bg-[#D8D8D8]"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
