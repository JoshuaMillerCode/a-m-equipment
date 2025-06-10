import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { Phone, Mail, Clock, Wrench, Shield, Star } from "lucide-react"

export default function ValveRepairService() {
  return (
    <div className="min-h-screen bg-white">
      {/* Split Hero Section */}
      <section className="min-h-screen flex">
        {/* Left Side - Text */}
        <div className="w-full lg:w-1/2 bg-red-950 text-white flex items-center">
          <div className="px-8 lg:px-16 py-16">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">Valve Repair Experts</h1>
            <p className="text-xl lg:text-2xl mb-8 opacity-90">
              When your valves fail, we fix them fast. Emergency repairs, complete overhauls, and everything in between.
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <Clock className="w-6 h-6" />
                <span className="text-lg">24/7 Emergency Response</span>
              </div>
              <div className="flex items-center space-x-3">
                <Wrench className="w-6 h-6" />
                <span className="text-lg">30+ Years Experience</span>
              </div>
              <div className="flex items-center space-x-3">
                <Shield className="w-6 h-6" />
                <span className="text-lg">Certified Technicians</span>
              </div>
            </div>
            <Button size="lg" className="bg-white text-red-950 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
              Call for Emergency Repair
            </Button>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="hidden lg:block lg:w-1/2 relative">
          <Image src="/placeholder.svg?height=800&width=600" alt="Valve repair work" fill className="object-cover" />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-red-950 mb-2">500+</div>
              <div className="text-gray-300">Valves Repaired</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-red-950 mb-2">4hrs</div>
              <div className="text-gray-300">Average Response</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-red-950 mb-2">70%</div>
              <div className="text-gray-300">Cost Savings</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-red-950 mb-2">15yrs</div>
              <div className="text-gray-300">Extended Life</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Cards */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">Repair Services</h2>

          <div className="space-y-8 max-w-4xl mx-auto">
            {/* Service 1 */}
            <Card className="overflow-hidden">
              <div className="grid md:grid-cols-2">
                <div className="h-64 md:h-auto relative">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Emergency repairs"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-8 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">Emergency Repairs</h3>
                  <p className="text-gray-700 mb-4">
                    Critical valve failures can't wait. Our emergency repair team responds within 4 hours to get your
                    systems back online. We carry common parts and can perform temporary fixes to minimize downtime.
                  </p>
                  <Button variant="outline" className="self-start border-red-950 text-red-950 hover:bg-red-950 hover:text-white">
                    Call Emergency Line
                  </Button>
                </CardContent>
              </div>
            </Card>

            {/* Service 2 */}
            <Card className="overflow-hidden">
              <div className="grid md:grid-cols-2">
                <CardContent className="p-8 flex flex-col justify-center order-2 md:order-1">
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">Complete Overhauls</h3>
                  <p className="text-gray-700 mb-4">
                    Scheduled maintenance overhauls extend valve life by decades. We completely disassemble, inspect,
                    and rebuild your valves with new seals, gaskets, and worn components replaced to factory
                    specifications.
                  </p>
                  <Button variant="outline" className="self-start border-red-950 text-red-950 hover:bg-red-950 hover:text-white">
                    Schedule Overhaul
                  </Button>
                </CardContent>
                <div className="h-64 md:h-auto relative order-1 md:order-2">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Complete overhauls"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </Card>

            {/* Service 3 */}
            <Card className="overflow-hidden">
              <div className="grid md:grid-cols-2">
                <div className="h-64 md:h-auto relative">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Actuator repair"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-8 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">Actuator Repair</h3>
                  <p className="text-gray-700 mb-4">
                    Pneumatic and electric actuator problems require specialized expertise. Our technicians repair,
                    calibrate, and optimize actuator performance to ensure precise valve control and reliable operation.
                  </p>
                  <Button variant="outline" className="self-start border-red-950 text-red-950 hover:bg-red-950 hover:text-white">
                    Get Quote
                  </Button>
                </CardContent>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-8 h-8 text-red-950 fill-current" />
              ))}
            </div>
            <blockquote className="text-2xl italic text-gray-700 mb-6">
              "A&M Equipment saved us over $200,000 by repairing our critical control valves instead of replacing them.
              The work was completed ahead of schedule with zero issues."
            </blockquote>
            <cite className="text-lg font-semibold text-gray-900">— Mike Johnson, Plant Manager, Gulf Coast Refinery</cite>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-red-950 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Need Valve Repair?</h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto text-gray-200">
            Don't let valve problems shut down your operation. Contact us now for fast, professional repair services.
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <div className="bg-white p-6 rounded-lg text-red-950">
              <h3 className="text-xl font-bold mb-4">Emergency Hotline</h3>
              <div className="flex items-center justify-center space-x-2 mb-4">
                <Phone className="w-6 h-6" />
                <span className="text-2xl font-bold">(555) 911-VALVE</span>
              </div>
              <p className="text-sm text-gray-600">24/7 Emergency Response</p>
            </div>

            <div className="bg-white p-6 rounded-lg text-red-950">
              <h3 className="text-xl font-bold mb-4">Scheduled Service</h3>
              <div className="flex items-center justify-center space-x-2 mb-4">
                <Mail className="w-6 h-6" />
                <span className="text-lg">repair@amequipment.com</span>
              </div>
              <p className="text-sm text-gray-600">Planned Maintenance & Quotes</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
