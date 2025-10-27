import Link from 'next/link'
import { Category } from '@/types'

interface CategoryGridProps {
  categories: Category[]
}

export default function CategoryGrid({ categories }: CategoryGridProps) {
  if (!categories || categories.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground">No categories available.</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {categories.map((category) => (
        <Link
          key={category.id}
          href={`/categories/${category.slug}`}
          className="card overflow-hidden hover-lift group cursor-pointer"
        >
          <div className="relative h-48 overflow-hidden">
            {category.metadata?.category_image && (
              <img
                src={`${category.metadata.category_image.imgix_url}?w=800&h=400&fit=crop&auto=format,compress`}
                alt={category.metadata.category_name || category.title}
                className="w-full h-full object-cover transition-transform group-hover:scale-105"
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <h3 className="text-xl font-bold text-white mb-2">
                {category.metadata?.category_name || category.title}
              </h3>
              {category.metadata?.description && (
                <p className="text-sm text-gray-200 line-clamp-2">
                  {category.metadata.description}
                </p>
              )}
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}