import Link from 'next/link'
import { Product } from '@/types'
import { Star, ShoppingCart, Zap } from 'lucide-react'

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  if (!product || !product.metadata) {
    return null
  }

  const featuredImage = product.metadata.featured_image
  const price = product.metadata.price
  const salePrice = product.metadata.sale_price
  const scareLevelValue = product.metadata.scare_level?.value
  const isFeatured = product.metadata.featured_product

  const displayPrice = salePrice && salePrice > 0 ? salePrice : price

  return (
    <div className="card overflow-hidden hover-lift group">
      {/* Image */}
      <div className="relative aspect-square overflow-hidden">
        {featuredImage && (
          <img
            src={`${featuredImage.imgix_url}?w=600&h=600&fit=crop&auto=format,compress`}
            alt={product.metadata.product_name || product.title}
            className="w-full h-full object-cover transition-transform group-hover:scale-105"
          />
        )}
        
        {/* Featured badge */}
        {isFeatured && (
          <div className="absolute top-2 left-2">
            <span className="badge badge-primary flex items-center gap-1">
              <Zap className="h-3 w-3" />
              Featured
            </span>
          </div>
        )}
        
        {/* Scare level badge */}
        {scareLevelValue && (
          <div className="absolute top-2 right-2">
            <span className="badge badge-outline text-xs">
              {scareLevelValue}
            </span>
          </div>
        )}
        
        {/* Sale badge */}
        {salePrice && salePrice > 0 && salePrice < price && (
          <div className="absolute bottom-2 left-2">
            <span className="badge bg-red-500 text-white">
              Sale
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="mb-2">
          <Link 
            href={`/products/${product.slug}`}
            className="font-semibold hover:text-primary transition-colors line-clamp-2"
          >
            {product.metadata.product_name || product.title}
          </Link>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2 mb-3">
          <span className="text-lg font-bold text-primary">
            ${displayPrice?.toFixed(2)}
          </span>
          {salePrice && salePrice > 0 && salePrice < price && (
            <span className="text-sm text-muted-foreground line-through">
              ${price?.toFixed(2)}
            </span>
          )}
        </div>

        {/* Category */}
        {product.metadata.category && (
          <div className="mb-3">
            <Link
              href={`/categories/${product.metadata.category.slug}`}
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              {product.metadata.category.metadata?.category_name || product.metadata.category.title}
            </Link>
          </div>
        )}

        {/* Stock status */}
        {product.metadata.stock_quantity !== undefined && (
          <div className="mb-4">
            {product.metadata.stock_quantity > 0 ? (
              <span className="text-sm text-green-400">
                {product.metadata.stock_quantity > 10 ? 'In Stock' : `Only ${product.metadata.stock_quantity} left!`}
              </span>
            ) : (
              <span className="text-sm text-red-400">Out of Stock</span>
            )}
          </div>
        )}

        {/* Actions */}
        <div className="flex gap-2">
          <Link
            href={`/products/${product.slug}`}
            className="btn btn-primary flex-1 text-center"
          >
            View Details
          </Link>
          <button className="btn btn-outline p-2">
            <ShoppingCart className="h-4 w-4" />
            <span className="sr-only">Add to cart</span>
          </button>
        </div>
      </div>
    </div>
  )
}