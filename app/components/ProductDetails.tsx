import type { Product, Product1, DownloadableFile } from "../data/products"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check, Info, Download } from "lucide-react"
import Image from "next/image"
import { downloadMultipleFiles } from "../utils/downloadMultipleFiles"

type ProductDetailsProps = {
  product: Product1
}

function FileDownloadButton({ file }: { file: DownloadableFile }) {
  return (
    <Button variant="outline" className="w-full justify-start" asChild>
      <a href={file.url} download>
        <Download className="mr-2 h-4 w-4" />
        {file.name}
        <span className="ml-auto text-xs text-gray-500">{file.type}</span>
      </a>
    </Button>
  )
}

export default function ProductDetails({ product }: ProductDetailsProps) {
  // const Icon = product.icon

  const handleDownloadAll = () => {
    downloadMultipleFiles(product.downloadableFiles)
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2 space-y-8">
        <Card className="border-0 shadow-md">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6 mb-6">
              <div className="w-64 h-64 relative bg-gray-100">
                <Image
                  src={`/placeholder.svg?height=256&width=256&text=${product.name}`}
                  alt={product.name}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="flex-grow">
                <h1 className="text-3xl font-bold mb-2 text-maroon-800">{product.name}</h1>
                <p className="text-lg text-maroon-600 mb-4">{product.category}</p>
                <p className="text-gray-700">{product.description}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-md">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-4 text-maroon-800">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Durable Construction",
                "High Pressure Rating",
                "Corrosion Resistant",
                "Easy Maintenance",
                "Precision Control",
                "ANSI/API Compliant",
              ].map((feature, index) => (
                <div key={index} className="flex items-start">
                  <Check className="w-5 h-5 text-maroon-600 mr-2 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-maroon-700">{feature}</h3>
                    <p className="text-sm text-gray-600">Engineered to meet the highest industry standards.</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-md">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-4 text-maroon-800">Downloads</h2>
            <Button onClick={handleDownloadAll} className="w-full mb-4 bg-maroon-600 hover:bg-maroon-700">
              Download All Files
            </Button>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {product.downloadableFiles.map((file, index) => (
                <FileDownloadButton key={index} file={file} />
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-md">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-4 text-maroon-800">Technical Specifications</h2>
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-maroon-50">
                  <th className="border border-maroon-200 p-2 text-left text-maroon-800">Specification</th>
                  <th className="border border-maroon-200 p-2 text-left text-maroon-800">Details</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-maroon-200 p-2 font-medium text-maroon-700">Material</td>
                  <td className="border border-maroon-200 p-2">Stainless Steel 316</td>
                </tr>
                <tr>
                  <td className="border border-maroon-200 p-2 font-medium text-maroon-700">Size Range</td>
                  <td className="border border-maroon-200 p-2">1/4" to 12"</td>
                </tr>
                <tr>
                  <td className="border border-maroon-200 p-2 font-medium text-maroon-700">Pressure Rating</td>
                  <td className="border border-maroon-200 p-2">Class 150 to 2500</td>
                </tr>
                <tr>
                  <td className="border border-maroon-200 p-2 font-medium text-maroon-700">Temperature Range</td>
                  <td className="border border-maroon-200 p-2">-20°F to 800°F</td>
                </tr>
                <tr>
                  <td className="border border-maroon-200 p-2 font-medium text-maroon-700">End Connections</td>
                  <td className="border border-maroon-200 p-2">Flanged, Threaded, Welded</td>
                </tr>
                <tr>
                  <td className="border border-maroon-200 p-2 font-medium text-maroon-700">Seat Material</td>
                  <td className="border border-maroon-200 p-2">PTFE, PEEK, Metal</td>
                </tr>
                <tr>
                  <td className="border border-maroon-200 p-2 font-medium text-maroon-700">Actuation</td>
                  <td className="border border-maroon-200 p-2">Manual, Pneumatic, Electric</td>
                </tr>
                <tr>
                  <td className="border border-maroon-200 p-2 font-medium text-maroon-700">Standards</td>
                  <td className="border border-maroon-200 p-2">ANSI, API, ASME</td>
                </tr>
                <tr>
                  <td className="border border-maroon-200 p-2 font-medium text-maroon-700">Certifications</td>
                  <td className="border border-maroon-200 p-2">ISO 9001, PED, ATEX</td>
                </tr>
              </tbody>
            </table>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-8">
        <Card className="border-0 shadow-md">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-4 text-maroon-800">Request a Quote</h3>
            <p className="text-sm text-gray-600 mb-4">
              Interested in this product? Fill out our quick form to receive a customized quote for your specific needs.
            </p>
            <Button className="w-full mb-4 bg-maroon-600 hover:bg-maroon-700">Request a Quote</Button>
            <div className="flex items-center text-sm text-maroon-600 mb-4">
              <Info className="w-4 h-4 mr-2" />
              Our team will respond within 24 hours
            </div>
            <h4 className="font-semibold mb-2 text-maroon-700">Why choose us:</h4>
            <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
              <li>Custom engineering solutions</li>
              <li>Competitive pricing</li>
              <li>Fast turnaround times</li>
              <li>Extensive industry experience</li>
              <li>Comprehensive technical support</li>
              <li>Global shipping and logistics</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-md">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-4 text-maroon-800">Applications</h3>
            <ul className="space-y-2">
              {[
                "Oil and Gas",
                "Chemical Processing",
                "Water Treatment",
                "Power Generation",
                "Pharmaceutical",
                "Food and Beverage",
              ].map((app, index) => (
                <li key={index} className="flex items-start">
                  <Check className="w-5 h-5 text-maroon-600 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">{app}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

