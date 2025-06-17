"use client"

import { CheckCircle } from "lucide-react"
import Image from "next/image"

export default function EngineeringServicePage() {
  return (
    <div className="min-h-screen bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Engineering Team</h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              A fully-staffed engineering team with proven expertise in actuator design and system integration.
            </p>
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-3 gap-4 mb-12">
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image
                src="/engineering/autocad.png"
                alt="Engineering team at work"
                fill
                className="object-contain"
              />
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image
                src="/engineering/solidworks.png"
                alt="CAD design process"
                fill
                className="object-contain"
              />
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image
                src="/engineering/Logo_Automation_Studio.png"
                alt="Engineering collaboration"
                fill
                  className="object-contain"
              />
            </div>
          </div>
          
          {/* Full Width Image */}
          <div className="w-full mb-12">
            <div className="relative w-full h-[500px] rounded-lg overflow-hidden">
              <Image
                src="/engineering/computer.jpg"
                alt="Engineering workspace"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Engineering Capabilities */}
            <div className="bg-gray-50 p-8 rounded-lg">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Engineering Capabilities</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Expert Team</h3>
                    <p className="text-gray-700">
                      Four degreed engineers and multiple engineering drafters with proven actuator product-line designs.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Design Excellence</h3>
                    <p className="text-gray-700">
                      Fully-staffed engineering team dedicated to delivering innovative solutions and precise designs.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Software Expertise */}
            <div className="bg-gray-50 p-8 rounded-lg">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Software Expertise</h2>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">CAD Programs</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-blue-600" />
                      <span className="text-gray-700">SolidWorks</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-blue-600" />
                      <span className="text-gray-700">Autodesk Fusion 360</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-blue-600" />
                      <span className="text-gray-700">Autodesk AutoCAD</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Simulation Software</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-blue-600" />
                      <span className="text-gray-700">Automation Studio</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-blue-600" />
                      <span className="text-gray-700">SolidWorks FEA</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
