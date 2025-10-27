'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Category } from '@/types'

interface CategoryFilterProps {
  categories: Category[]
}

export default function CategoryFilter({ categories }: CategoryFilterProps) {
  const pathname = usePathname()

  if (!categories || categories.length === 0) {
    return <p className="text-sm text-muted-foreground">No categories available.</p>
  }

  return (
    <div className="space-y-2">
      <Link
        href="/products"
        className={`block px-3 py-2 rounded-md text-sm transition-colors ${
          pathname === '/products'
            ? 'bg-primary text-white'
            : 'hover:bg-muted text-muted-foreground hover:text-foreground'
        }`}
      >
        All Products
      </Link>
      
      {categories.map((category) => (
        <Link
          key={category.id}
          href={`/categories/${category.slug}`}
          className={`block px-3 py-2 rounded-md text-sm transition-colors ${
            pathname === `/categories/${category.slug}`
              ? 'bg-primary text-white'
              : 'hover:bg-muted text-muted-foreground hover:text-foreground'
          }`}
        >
          {category.metadata?.category_name || category.title}
        </Link>
      ))}
    </div>
  )
}