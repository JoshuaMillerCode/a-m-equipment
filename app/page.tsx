import Image from "next/image"
import LinkButton from "./components/LinkButton"
import ImageCarousel from "./components/ImageCarousel"

export default function Home() {
  const SLIDE_COUNT = 4
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys())
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-red-950 industrial-bg text-white py-10">
        <div className="container mx-auto px-6 md:px-0">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/3 mb-8 md:mb-0 p-2">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Innovative Valve Automation Solutions for Every Industry</h1>
              <p className="text-xl mb-6">
                Delivering quality, reliability, and performance in every valve we manufacture.
              </p>
            </div>
            
            <div className="md:w-2/3 mt-8 md:mt-0">
              <ImageCarousel page="landing" />
            </div>

          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Our Featured Services/Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Field Service",
                description: "Expert on-site maintenance and repair services for all your valve automation needs.",
                image: "/field_service/IMG_4854.jpeg",
                link: "/services/field-service"
              },
              {
                name: "Valve Maintenance Products",
                description: "Comprehensive range of high-quality valves and maintenance solutions.",
                image: "/VMP/valve-mantenance.jpeg",
                link: "https://www.valtex.com/products/all"
              },
              {
                name: "Valve Adaption",
                description: "Custom valve solutions and modifications to meet your specific requirements.",
                image: "/valve-adaption/adaption.jpeg",
                link: "/services/valve-adaption"
              }
            ].map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.name}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
                  <p className="text-gray-600 mb-4">
                    {service.description}
                  </p>
                  <LinkButton
                    href={service.link}
                    bg="bg-red-950"
                    color="text-white"
                    target={service.link.includes("https") ? "_blank" : undefined}
                  >
                    Learn More
                  </LinkButton>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Find Your Perfect Automation Solution?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Our team of experts is here to help you choose the right valve for your needs.
          </p>
          <LinkButton
            href="/contact"
            bg="bg-red-950"
            color="text-white"
            // xClass="py-3 px-8"
            // className="bg-blue-600 text-white py-3 px-8 rounded-full font-semibold hover:bg-blue-700 transition duration-300"
          >
            Contact Us Today
          </LinkButton>
        </div>
      </section>
    </div>
  )
}

