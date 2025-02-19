import Image from "next/image"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <Image 
              src="/AM+logo_white.png"
              alt="A&M Logo"
              width={100}
              height={100}
            />
            <h3 className="text-lg font-semibold mb-2">A&M Equipment</h3>
            <p className="text-sm">Leading manufacturer of high-quality valves for various industries.</p>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
            <ul className="text-sm">
              <li>
                <Link href="/" className="hover:text-blue-400">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-blue-400">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-blue-400">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-blue-400">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-2">Contact Us</h4>
            <p className="text-sm">
              123 Valve Street
              <br />
              Industrial City, IN 12345
              <br />
              USA
            </p>
            <p className="text-sm mt-2">
              Phone: (555) 123-4567
              <br />
              Email: info@valvetech.com
            </p>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-6 text-sm text-center">
          <p>&copy; 2023 ValveTech Industries. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

