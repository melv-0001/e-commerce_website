"use client"
import Image from "next/image"
import chambre1 from "@/assets/images/chambre1.jpg"
import cuisine1 from "@/assets/images/cuisine1.jpg"
import salon1 from "@/assets/images/salon1.jpg"

// Les 3 categories a afficher
const categories = [
  {
    name: "Cuisine",
    image: cuisine1,
  },
  {
    name: "Salon",
    image: salon1,
  },
  {
    name: "Chambre",
    image: chambre1,
  },
]

export function BrowseRange() {
  return (
    // py-16 = padding vertical (haut et bas) pour espacer la section
    <section className="py-16">
      {/* Container pour centrer le contenu avec une largeur max */}
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Titre et sous-titre centres */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-2">
            Browse The Range
          </h2>
          <p className="text-muted-foreground">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        {/* Grille de 3 colonnes pour les categories */}
        {/* grid = affichage en grille, grid-cols-3 = 3 colonnes, gap-8 = espace entre */}
        <div className="grid grid-cols-3 gap-8">
          {/* On "boucle" sur chaque categorie pour creer une carte */}
          {categories.map((category) => (
            <div 
              key={category.name} 
              className="group cursor-pointer"
            >
              {/* Container de l'image avec coins arrondis */}
              <div className="relative aspect-[3/4] rounded-lg overflow-hidden mb-4">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              {/* Nom de la categorie centre sous l'image */}
              <h3 className="text-xl font-semibold text-center text-foreground">
                {category.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
