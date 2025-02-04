import Image from "next/image"

const products = [
  {
    name: "Ball Valves",
    description: "Versatile valves for on-off and flow control applications.",
    image: "/placeholder.svg",
  },
  {
    name: "Gate Valves",
    description: "Ideal for applications requiring full flow and minimal pressure drop.",
    image: "/placeholder.svg",
  },
  {
    name: "Globe Valves",
    description: "Perfect for precise flow regulation and throttling services.",
    image: "/placeholder.svg",
  },
  {
    name: "Butterfly Valves",
    description: "Compact and lightweight valves for large diameter pipelines.",
    image: "/placeholder.svg",
  },
  {
    name: "Check Valves",
    description: "Prevent backflow in piping systems to protect equipment.",
    image: "/placeholder.svg",
  },
  {
    name: "Diaphragm Valves",
    description: "Excellent for handling corrosive, abrasive, and hygienic applications.",
    image: "/placeholder.svg",
  },
]

export default function Products() {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-8">Our Products</h1>
      <p className="text-xl text-gray-600 mb-12">
        Discover our comprehensive range of high-quality valves designed to meet the diverse needs of various
        industries.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <Image
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              width={400}
              height={300}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-2">{product.name}</h2>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300">
                Request Quote
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

