"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Phone, Mail, CheckCircle } from "lucide-react"

export default function EngineeringServicePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <Image
            src="/placeholder.svg?height=800&width=1200"
            alt="Valve adaptation work"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        <div className="relative h-full flex items-center justify-center text-center text-white">
          <div className="max-w-4xl px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">Engineering</h1>
            <p className="text-2xl md:text-3xl mb-8 font-light">Transform. Upgrade. Optimize.</p>
            <div className="max-w-3xl mx-auto">
              <p className="text-xl mb-8">
                A&M Equipment specializes in modifying existing valve systems to meet new requirements, improve
                performance, and integrate with modern control systems—saving you time and money compared to full
                replacement.
              </p>
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-md"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">What is Valve Adaptation?</h2> 
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Valve adaptation is the process of modifying existing valve systems to meet new operational requirements,
              improve performance, or integrate with updated control systems. Rather than replacing entire valve
              assemblies, our expert technicians can adapt your current equipment to save time and money.
            </p>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              With over 30 years of experience, A&M Equipment specializes in custom valve modifications that extend
              equipment life and enhance system performance across various industrial applications.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mt-12">
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Cost-Effective Solution</h3>
                  <p className="text-gray-700">
                    Save 40-60% compared to complete valve replacement while achieving similar performance improvements.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Minimal Downtime</h3>
                  <p className="text-gray-700">
                    Our adaptation process typically requires just 1-3 days, minimizing disruption to your operations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do - Simple Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">Our Adaptation Services</h2>
          <p className="text-xl text-gray-700 mb-12 text-center max-w-3xl mx-auto">
            From actuator upgrades to control system integration, we provide comprehensive valve adaptation solutions
            tailored to your specific needs.
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="relative group overflow-hidden rounded-lg h-80">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="Actuator upgrades"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-xl font-bold mb-2">Actuator Upgrades</h3>
                <p className="text-sm opacity-90">
                  Replace manual valves with automated actuators or upgrade existing actuators for improved performance
                  and control.
                </p>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-lg h-80">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="Control integration"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-xl font-bold mb-2">Smart Integration</h3>
                <p className="text-sm opacity-90">
                  Integrate existing valves with modern control systems, SCADA networks, and digital monitoring
                  platforms.
                </p>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-lg h-80">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="Performance enhancement"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-xl font-bold mb-2">Performance Enhancement</h3>
                <p className="text-sm opacity-90">
                  Modify valve characteristics to improve flow control, reduce wear, and extend service life.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24">
        <Image src="/placeholder.svg?height=400&width=1200" alt="Contact background" fill className="object-cover" />
        <div className="absolute inset-0 bg-blue-900 bg-opacity-80"></div>
        <div className="relative container mx-auto px-4 text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Valve Systems?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Contact our valve adaptation specialists to discuss your specific requirements and discover how we can help
            you improve performance while saving time and money.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-12 mb-8">
            <div className="flex items-center space-x-3">
              <Phone className="w-6 h-6" />
              <span className="text-xl">(555) 123-4567</span>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="w-6 h-6" />
              <span className="text-xl">info@amequipment.com</span>
            </div>
          </div>

          <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
            Get Free Consultation
          </Button>
        </div>
      </section>
    </div>
  )
}
