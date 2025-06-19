import Image from "next/image"

export default function LowPressurePneumaticPage() {
  // Sample product images - replace with actual product images
  const productImages = [
    {
      src: "/LPP/actuator.jpg",
      features: [
        "Rotork CP/GP Scotch Yoke Actuators",
        "-40°F to +212°F, 175 PSI Operating Pressure",
        "Double-acting and Spring Return Configurations",
        "For Use with Instrument Air or Regulated Nat Gas",
        "Up to 5.3 million in-lbs Torque"
      ]
    },
    {
      src: "/LPP/IMG_8933.jpg",
      features: [
        "Rotork GT Rack and Pinion Actuators",
        "-50°F to +158°F, 145 PSI Operating Pressure",
        "Double-acting and Spring Return Configurations",
        "For Use with Instrument Air or Regulated Nat Gas",
        "Up to 120k in-lbs Torque"
      ]
    },
    {
      src: "/about/IMG_1320.JPG",
      features: [
        "Market Access to All Brands and Configurations",
        "Sizing and Selection Assistance Per Customer Requirements",
        "Full Integration For Any Valve or Actuator"
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Simple Product Information Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {/* Product Title */}
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Low Pressure Pneumatic</h1>

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
            {/* Product Description */}
            {/* <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4">Product Description</h2>
              <p className="text-gray-700 mb-6">
                The Automated Ball Valve Assembly is designed for industrial applications requiring reliable flow
                control. This robust system combines precision engineering with durable materials to ensure long-term
                performance in demanding environments.
              </p>
            </div> */}

            {/* Product Features - Bullet Points
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
            </div> */}

            {/* Basic Specifications */}
            <div>
              <h2 className="text-xl font-semibold mb-4">Documentation & Resources</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-2">
                <div className="py-2 border-b border-gray-200">
                  <a href="https://rcl-p-001.sitecorecontenthub.cloud/api/public/content/pub011-001-000313-pdf-rtkimportassetbe9042.pdf" className="text-blue-600 hover:text-blue-800 hover:underline" target="_blank">Brochure: GP/GH Rotork -English (PDF)</a>
                </div>
                <div className="py-2 border-b border-gray-200">
                  <a href="https://rcl-p-001.sitecorecontenthub.cloud/api/public/content/pub011-030-000917-pdf-rtkimportasset342e5d.pdf" className="text-blue-600 hover:text-blue-800 hover:underline" target="_blank">Technical Data: GP/GH Rotork Spring Return Dimension Data (PDF)</a>
                </div>
                <div className="py-2 border-b border-gray-200">
                  <a href="https://rcl-p-001.sitecorecontenthub.cloud/api/public/content/pub011-031-000917-pdf-rtkimportasseta8bd42.pdf" className="text-blue-600 hover:text-blue-800 hover:underline" target="_blank">Technical Data: GP/GH Rotork Double Acting Dimension Data (PDF)</a>
                </div>
                <div className="py-2 border-b border-gray-200">
                  <a href="https://rcl-p-001.sitecorecontenthub.cloud/api/public/content/pub110-019-000325rotorkgtrangebrochure-pdf-j3vlokzqyug9scjv3kdw.pdf" className="text-blue-600 hover:text-blue-800 hover:underline" target="_blank">Brochure: GT Rotork Rack and Pinion Range – English (PDF)</a>
                </div>
                <div className="py-2 border-b border-gray-200">
                  <a href="https://rcl-p-001.sitecorecontenthub.cloud/api/public/content/pub110-016-00-0723-pdf-rtkimportasset60ad6c.pdf" className="text-blue-600 hover:text-blue-800 hover:underline" target="_blank" >Brochure: GT Rotork Rack and Pinion Sales -English (PDF)</a>
                </div>
                {/* <div className="py-2 border-b border-gray-200">
                  <a href="#" className="text-blue-600 hover:text-blue-800 hover:underline">Certification Documents</a>
                </div> */}
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
                <span className="font-medium">Email:</span> sales@a-mequipment.com
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
