import { Product } from '@/types'

interface ProductDetailsProps {
  product: Product
}

export default function ProductDetails({ product }: ProductDetailsProps) {
  const description = product.metadata?.description
  const availableSizes = product.metadata?.available_sizes
  const availableColors = product.metadata?.available_colors
  const stockQuantity = product.metadata?.stock_quantity
  const sku = product.metadata?.sku
  const category = product.metadata?.category
  const collections = product.metadata?.collections

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Product Details</h2>
        
        {description && (
          <div 
            className="prose prose-gray max-w-none"
            dangerouslySetInnerHTML={{ __html: description }}
          />
        )}
      </div>

      {/* Product Specifications */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {sku && (
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">SKU</h3>
            <p className="text-gray-600">{sku}</p>
          </div>
        )}

        {stockQuantity !== undefined && (
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Stock</h3>
            <p className="text-gray-600">
              {stockQuantity > 0 ? `${stockQuantity} in stock` : 'Out of stock'}
            </p>
          </div>
        )}

        {category && (
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Category</h3>
            <p className="text-gray-600">{category.metadata?.category_name || category.title}</p>
          </div>
        )}

        {collections && collections.length > 0 && (
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Collections</h3>
            <div className="flex flex-wrap gap-2">
              {collections.map((collection) => (
                <span 
                  key={collection.id}
                  className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800"
                >
                  {collection.metadata?.collection_name || collection.title}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Available Options */}
      {(availableSizes && availableSizes.length > 0) && (
        <div>
          <h3 className="font-semibold text-gray-900 mb-3">Available Sizes</h3>
          <div className="flex flex-wrap gap-2">
            {availableSizes.map((size) => (
              <button
                key={size}
                className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium hover:border-[#ff8d2f] focus:outline-none focus:ring-2 focus:ring-[#ff8d2f]"
              >
                {size}
              </button>
            ))}
          </div>
        </div>
      )}

      {(availableColors && availableColors.length > 0) && (
        <div>
          <h3 className="font-semibold text-gray-900 mb-3">Available Colors</h3>
          <div className="flex flex-wrap gap-2">
            {availableColors.map((color) => (
              <button
                key={color}
                className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium hover:border-[#ff8d2f] focus:outline-none focus:ring-2 focus:ring-[#ff8d2f]"
              >
                {color}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}