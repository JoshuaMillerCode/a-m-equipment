import Image from "next/image"

export default function About() {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-8">About ValveTech Industries</h1>
      <div className="flex flex-col md:flex-row items-center mb-12">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <Image
            src="/placeholder.svg"
            alt="ValveTech Facility"
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="md:w-1/2 md:pl-8">
          <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
          <p className="text-gray-600 mb-4">
            Founded in 1985, ValveTech Industries has been at the forefront of valve manufacturing for over three
            decades. Our commitment to quality, innovation, and customer satisfaction has made us a trusted name in the
            industry.
          </p>
          <p className="text-gray-600">
            With state-of-the-art facilities and a team of skilled engineers and technicians, we continue to push the
            boundaries of valve technology, providing solutions for the most demanding applications across various
            sectors.
          </p>
        </div>
      </div>
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
        <p className="text-gray-600">
          At ValveTech Industries, our mission is to deliver superior valve solutions that enhance the efficiency,
          safety, and reliability of our customers' operations. We strive to be a global leader in valve technology
          through continuous innovation, uncompromising quality, and exceptional customer service.
        </p>
      </div>
      <div>
        <h2 className="text-2xl font-semibold mb-4">Why Choose ValveTech?</h2>
        <ul className="list-disc list-inside text-gray-600">
          <li>Over 35 years of industry experience</li>
          <li>Comprehensive range of valve solutions for various industries</li>
          <li>State-of-the-art manufacturing facilities</li>
          <li>Rigorous quality control and testing procedures</li>
          <li>Dedicated customer support and after-sales service</li>
          <li>Commitment to sustainability and environmental responsibility</li>
        </ul>
      </div>
    </div>
  )
}

