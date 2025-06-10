import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Wrench, Clock, Shield, Zap, MapPin, Phone, CheckCircle, Settings, AlertTriangle, Calendar } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
export default function FieldServicePage() {
  return (
    <div className="min-h-screen bg-white">

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        {/* Four Quadrant Background Images */}
        <div className="absolute inset-0 grid grid-cols-2 grid-rows-2">
          {/* Top Left */}
          <div className="relative">
            <Image
              src="/field_service/IMG_8544.jpeg"
              alt="Field service technician at work"
              fill
              className="object-cover"
            />
          </div>
          {/* Top Right */}
          <div className="relative">
            <Image
              src="/field_service/IMG_5196.jpeg"
              alt="Valve repair equipment"
              fill
              className="object-cover"
            />
          </div>
          {/* Bottom Left */}
          <div className="relative">
            <Image
              src="/field_service/IMG_4951.jpeg"
              alt="Industrial valve systems"
              fill
              className="object-cover"
            />
          </div>
          {/* Bottom Right */}
          <div className="relative">
            <Image
              src="/field_service/IMG_4854.jpeg"
              alt="On-site diagnostics"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black opacity-60"></div>

        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Reliable Valve Field Service — Wherever You Need It
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed">
              Our expert technicians bring over 30 years of experience to your site to repair, maintain, and upgrade
              automated valve systems—fast.
            </p>
            <Link href="#request-service-form">
              <Button
                size="lg"
                className="bg-red-950 hover:bg-red-900 text-white px-8 py-4 text-lg font-semibold rounded-md"
              >
                Request Field Service
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Comprehensive Field Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From emergency repairs to scheduled maintenance, our certified technicians deliver reliable solutions
              on-site.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Settings className="w-8 h-8 text-red-950" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">On-Site Diagnostics</h3>
                <p className="text-gray-600">
                  Comprehensive system analysis and troubleshooting to identify issues quickly and accurately.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <AlertTriangle className="w-8 h-8 text-red-950" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Emergency Repair & Replacement</h3>
                <p className="text-gray-600">
                  24/7 emergency response to get your critical systems back online with minimal downtime.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-8 h-8 text-red-950" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Scheduled Maintenance Programs</h3>
                <p className="text-gray-600">
                  Proactive maintenance plans to prevent failures and extend equipment life.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-red-950" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Field Automation & Calibration</h3>
                <p className="text-gray-600">
                  Precision calibration and automation upgrades to optimize system performance.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose A&M Equipment Field Service
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Three decades of expertise, safety-first approach, and commitment to minimizing your downtime.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-red-950 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Safety First</h3>
              <p className="text-gray-600">
                OSHA-certified technicians with comprehensive safety protocols for every job site.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-red-950 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Fast Response</h3>
              <p className="text-gray-600">Emergency response within 24 hours, with most repairs completed same-day.</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-red-950 rounded-full flex items-center justify-center mx-auto mb-6">
                <Wrench className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Expert Technicians</h3>
              <p className="text-gray-600">
                Factory-trained specialists with 30+ years of valve automation experience.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-red-950 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Minimal Downtime</h3>
              <p className="text-gray-600">
                Efficient repairs and maintenance to keep your operations running smoothly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Service Coverage Area</h2>
              <p className="text-xl text-gray-600">
                Based in Houston, TX, our team serves industrial facilities across the Gulf Coast and can mobilize anywhere in the continental United States for your valve maintenance and actuator service needs.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="bg-white p-8 rounded-lg shadow-md">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-6">Primary Service Areas</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-5 h-5 text-red-950" />
                      <span className="text-gray-700">Texas</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-5 h-5 text-red-950" />
                      <span className="text-gray-700">Louisiana</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-5 h-5 text-red-950" />
                      <span className="text-gray-700">Mississippi</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-5 h-5 text-red-950" />
                      <span className="text-gray-700">New Mexico</span>
                    </div>
                  </div>
                  <div className="mt-8 p-4 bg-red-50 rounded-lg border border-red-200">
                    <div className="flex items-center space-x-2 mb-2">
                      <Phone className="w-5 h-5 text-red-600" />
                      <span className="font-semibold text-red-800">24/7 Emergency Service</span>
                    </div>
                    <p className="text-red-700 text-sm">
                      Emergency response available around the clock for critical system failures.
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative w-full h-full">
                <Image
                  src="/MapChart_Map.png"
                  alt="Service area map"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-16 lg:py-24 bg-red-950 text-white" id="request-service-form">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's Get Your System Back Online</h2>
            <p className="text-xl mb-8 text-gray-200">
              Contact our field service team today for fast, reliable valve automation solutions.
            </p>

            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div className="bg-white text-gray-900 p-8 rounded-lg">
                <h3 className="text-2xl font-semibold mb-6">Request Service</h3>
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <Input placeholder="First Name" className="bg-gray-50" />
                    <Input placeholder="Last Name" className="bg-gray-50" />
                  </div>
                  <Input placeholder="Company" className="bg-gray-50" />
                  <Input placeholder="Email" type="email" className="bg-gray-50" />
                  <Input placeholder="Phone" type="tel" className="bg-gray-50" />
                  <Textarea placeholder="Describe your service needs..." className="bg-gray-50 h-24" />
                  <Button className="w-full bg-red-950 hover:bg-red-900">Submit Request</Button>
                </form>
              </div>

              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-semibold mb-6">Get In Touch</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Phone className="w-6 h-6 text-gray-300" />
                      <div>
                        <p className="font-semibold">Emergency Hotline</p>
                        <p className="text-gray-200">(555) 123-4567</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="w-6 h-6 text-gray-300" />
                      <div>
                        <p className="font-semibold">Main Office</p>
                        <p className="text-gray-200">(555) 987-6543</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-red-900 p-6 rounded-lg">
                  <h4 className="font-semibold mb-2">Emergency Service Available</h4>
                  <p className="text-gray-200 text-sm">
                    Critical system failure? Our emergency response team is standing by 24/7 to get your operations back
                    online quickly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
