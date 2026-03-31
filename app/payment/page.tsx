import {Navbar} from "@/components/my_components/Navbar"

export default function PaymentPage() {
  return (
    <>
      <Navbar />

      <main className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold mb-8">Payment Options</h1>

        <p className="text-gray-600 leading-relaxed">
          We accept credit cards, mobile money, and secure online payments.
          All transactions are encrypted and safe.
        </p>
      </main>
    </>
  )
}