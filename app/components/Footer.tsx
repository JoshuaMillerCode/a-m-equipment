import Image from "next/image"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white industrial-bg">
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
            <p className="text-sm">Leading supplier of valve automation solutions.</p>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-2">Products</h4>
            <ul className="text-sm space-y-2">
              <li>
                <Link href="/products/low-pressure-pneumatic" className="hover:text-blue-400">
                  Low Pressure Pneumatic
                </Link>
              </li>
              <li>
                <Link href="/products/high-pressure-gas" className="hover:text-blue-400">
                  High Pressure Gas
                </Link>
              </li>
              <li>
                <Link href="https://newtonvas.com/" target="_blank" className="hover:text-blue-400">
                  Electro-Hydraulic
                </Link>
              </li>
              <li>
                <Link href="https://www.valtex.com/products/all" target="_blank" className="hover:text-blue-400">
                  Valve Maintenance Products
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-2">Services</h4>
            <ul className="text-sm space-y-2">
              <li>
                <Link href="/services/field-service" className="hover:text-blue-400">
                  Field Service
                </Link>
              </li>
              <li>
                <Link href="/services/engineering" className="hover:text-blue-400">
                  Engineering
                </Link>
              </li>
              <li>
                <Link href="/services/automation-control" className="hover:text-blue-400">
                  Automation Control / Retro Fit
                </Link>
              </li>
              <li>
                <Link href="/services/valve-adaption" className="hover:text-blue-400">
                  Valve Adaption
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-2">Contact Us</h4>
            <p className="text-sm">
              28246 FM 2920 Rd.
              <br />
              Waller, TX 77484
              <br />
              USA
            </p>
            <p className="text-sm mt-2">
              Phone: 713-893-9371
            </p>
            <div className="mt-4">
              <h4 className="text-lg font-semibold mb-2">Company</h4>
              <ul className="text-sm space-y-2">
                <li>
                  <Link href="/" className="hover:text-blue-400">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-blue-400">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-blue-400">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-6 text-sm text-center">
          <p>&copy; 2025 A&M Equipment. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

