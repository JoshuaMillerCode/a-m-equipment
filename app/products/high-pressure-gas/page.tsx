import Image from "next/image"

export default function HighPressureGasPage() {
  // Sample product images - replace with actual product images
  const productImages = [
    {
      src: "/HPG/hpg2.jpeg",
      features: [
        "Rotork GP Modules Stocked for High Pressure Gas Configurations",
        "Hi/Lo, Line Break, & ESD Control Configuration For Any Brand",
        "Full Integration, Function Testing, & Sizing"
      ]
    },
    {
      src: "/HPG/IMG_9687.JPG",
      features: [
        "Temperature range: -40°F to 500°F",
        "Includes pressure relief and safety features",
        "Fail Last, Fail Open, Fail Closed, Using Pipeline Gas"
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Simple Product Information Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {/* Product Title */}
          <h1 className="text-3xl font-bold text-gray-900 mb-6">High Pressure Gas</h1>

          {/* Hero Image */}
          <div className="w-full mb-8">
            <div className="relative w-full h-[500px] rounded-lg overflow-hidden">
              <Image
                src="/HPG/HPG-hero.jpg"
                alt="High Pressure Gas Valve"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Secondary Images with Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {productImages.map((item, index) => (
              <div key={index} className="flex flex-col">
                <div className="border rounded-lg overflow-hidden bg-gray-50 mb-4">
                  <Image
                    src={item.src}
                    alt={`Product image ${index + 1}`}
                    width={600}
                    height={400}
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
                <span className="font-medium">Email:</span> sales@a-mequipment.com
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
