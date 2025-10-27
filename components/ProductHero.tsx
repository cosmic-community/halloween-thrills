import { Product } from '@/types'

interface ProductHeroProps {
  product: Product
}

export default function ProductHero({ product }: ProductHeroProps) {
  const productName = product.metadata?.product_name || product.title
  const featuredImage = product.metadata?.featured_image
  const price = product.metadata?.price
  const salePrice = product.metadata?.sale_price
  const scareLevel = product.metadata?.scare_level?.value

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Product Image */}
      <div className="aspect-square bg-muted rounded-lg overflow-hidden">
        {featuredImage ? (
          <img
            src={`${featuredImage.imgix_url}?w=600&h=600&fit=crop&auto=format,compress`}
            alt={productName}
            className="w-full h-full object-cover"
            width={600}
            height={600}
          />
        ) : (
          <div className="flex items-center justify-center h-full text-muted-foreground">
            No image available
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="flex flex-col justify-center space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">
            {productName}
          </h1>
          
          {scareLevel && (
            <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-orange-100 text-orange-800 mb-4">
              🎃 {scareLevel}
            </div>
          )}
        </div>

        <div className="flex items-center space-x-4">
          {salePrice && salePrice > 0 ? (
            <>
              <span className="text-3xl font-bold text-[#ff8d2f]">
                ${salePrice.toFixed(2)}
              </span>
              <span className="text-xl text-muted-foreground line-through">
                ${price?.toFixed(2)}
              </span>
            </>
          ) : (
            <span className="text-3xl font-bold text-foreground">
              ${price?.toFixed(2)}
            </span>
          )}
        </div>

        <div className="space-y-4">
          <button className="w-full bg-[#ff8d2f] text-white px-8 py-3 rounded-lg font-medium hover:bg-orange-600 transition-colors">
            Add to Cart
          </button>
          
          <button className="w-full border border-border text-foreground px-8 py-3 rounded-lg font-medium hover:bg-muted transition-colors">
            Add to Wishlist
          </button>
        </div>
      </div>
    </div>
  )
}