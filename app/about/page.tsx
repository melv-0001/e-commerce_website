"use client"
import {Navbar} from "@/components/my_components/Navbar"
import {Footer} from "@/components/my_components/footer"
import img8 from "@/assets/images/img8.jpg"
import face1 from "@/assets/images/face1.jpg"
import face2 from "@/assets/images/face2.jpg"
import face3 from "@/assets/images/face3.jpg"
import face4 from "@/assets/images/face4.jpg"
import Image from "next/image"

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      {/* Banner */}
      <div className="relative h-[316px] bg-[#F9F1E7] flex flex-col items-center justify-center">
        <h1 className="text-4xl font-semibold text-[#333333]">About</h1>
        <div className="flex items-center gap-2 mt-2 text-sm">
          <a href="/" className="text-[#333333] hover:underline">Home</a>
          <span className="text-[#333333]">&gt;</span>
          <span className="font-medium text-[#333333]">About</span>
        </div>
      </div>

      {/* Notre Histoire */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-2 gap-16 items-center">
          <div className="relative h-[400px]">
            <Image
              src={img8}
              alt="Furniro showroom"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-[#333333] mb-6">Our Story</h2>
            <p className="text-[#666666] leading-relaxed mb-4">
              Founded in 2020, Furniro started with a simple mission: to make high-quality, 
              beautifully designed furniture accessible to everyone. We believe that your home 
              should be a reflection of your personality and style.
            </p>
            <p className="text-[#666666] leading-relaxed mb-4">
              Our team of designers works tirelessly to create pieces that combine functionality 
              with aesthetics. Every item in our collection is crafted from carefully selected 
              materials to ensure durability and comfort.
            </p>
            <p className="text-[#666666] leading-relaxed">
              Today, Furniro serves thousands of happy customers worldwide, helping them 
              transform their houses into homes they love.
            </p>
          </div>
        </div>
      </section>

      {/* Nos Valeurs */}
      <section className="py-16 px-4 bg-[#F9F1E7]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-[#333333] text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-3 gap-8">
            {[
              {
                title: "Quality",
                description: "We source only the finest materials and work with skilled craftsmen to create furniture that lasts."
              },
              {
                title: "Design",
                description: "Our designs blend timeless elegance with modern functionality, creating pieces that fit any space."
              },
              {
                title: "Sustainability",
                description: "We are committed to sustainable practices, using eco-friendly materials and reducing waste."
              }
            ].map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-lg text-center">
                <h3 className="text-xl font-semibold text-[#333333] mb-4">{value.title}</h3>
                <p className="text-[#666666] leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipe */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-[#333333] text-center mb-12">Meet Our Team</h2>
        <div className="grid grid-cols-4 gap-8">
          {[
            { name: "Sarah Johnson", role: "Founder & CEO", image: face1 },
            { name: "Michael Chen", role: "Head of Design", image: face2 },
            { name: "Emma Williams", role: "Product Manager", image: face3 },
            { name: "David Brown", role: "Customer Service", image: face4 }
          ].map((member, index) => (
            <div key={index} className="text-center">
              <div className="relative h-[250px] mb-4">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <h3 className="text-lg font-semibold text-[#333333]">{member.name}</h3>
              <p className="text-[#666666] text-sm">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  )
}
