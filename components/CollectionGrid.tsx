import Link from 'next/link'
import { Collection } from '@/types'

interface CollectionGridProps {
  collections: Collection[]
}

export default function CollectionGrid({ collections }: CollectionGridProps) {
  if (!collections || collections.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground">No collections available.</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {collections.map((collection) => (
        <div key={collection.id} className="card overflow-hidden hover-lift group">
          <div className="relative h-64 overflow-hidden">
            {collection.metadata?.featured_image && (
              <img
                src={`${collection.metadata.featured_image.imgix_url}?w=800&h=500&fit=crop&auto=format,compress`}
                alt={collection.metadata.collection_name || collection.title}
                className="w-full h-full object-cover transition-transform group-hover:scale-105"
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          </div>
          
          <div className="p-6">
            <h3 className="text-xl font-bold text-gradient mb-3">
              {collection.metadata?.collection_name || collection.title}
            </h3>
            
            {collection.metadata?.description && (
              <div 
                className="text-muted-foreground mb-4 line-clamp-3"
                dangerouslySetInnerHTML={{ __html: collection.metadata.description }}
              />
            )}
            
            <Link
              href={`/collections/${collection.slug}`}
              className="btn btn-primary w-full text-center"
            >
              Explore Collection
            </Link>
          </div>
        </div>
      ))}
    </div>
  )
}