"use client"
import { Navbar } from "@/components/my_components/Navbar"
import { Footer } from "@/components/my_components/footer"
import { Button } from "@/components/ui/button1"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Clock } from "lucide-react"

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Banner */}
      <div className="relative h-[316px] bg-[#F9F1E7] flex flex-col items-center justify-center">
        <h1 className="text-4xl font-semibold text-[#333333]">Contact</h1>
        <div className="flex items-center gap-2 mt-2 text-sm">
          <a href="/" className="text-[#333333] hover:underline">Home</a>
          <span className="text-[#333333]">&gt;</span>
          <span className="font-medium text-[#333333]">Contact</span>
        </div>
      </div>

      {/* Contenu principal */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#333333] mb-4">Get In Touch With Us</h2>
          <p className="text-[#666666] max-w-xl mx-auto">
            For more information about our products & services, please feel free to drop us 
            an email. Our staff will always be there to help you out. Do not hesitate!
          </p>
        </div>

        <div className="grid grid-cols-2 gap-16">
          {/* Informations de contact */}
          <div className="space-y-8">
            <div className="flex gap-4">
              <MapPin className="w-6 h-6 text-[#333333] flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-[#333333] mb-2">Address</h3>
                <p className="text-[#666666]">
                  236 5th SE Avenue, New York NY10000, United States
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <Phone className="w-6 h-6 text-[#333333] flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-[#333333] mb-2">Phone</h3>
                <p className="text-[#666666]">
                  Mobile: +(84) 546-6789<br />
                  Hotline: +(84) 456-6789
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <Clock className="w-6 h-6 text-[#333333] flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-[#333333] mb-2">Working Time</h3>
                <p className="text-[#666666]">
                  Monday-Friday: 9:00 - 22:00<br />
                  Saturday-Sunday: 9:00 - 21:00
                </p>
              </div>
            </div>
          </div>

          {/* Formulaire de contact */}
          <div>
            <form className="space-y-6">
              <div>
                <label className="block text-[#333333] font-medium mb-2">Your name</label>
                <Input 
                  type="text" 
                  placeholder="Abc" 
                  className="border-[#9F9F9F] rounded-lg h-12"
                />
              </div>

              <div>
                <label className="block text-[#333333] font-medium mb-2">Email address</label>
                <Input 
                  type="email" 
                  placeholder="Abc@def.com" 
                  className="border-[#9F9F9F] rounded-lg h-12"
                />
              </div>

              <div>
                <label className="block text-[#333333] font-medium mb-2">Subject</label>
                <Input 
                  type="text" 
                  placeholder="This is optional" 
                  className="border-[#9F9F9F] rounded-lg h-12"
                />
              </div>

              <div>
                <label className="block text-[#333333] font-medium mb-2">Message</label>
                <Textarea 
                  placeholder="Hi! I'd like to ask about..." 
                  className="border-[#9F9F9F] rounded-lg min-h-[120px]"
                />
              </div>

              <Button 
                type="submit"
                className="bg-[#B88E2F] hover:bg-[#A07D2A] text-white px-12 py-6 rounded"
              >
                Submit
              </Button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
