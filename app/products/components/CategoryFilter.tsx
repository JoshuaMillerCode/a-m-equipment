import { Button } from "@/components/ui/button"

type CategoryFilterProps = {
  categories: string[]
  selectedCategory: string
  onSelectCategory: (category: string) => void
}

export default function CategoryFilter({ categories, selectedCategory, onSelectCategory }: CategoryFilterProps) {
  return (
    <aside className="w-48 bg-white shadow-md flex flex-col h-screen">
      <div className="p-4 bg-maroon-700 mb-2">
        <h2 className="text-lg font-semibold mb-2 text-black">Categories</h2>
      </div>
      <div className="flex-1 overflow-auto">
        <div className="space-y-1 p-4 pt-0">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "ghost"}
              className={`w-full justify-start text-sm py-1 px-2 h-auto ${
                selectedCategory === category ? "bg-maroon-100 text-maroon-800" : "text-gray-700"
              }`}
              onClick={() => onSelectCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>
      </div>
    </aside>
  )
}

