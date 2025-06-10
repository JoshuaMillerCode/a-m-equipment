"use client"

import { useState, useMemo } from "react"
import { categories, products, products1 } from "../data/products"
import CategoryFilter from "./components/CategoryFilter"
import SearchBar from "./components/SearchBar"
import ProductGrid from "./components/ProductGrid"
import Pagination from "./components/Pagination"
import { Product, Product1 } from "../data/products"

const ITEMS_PER_PAGE = 30

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")
  const [currentPage, setCurrentPage] = useState(1)

  const filteredProducts = useMemo(() => {
    return products1.filter((product) => {
      const categoryMatch = selectedCategory === "All" || product.category === selectedCategory
      const searchMatch =
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase())
      return categoryMatch && searchMatch
    })
  }, [selectedCategory, searchQuery])

  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE)
  const paginatedProducts = filteredProducts.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE)

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-8">Valve Maintenance Products</h1>
      <p className="text-xl text-gray-600 mb-12">
        Discover our comprehensive range of high-quality valves designed to meet the diverse needs of various
        industries.
      </p>
      <div className="flex flex-col lg:flex-row bg-gray-100 rounded-lg overflow-hidden">
        <CategoryFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={(category) => {
            setSelectedCategory(category)
            setCurrentPage(1)
          }}
        />
        <main className="flex-1 flex flex-col overflow-hidden">
          <div className="p-4 md:p-6 space-y-4 bg-white shadow-md">
            <SearchBar
              onSearch={(query) => {
                setSearchQuery(query)
                setCurrentPage(1)
              }}
            />
          </div>
          <div className="flex-1 overflow-auto px-4 md:px-6 py-6">
            <ProductGrid products={paginatedProducts} />
          </div>
          <div className="p-4 md:p-6 bg-white shadow-md">
            <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
          </div>
        </main>
      </div>
      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <Image
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              width={400}
              height={300}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-2">{product.name}</h2>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <button className="bg-red-950 text-white py-2 px-4 rounded hover:bg-white hover:text-black hover:drop-shadow-xl  transition duration-300">
                Request Quote
              </button>
            </div>
          </div>
        ))}
      </div> */}
    </div>
  )
}

