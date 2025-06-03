import type { Product, Product1 } from "../../data/products"
import ProductCard from "./ProductCard"

type ProductGridProps = {
  products: Product1[]
}



export default function ProductGrid({ products }: ProductGridProps) {
  if (!products || products.length === 0) {
    return <div className="text-center py-10">No products found.</div>
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}

