import Image from "next/image"

export default function ElectricHydraulicPage() {
  // Sample product images - replace with actual product images
  const productImages = [
    {
      src: "/placeholder.svg?height=400&width=400",
      features: [
        "Electric hydraulic control system with precision positioning",
        "High-torque electric actuator with hydraulic backup",
        "Fail-safe operation with emergency shutdown"
      ]
    },
    {
      src: "/placeholder.svg?height=400&width=400",
      features: [
        "Temperature range: -20°F to 350°F",
        "Pressure rating: ANSI Class 600 (1480 PSI)",
        "Includes position feedback and limit switches"
      ]
    },
    {
      src: "/placeholder.svg?height=400&width=400",
      features: [
        "Carbon Steel construction with protective coating",
        "Electric-hydraulic power unit included",
        "CE and UL certified"
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Simple Product Information Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {/* Product Title */}
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Electric Hydraulic</h1>

          {/* Product Images with Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {productImages.map((item, index) => (
              <div key={index} className="flex flex-col">
                <div className="border rounded-lg overflow-hidden bg-gray-50 mb-4">
                  <Image
                    src={item.src}
                    alt={`Product image ${index + 1}`}
                    width={800}
                    height={600}
                    className="object-contain w-full h-auto"
                  />
                </div>
                <ul className="space-y-2 text-gray-700">
                  {item.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Basic Specifications */}
            <div>
              <h2 className="text-xl font-semibold mb-4">Documentation & Resources</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-2">
                <div className="py-2 border-b border-gray-200">
                  <a href="#" className="text-blue-600 hover:text-blue-800 hover:underline">Product Datasheet</a>
                </div>
                <div className="py-2 border-b border-gray-200">
                  <a href="#" className="text-blue-600 hover:text-blue-800 hover:underline">Installation Guide</a>
                </div>
                <div className="py-2 border-b border-gray-200">
                  <a href="#" className="text-blue-600 hover:text-blue-800 hover:underline">User Manual</a>
                </div>
                <div className="py-2 border-b border-gray-200">
                  <a href="#" className="text-blue-600 hover:text-blue-800 hover:underline">Safety Guidelines</a>
                </div>
                <div className="py-2 border-b border-gray-200">
                  <a href="#" className="text-blue-600 hover:text-blue-800 hover:underline">Technical Drawings</a>
                </div>
                <div className="py-2 border-b border-gray-200">
                  <a href="#" className="text-blue-600 hover:text-blue-800 hover:underline">Certification Documents</a>
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
                <span className="font-medium">Phone:</span> (713)-893-9371
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
