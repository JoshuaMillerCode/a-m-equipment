"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Phone, Mail, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function AutomationControlServicePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0 flex">
          <div className="w-1/2 relative">
            <Image
              src="/control-retro/controls1.jpeg"
              alt="Automation control panel"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          </div>
          <div className="w-1/2 relative">
            <Image
              src="/control-retro/controls2.png"
              alt="Control system integration"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          </div>
        </div>
        <div className="relative h-full flex items-center justify-center text-center text-white">
          <div className="max-w-4xl px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">Automation Control Systems</h1>
            <p className="text-2xl md:text-3xl mb-8 font-light">Modernize. Automate. Control.</p>
            <div className="max-w-3xl mx-auto">
              <p className="text-xl mb-8">
                A&M Equipment specializes in retrofitting legacy systems with modern automation controls, providing seamless integration of new technologies with existing infrastructure while maximizing efficiency and reliability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">Modern Automation Solutions</h2>
          
            <div className="grid md:grid-cols-2 gap-6 mt-12">
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Integrated Custom Control Panels</h3>
                  <p className="text-gray-700">
                    Tailored control solutions designed to meet your specific operational requirements.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">System Modification</h3>
                  <p className="text-gray-700">
                    Add mechanical or electrical ESD and override capabilities to existing systems.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Universal Control Design</h3>
                  <p className="text-gray-700">
                    Selection and design for low-pressure, high-pressure gas, or hydraulic controls across any brand and manufacturer.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Flexible Implementation</h3>
                  <p className="text-gray-700">
                    Field retrofit and in-house testing options available for your convenience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do - Simple Grid
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">Our Automation Services</h2>
          <p className="text-xl text-gray-700 mb-12 text-center max-w-3xl mx-auto">
            From basic automation to advanced control systems, we provide comprehensive solutions to modernize your operations.
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="relative group overflow-hidden rounded-lg h-80">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="Control system retrofitting"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-xl font-bold mb-2">System Retrofitting</h3>
                <p className="text-sm opacity-90">
                  Upgrade legacy control systems with modern automation technology while preserving existing infrastructure.
                </p>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-lg h-80">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="PLC and HMI integration"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-xl font-bold mb-2">PLC & HMI Solutions</h3>
                <p className="text-sm opacity-90">
                  Implement programmable logic controllers and human-machine interfaces for precise process control.
                </p>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-lg h-80">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="Remote monitoring"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-xl font-bold mb-2">Remote Monitoring</h3>
                <p className="text-sm opacity-90">
                  Enable real-time monitoring and control of your systems from anywhere with secure remote access.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="relative py-24">
        <Image src="/control-retro/controls3.jpeg" alt="Contact background" fill className="object-cover" />
        <div className="absolute inset-0 bg-blue-900 bg-opacity-80"></div>
        <div className="relative container mx-auto px-4 text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Ready to Modernize Your Control Systems?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Contact our automation specialists to discuss how we can transform your operations with modern control technology.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-12 mb-8">
            <div className="flex items-center space-x-3">
              <Phone className="w-6 h-6" />
              <span className="text-xl">(713)-893-9371</span>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="w-6 h-6" />
              <span className="text-xl">sales@a-mequipment.com</span>
            </div>
          </div>

          <Link href="/contact">
            <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
              Schedule Consultation
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
