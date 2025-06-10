import { Button } from "@/components/ui/button"

type CategoryFilterProps = {
  categories: string[]
  selectedCategory: string
  onSelectCategory: (category: string) => void
}

export default function CategoryFilter({ categories, selectedCategory, onSelectCategory }: CategoryFilterProps) {
  return (
    <aside className="w-full lg:w-48 bg-white shadow-md">
      <div className="p-4 bg-red-950 mb-2">
        <h2 className="text-lg font-semibold text-white">Categories</h2>
      </div>
      <div className="overflow-x-auto lg:overflow-x-visible">
        <div className="flex lg:flex-col space-x-2 lg:space-x-0 p-4 pt-0 min-w-max lg:min-w-0">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "ghost"}
              className={`whitespace-nowrap lg:w-full justify-start text-sm py-1 px-2 h-auto ${
                selectedCategory === category ? "bg-red-100 text-red-950" : "text-gray-700"
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

