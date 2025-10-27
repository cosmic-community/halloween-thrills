import { Review } from '@/types'

interface ProductReviewsProps {
  reviews: Review[]
  productId: string
}

export default function ProductReviews({ reviews, productId }: ProductReviewsProps) {
  // Calculate average rating
  const averageRating = reviews.length > 0 
    ? reviews.reduce((sum, review) => {
        const rating = parseFloat(review.metadata?.rating?.value?.split(' ')[0] || '0')
        return sum + rating
      }, 0) / reviews.length
    : 0

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => {
      const filled = index < rating
      return (
        <svg
          key={index}
          className={`w-5 h-5 ${filled ? 'text-yellow-400' : 'text-muted-foreground'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"
            clipRule="evenodd"
          />
        </svg>
      )
    })
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-4">Customer Reviews</h2>
        
        {reviews.length > 0 ? (
          <div className="flex items-center space-x-2 mb-6">
            <div className="flex space-x-1">
              {renderStars(Math.round(averageRating))}
            </div>
            <span className="text-lg font-semibold text-foreground">
              {averageRating.toFixed(1)}
            </span>
            <span className="text-muted-foreground">
              ({reviews.length} {reviews.length === 1 ? 'review' : 'reviews'})
            </span>
          </div>
        ) : (
          <p className="text-muted-foreground mb-6">No reviews yet. Be the first to review this product!</p>
        )}
      </div>

      {/* Reviews List */}
      <div className="space-y-6">
        {reviews.map((review) => {
          const rating = parseFloat(review.metadata?.rating?.value?.split(' ')[0] || '0')
          const reviewDate = review.metadata?.review_date 
            ? new Date(review.metadata.review_date).toLocaleDateString()
            : null

          return (
            <div key={review.id} className="border-b border-border pb-6 last:border-b-0">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h4 className="font-semibold text-foreground">
                    {review.metadata?.customer_name || 'Anonymous'}
                  </h4>
                  <div className="flex items-center space-x-2 mt-1">
                    <div className="flex space-x-1">
                      {renderStars(rating)}
                    </div>
                    {review.metadata?.verified_purchase && (
                      <span className="text-xs text-green-400 font-medium">
                        Verified Purchase
                      </span>
                    )}
                  </div>
                </div>
                {reviewDate && (
                  <span className="text-sm text-muted-foreground">{reviewDate}</span>
                )}
              </div>
              
              {review.metadata?.review_text && (
                <p className="text-foreground leading-relaxed">
                  {review.metadata.review_text}
                </p>
              )}
            </div>
          )
        })}
      </div>

      {/* Add Review Button */}
      <div className="pt-6 border-t border-border">
        <button className="w-full bg-[#ff8d2f] text-white px-6 py-3 rounded-lg font-medium hover:bg-orange-600 transition-colors">
          Write a Review
        </button>
      </div>
    </div>
  )
}