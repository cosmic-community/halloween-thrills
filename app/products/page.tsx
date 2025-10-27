import { getProducts, getCategories } from '@/lib/cosmic'
import { Product, Category } from '@/types'
import ProductGrid from '@/components/ProductGrid'
import CategoryFilter from '@/components/CategoryFilter'

export const metadata = {
  title: 'All Products - Halloween Thrills',
  description: 'Browse our complete collection of Halloween products including costumes, decorations, and accessories.',
}

export default async function ProductsPage() {
  const [products, categories] = await Promise.all([
    getProducts(),
    getCategories()
  ])

  return (
    <div className="container py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        <aside className="lg:w-64">
          <div className="card p-6">
            <h2 className="text-lg font-semibold mb-4">Filter by Category</h2>
            <CategoryFilter categories={categories as Category[]} />
          </div>
        </aside>
        
        <div className="flex-1">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gradient mb-4">
              All Products
            </h1>
            <p className="text-muted-foreground">
              Discover our complete collection of Halloween items. From spine-chilling costumes to haunting decorations.
            </p>
          </div>
          
          <ProductGrid products={products as Product[]} />
        </div>
      </div>
    </div>
  )
}