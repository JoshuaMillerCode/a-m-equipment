import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { Phone, Mail, Clock, Wrench, Shield, Star } from "lucide-react"
import Link from "next/link"

export default function ValveAdaptionService() {
  return (
    <div className="min-h-screen bg-white">
      {/* Split Hero Section */}
      <section className="min-h-screen flex">
        {/* Left Side - Text */}
        <div className="w-full lg:w-1/2 bg-red-950 text-white flex items-center">
          <div className="px-8 lg:px-16 py-16">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">Valve Adaptation Specialists</h1>
            <p className="text-xl lg:text-2xl mb-8 opacity-90">
              Custom adaption solutions for any valve or actuator. From field retrofitting to complex system integration, we make it work.
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <Clock className="w-6 h-6" />
                <span className="text-lg">Quick Turnaround Times</span>
              </div>
              <div className="flex items-center space-x-3">
                <Wrench className="w-6 h-6" />
                <span className="text-lg">Custom Engineering Solutions</span>
              </div>
              <div className="flex items-center space-x-3">
                <Shield className="w-6 h-6" />
                <span className="text-lg">Certified Modifications</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-6 h-6" />
                <span className="text-lg">(713)-893-9371</span>
              </div>
            </div>
            <Link href="/contact">
              <Button size="lg" className="bg-white text-red-950 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
                Request Adaptation Quote
              </Button>
            </Link>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="hidden lg:block lg:w-1/2 relative">
          <Image src="/valve-adaption/adaption.jpeg" alt="Valve adaptation work" fill className="object-contain" />
        </div>
      </section>

      {/* Full Width Image Section */}
      <section className="w-full">
        <div className="relative w-full h-[600px]">
          <Image
            src="/valve-adaption/adapt-blueprint.png"
            alt="Valve adaptation showcase"
            fill
            className="object-cover"
            priority
          />
        </div>
      </section>
    </div>
  )
}
