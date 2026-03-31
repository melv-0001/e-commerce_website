import {Navbar} from "@/components/my_components/Navbar"

export default function PrivacyPage() {
  return (
    <>
      <Navbar />

      <main className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>

        <p className="text-gray-600 leading-relaxed">
          Your personal information is secure. We do not share your data
          with third parties and use it only to improve your experience.
        </p>
      </main>
    </>
  )
}