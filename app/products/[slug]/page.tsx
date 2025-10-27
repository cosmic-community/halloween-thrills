// app/products/[slug]/page.tsx
import { notFound } from 'next/navigation'
import { getProduct, getProductReviews } from '@/lib/cosmic'
import { Product, Review } from '@/types'
import ProductHero from '@/components/ProductHero'
import ProductDetails from '@/components/ProductDetails'
import ProductReviews from '@/components/ProductReviews'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params
  const product = await getProduct(slug) as Product | null

  if (!product) {
    return {
      title: 'Product Not Found - Halloween Thrills',
    }
  }

  return {
    title: `${product.metadata?.product_name || product.title} - Halloween Thrills`,
    description: product.metadata?.description?.replace(/<[^>]*>/g, '').substring(0, 160) || `Shop ${product.title} at Halloween Thrills`,
  }
}

export default async function ProductPage({ params }: PageProps) {
  const { slug } = await params
  const product = await getProduct(slug) as Product | null

  if (!product) {
    notFound()
  }

  const reviews = await getProductReviews(product.id) as Review[]

  return (
    <div className="container py-8">
      <ProductHero product={product} />
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
        <div className="lg:col-span-2">
          <ProductDetails product={product} />
        </div>
        
        <div className="lg:col-span-1">
          <ProductReviews reviews={reviews} productId={product.id} />
        </div>
      </div>
    </div>
  )
}