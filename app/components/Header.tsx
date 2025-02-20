"use client"
import Link from "next/link"
import { Home, Info, Package, Phone, Menu } from "lucide-react"
import Image from "next/image"
import { useState } from "react"


export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-8 md:px-0 py-3">
        <div className="flex justify-between items-center">
            <div className="flex items-center justify-start lg:justify-between w-1/2 md:w-1/2">
              {/* maybe keep? */}
              {/* <Link href="/" className="text-xl  font-bold text-gray-800">
                A&M Equipment 
              </Link> */}
              <Link href="/" >
                <Image src="/maroon-logo.png" width={125} height={125} alt="A&M Logo" />
              </Link>
              <span className="hidden lg:flex">|</span>
              <Link href="https://newtonvas.com/" target="_blank" className="hidden lg:flex">
                <Image src="/newton_icon.webp" width={50} height={50} alt="A&M Logo" />
              </Link>
              <span className="hidden lg:flex">|</span>
              <Link href="https://www.rotork.com/en" target="_blank" className="hidden lg:flex">
                <Image src="/rotork-logo.svg" width={100} height={100} alt="A&M Logo" />
              </Link>
              <span className="hidden lg:flex">|</span>
              <Link href="https://www.valtex.com/" target="_blank" className="hidden lg:flex">
                <Image src="/valtex-logo.png" width={150} height={150} alt="A&M Logo" />
              </Link>
            </div>
            {/* FIX THIS SHIT, NEED TO BE MOBILE RESPONSIVE */}
            {/* <div className="flex space-x-4">
              <Link href="/" className="flex items-center text-gray-600 hover:text-red-950">
                <Home className="w-5 h-5 mr-1" />
                <span>Home</span>
              </Link>
              <Link href="/about" className="flex items-center text-gray-600 hover:text-red-950">
                <Info className="w-5 h-5 mr-1" />
                <span>About</span>
              </Link>
              <Link href="/products" className="flex items-center text-gray-600 hover:text-red-950">
                <Package className="w-5 h-5 mr-1" />
                <span>Products</span>
              </Link>
              <Link href="/contact" className="flex items-center text-gray-600 hover:text-red-950">
                <Phone className="w-5 h-5 mr-1" />
                <span>Contact</span>
              </Link>
            </div> */}
            <div className="hidden md:flex space-x-4">
              <NavLink href="/" icon={<Home className="w-5 h-5 mr-1" />} text="Home" />
              <NavLink href="/products" icon={<Package className="w-5 h-5 mr-1" />} text="Products" />
              <NavLink href="/about" icon={<Info className="w-5 h-5 mr-1" />} text="About" />
              <NavLink href="/contact" icon={<Phone className="w-5 h-5 mr-1" />} text="Contact" />
            </div>
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <Menu className="w-6 h-6" />
            </button>
          </div>
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-2">
            <NavLink href="/" icon={<Home className="w-5 h-5 mr-1" />} text="Home" mobile />
            <NavLink href="/products" icon={<Package className="w-5 h-5 mr-1" />} text="Products" mobile />
            <NavLink href="/about" icon={<Info className="w-5 h-5 mr-1" />} text="About" mobile />
            <NavLink href="/contact" icon={<Phone className="w-5 h-5 mr-1" />} text="Contact" mobile />
          </div>
        )}
      </nav>
    </header>
  )
}

function NavLink({
  href,
  icon,
  text,
  mobile = false,
}: { href: string; icon: React.ReactNode; text: string; mobile?: boolean }) {
  return (
    <Link href={href} className={`flex items-center text-gray-600 hover:text-red-950 ${mobile ? "py-2" : ""}`}>
      {icon}
      <span>{text}</span>
    </Link>
  )
}
