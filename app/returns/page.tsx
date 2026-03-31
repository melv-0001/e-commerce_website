import {Navbar} from "@/components/my_components/Navbar"

export default function ReturnsPage() {
  return (
    <>
      <Navbar />

      <main className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold mb-8">Returns Policy</h1>

        <p className="text-gray-600 leading-relaxed">
          You can return any product within 7 days of delivery.
          Items must be unused and in their original packaging.
        </p>
      </main>
    </>
  )
}