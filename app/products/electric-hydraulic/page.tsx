import Image from "next/image"

export default function ElectricHydraulicPage() {
  // Sample product images - replace with actual product images
  const productImages = [
    "/placeholder.svg?height=400&width=400",
    "/placeholder.svg?height=400&width=400",
    "/placeholder.svg?height=400&width=400",
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Simple Product Information Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Product Title */}
            <h1 className="text-3xl font-bold text-gray-900 mb-6">Electric Hydraulic</h1>

            {/* Product Images */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              {productImages.map((img, index) => (
                <div key={index} className="border rounded-lg overflow-hidden bg-gray-50">
                  <Image
                    src={img || "/placeholder.svg"}
                    alt={`Product image ${index + 1}`}
                    width={400}
                    height={400}
                    className="object-contain w-full h-auto"
                  />
                </div>
              ))}
            </div>

            {/* Product Description */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4">Product Description</h2>
              <p className="text-gray-700 mb-6">
                The Automated Ball Valve Assembly is designed for industrial applications requiring reliable flow
                control. This robust system combines precision engineering with durable materials to ensure long-term
                performance in demanding environments.
              </p>
            </div>

            {/* Product Features - Bullet Points */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4">Key Features</h2>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>High-performance automated ball valve with pneumatic actuator</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Stainless steel construction for corrosion resistance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Temperature range: -20°F to 400°F</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Pressure rating: ANSI Class 300 (740 PSI)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Includes position indicator and manual override</span>
                </li>
              </ul>
            </div>

            {/* Basic Specifications */}
            <div>
              <h2 className="text-xl font-semibold mb-4">Specifications</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-2">
                <div className="py-2 border-b border-gray-200">
                  <span className="font-medium text-gray-900">Model:</span>
                  <span className="ml-2 text-gray-700">ABV-2000</span>
                </div>
                <div className="py-2 border-b border-gray-200">
                  <span className="font-medium text-gray-900">Valve Size:</span>
                  <span className="ml-2 text-gray-700">2 inch</span>
                </div>
                <div className="py-2 border-b border-gray-200">
                  <span className="font-medium text-gray-900">Actuator Type:</span>
                  <span className="ml-2 text-gray-700">Pneumatic, Double-Acting</span>
                </div>
                <div className="py-2 border-b border-gray-200">
                  <span className="font-medium text-gray-900">Body Material:</span>
                  <span className="ml-2 text-gray-700">316 Stainless Steel</span>
                </div>
                <div className="py-2 border-b border-gray-200">
                  <span className="font-medium text-gray-900">Connection:</span>
                  <span className="ml-2 text-gray-700">Flanged, ANSI 150#</span>
                </div>
                <div className="py-2 border-b border-gray-200">
                  <span className="font-medium text-gray-900">Certification:</span>
                  <span className="ml-2 text-gray-700">ATEX, SIL2</span>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="mt-12 p-6 bg-gray-50 rounded-lg border border-gray-200">
              <h2 className="text-xl font-semibold mb-4">For More Information</h2>
              <p className="text-gray-700 mb-2">
                Contact our sales team to learn more about this product or to request a quote.
              </p>
              <p className="text-gray-700">
                <span className="font-medium">Phone:</span> (555) 123-4567
              </p>
              <p className="text-gray-700">
                <span className="font-medium">Email:</span> sales@amequipment.com
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
