"use client"
import Link from "next/link"
import { Home, Info, Package, Phone, Menu, Wrench } from "lucide-react"
import Image from "next/image"
import { useState } from "react"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-8 md:px-0 py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center justify-start lg:justify-between w-1/2 md:w-1/2">
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
          <div className="hidden md:flex">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link href="/" legacyBehavior passHref>
                    <NavigationMenuLink className="flex items-center px-3 py-2 text-sm font-medium hover:text-red-950">
                      <Home className="w-5 h-5 mr-1" /> Home
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="flex items-center">
                    <Package className="w-5 h-5 mr-1" /> Products
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4">
                      <li>
                        <Link href="/products/low-pressure-pneumatic" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          Low Pressure Pneumatic
                        </Link>
                      </li>
                      <li>
                        <Link href="/products/high-pressure-gas" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          High Pressure Gas
                        </Link>
                      </li>
                      <li>
                        <Link href="https://newtonvas.com/" target="_blank" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          Electro-Hydraulic
                        </Link>
                      </li>
                      <li>
                        <Link href="https://www.valtex.com/products/all" target="_blank" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          Valve Maintenance Products
                        </Link>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="flex items-center">
                    <Wrench className="w-5 h-5 mr-1" /> Service
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4">
                      <li>
                        <Link href="/services/field-service" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          Field Service
                        </Link>
                      </li>
                      <li>
                        <Link href="/services/engineering" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          Engineering
                        </Link>
                      </li>
                      <li>
                        <Link href="/services/automation-control" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          Automation Control / Retro Fit
                        </Link>
                      </li>
                      <li>
                        <Link href="/services/valve-adaption" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          Valve Adaption
                        </Link>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="flex items-center">
                    <Info className="w-5 h-5 mr-1" /> Company
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4">
                      <li>
                        <Link href="/about" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          About Us
                        </Link>
                      </li>
                      <li>
                        <Link href="/contact" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          Contact Us
                        </Link>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <Menu className="w-6 h-6" />
          </button>
        </div>
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-2">
            <NavLink setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} href="/" icon={<Home className="w-5 h-5 mr-1" />} text="Home" mobile />
            <div className="space-y-2 pl-4">
              <div className="font-medium text-gray-600">Products</div>
              <NavLink setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} href="/products/low-pressure-pneumatic" icon={<Package className="w-5 h-5 mr-1" />} text="Low Pressure Pneumatic" mobile />
              <NavLink setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} href="/products/high-pressure-gas" icon={<Package className="w-5 h-5 mr-1" />} text="High Pressure Gas" mobile />
              <NavLink setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} href="https://newtonvas.com/" target="_blank" icon={<Package className="w-5 h-5 mr-1" />} text="Electro-Hydraulic" mobile />
              <NavLink setIsMenuOpen={setIsMenuOpen} target="_blank" isMenuOpen={isMenuOpen} href="https://www.valtex.com/products/all" icon={<Package className="w-5 h-5 mr-1" />} text="Valve Maintenance Products" mobile />
            </div>
            <div className="space-y-2 pl-4">
              <div className="font-medium text-gray-600">Service</div>
              <NavLink setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} href="/services/field-service" icon={<Wrench className="w-5 h-5 mr-1" />} text="Field Service" mobile />
              <NavLink setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} href="/services/engineering" icon={<Wrench className="w-5 h-5 mr-1" />} text="Engineering" mobile />
              <NavLink setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} href="/services/automation-control" icon={<Wrench className="w-5 h-5 mr-1" />} text="Automation Control / Retro Fit" mobile />
              <NavLink setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} href="/services/valve-adaption" icon={<Wrench className="w-5 h-5 mr-1" />} text="Valve Adaption" mobile />
            </div>
            <div className="space-y-2 pl-4">
              <div className="font-medium text-gray-600">Company</div>
              <NavLink setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} href="/about" icon={<Info className="w-5 h-5 mr-1" />} text="About Us" mobile />
              <NavLink setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} href="/contact" icon={<Phone className="w-5 h-5 mr-1" />} text="Contact Us" mobile />
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
function NavLink({
  target,
  href,
  icon,
  text,
  mobile = false,
  setIsMenuOpen,
  isMenuOpen,
}: { href: string; icon: React.ReactNode; text: string; mobile?: boolean, target?: string, setIsMenuOpen: (isMenuOpen: boolean) => void, isMenuOpen: boolean }) {
  return (
    <Link href={href} onClick={() => setIsMenuOpen(!isMenuOpen)} className={`flex items-center text-gray-600 hover:text-red-950 ${mobile ? "py-2" : ""}`} target={target}>
      {icon}
      <span>{text}</span>
    </Link>
  )
}

