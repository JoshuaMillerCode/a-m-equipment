import type { Product } from "../../data/products"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

type ProductCardProps = {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  // const Icon = product.icon

  return (
    <Card className="hover:shadow-lg transition-all duration-300 group h-full flex flex-col border-0 shadow-md">
      <CardContent className="p-6 flex flex-col flex-grow">
        <div className="flex flex-col items-center text-center space-y-4 mb-4">
          <div
            className="w-20 h-20 flex items-center justify-center transition-colors duration-300"
            style={{ backgroundColor: `${product.color}20` }}
          >
            {/* <Icon
              className="w-10 h-10 transition-transform duration-300 group-hover:scale-110"
              style={{ color: product.color }}
            /> */}
          </div>
          <h3 className="font-semibold text-lg text-maroon-800">{product.name}</h3>
        </div>
        <p className="text-sm text-gray-600 flex-grow">
          {product.description.length > 200 ? `${product.description.substring(0, 200)}...` : product.description}
        </p>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Link href={`/products/${product.id}`} className="w-full">
          <Button className="w-full bg-red-950 hover:bg-maroon-700">View Details</Button>
        </Link>
      </CardFooter>
    </Card>
  )
}

