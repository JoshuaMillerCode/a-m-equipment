"use client"

import { useParams, useRouter } from "next/navigation"
import { products1 } from "../../data/products"
import ProductDetails from "../components/ProductDetails"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function ProductShowPage() {
  const params = useParams()
  const router = useRouter()
  const product = products1.find((p) => p.id.toString() === params.id)

  if (!product) {
    return <div>Product not found</div>
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Button variant="outline" onClick={() => router.back()} className="mb-6">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Products
        </Button>
        <ProductDetails product={product} />
      </div>
    </div>
  )
}

