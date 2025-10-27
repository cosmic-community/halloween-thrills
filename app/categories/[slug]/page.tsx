// app/categories/[slug]/page.tsx
import { notFound } from 'next/navigation'
import { getCategory, getProducts } from '@/lib/cosmic'
import { Category, Product } from '@/types'
import ProductGrid from '@/components/ProductGrid'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params
  const category = await getCategory(slug) as Category | null

  if (!category) {
    return {
      title: 'Category Not Found - Halloween Thrills',
    }
  }

  return {
    title: `${category.metadata?.category_name || category.title} - Halloween Thrills`,
    description: category.metadata?.description || `Shop ${category.title} products at Halloween Thrills`,
  }
}

export default async function CategoryPage({ params }: PageProps) {
  const { slug } = await params
  const [category, allProducts] = await Promise.all([
    getCategory(slug),
    getProducts()
  ])

  if (!category) {
    notFound()
  }

  // Filter products by category
  const categoryProducts = (allProducts as Product[]).filter(product => 
    product.metadata?.category?.id === category.id
  )

  return (
    <div className="container py-8">
      <div className="text-center mb-12">
        {category.metadata?.category_image && (
          <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden">
            <img
              src={`${category.metadata.category_image.imgix_url}?w=256&h=256&fit=crop&auto=format,compress`}
              alt={category.title}
              className="w-full h-full object-cover"
            />
          </div>
        )}
        <h1 className="text-4xl font-bold text-gradient mb-4">
          {category.metadata?.category_name || category.title}
        </h1>
        {category.metadata?.description && (
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {category.metadata.description}
          </p>
        )}
        <p className="text-sm text-muted-foreground mt-4">
          {categoryProducts.length} {categoryProducts.length === 1 ? 'product' : 'products'} found
        </p>
      </div>

      <ProductGrid products={categoryProducts} />
    </div>
  )
}