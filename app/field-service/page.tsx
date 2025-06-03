import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Wrench, Clock, Shield, Zap, MapPin, Phone, CheckCircle, Settings, AlertTriangle, Calendar } from "lucide-react"
import Image from "next/image"

export default function FieldServicePage() {
  return (
    <div className="min-h-screen bg-white">

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-gray-900 to-gray-700 text-white py-20 lg:py-32">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Reliable Valve Field Service — Wherever You Need It
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed">
              Our expert technicians bring over 30 years of experience to your site to repair, maintain, and upgrade
              automated valve systems—fast.
            </p>
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-md"
            >
              Request Field Service
            </Button>
          </div>
        </div>
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=600&width=1200')] bg-cover bg-center opacity-20"></div>
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
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Settings className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">On-Site Valve Diagnostics</h3>
                <p className="text-gray-600">
                  Comprehensive system analysis and troubleshooting to identify issues quickly and accurately.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <AlertTriangle className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Emergency Repair & Replacement</h3>
                <p className="text-gray-600">
                  24/7 emergency response to get your critical systems back online with minimal downtime.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Scheduled Maintenance Programs</h3>
                <p className="text-gray-600">
                  Proactive maintenance plans to prevent failures and extend equipment life.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-purple-600" />
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
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Safety First</h3>
              <p className="text-gray-600">
                OSHA-certified technicians with comprehensive safety protocols for every job site.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Fast Response</h3>
              <p className="text-gray-600">Emergency response within 4 hours, with most repairs completed same-day.</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Wrench className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Expert Technicians</h3>
              <p className="text-gray-600">
                Factory-trained specialists with 30+ years of valve automation experience.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
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
                Serving industrial facilities across the Gulf Coast region and beyond.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="bg-white p-8 rounded-lg shadow-md">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-6">Primary Service Areas</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-5 h-5 text-blue-600" />
                      <span className="text-gray-700">Texas</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-5 h-5 text-blue-600" />
                      <span className="text-gray-700">Louisiana</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-5 h-5 text-blue-600" />
                      <span className="text-gray-700">Mississippi</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-5 h-5 text-blue-600" />
                      <span className="text-gray-700">Alabama</span>
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

              <div className="bg-gray-200 rounded-lg h-80 flex items-center justify-center">
                <Image
                  src="/placeholder.svg?height=320&width=400"
                  alt="Service area map"
                  width={400}
                  height={320}
                  className="rounded-lg opacity-60"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-16 lg:py-24 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's Get Your System Back Online</h2>
            <p className="text-xl mb-8 text-blue-100">
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
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">Submit Request</Button>
                </form>
              </div>

              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-semibold mb-6">Get In Touch</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Phone className="w-6 h-6 text-blue-200" />
                      <div>
                        <p className="font-semibold">Emergency Hotline</p>
                        <p className="text-blue-100">(555) 123-4567</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="w-6 h-6 text-blue-200" />
                      <div>
                        <p className="font-semibold">Main Office</p>
                        <p className="text-blue-100">(555) 987-6543</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-700 p-6 rounded-lg">
                  <h4 className="font-semibold mb-2">Emergency Service Available</h4>
                  <p className="text-blue-100 text-sm">
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
