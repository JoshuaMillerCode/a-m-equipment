import Image from "next/image"
import ImageCarousel from "../components/ImageCarousel"

export default function About() {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-8">About A&M Equipment</h1>
      <div className="flex flex-col md:flex-row items-center mb-12">
        <ImageCarousel page="about" />
        <div className="md:w-1/2 md:pl-8">
          <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
          <p className="text-gray-600 mb-4">
            A&M Equipment was founded as a representative company in 2006 by Tim Malloy; a lineage-based entrepreneur. His son Chris, through the industry, developed a relationship with Ben, identified complementary skillsets, and would later utilize those skillsets to build the foundation for what the company has evolved into. The first version of A&M Equipment's current vision took root in 2021.
          </p>
          <p className="text-gray-600 mb-4">
            Today, A&M Equipment is a one-stop shop for expertise surrounding valves and actuators. We specialize in macro-engineered actuation, modification, and valve solutions, along with the electro-hydraulics to power them, and comprehensive field service and maintenance to ensure optimal performance.
          </p>
          <p className="text-gray-600">
            Located on four acres of property just north of Houston, TX, our facility enables us to handle an array of engineering, machining, and technical-based problem sets across the spectrum of pipeline integration.
          </p>
        </div>
      </div>
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
        <p className="text-gray-600">
          At A&M Equipment, our mission is to be the premier provider of comprehensive valve and actuation solutions. We take pride in our workplace culture that emphasizes communication, authenticity, resourcefulness, and grit. These core values drive us to deliver exceptional service and innovative solutions to our clients.
        </p>
      </div>
      <div>
        <h2 className="text-2xl font-semibold mb-4">Why Choose A&M Equipment?</h2>
        <div className="flex flex-col md:flex-row gap-8">
          <ul className="list-disc list-inside text-gray-600 md:w-1/2">
            <li>One-stop shop for all valve and actuator needs</li>
            <li>Comprehensive engineering and machining capabilities</li>
            <li>Expert field service and maintenance support</li>
            <li>State-of-the-art facility in Houston, TX</li>
            <li>Strong workplace culture built on communication and authenticity</li>
            <li>Dedicated team of skilled professionals</li>
          </ul>
          <div className="md:w-1/2 relative h-[400px] rounded-lg overflow-hidden">
            <Image
              src="/about/drone-shop.png"
              alt="A&M Equipment Facility"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

