import { getFeaturedProducts, getCollections, getCategories } from '@/lib/cosmic'
import { Product, Collection, Category } from '@/types'
import Hero from '@/components/Hero'
import FeaturedProducts from '@/components/FeaturedProducts'
import CollectionGrid from '@/components/CollectionGrid'
import CategoryGrid from '@/components/CategoryGrid'

export default async function HomePage() {
  const [featuredProducts, collections, categories] = await Promise.all([
    getFeaturedProducts(),
    getCollections(),
    getCategories()
  ])

  return (
    <div className="space-y-16">
      <Hero />
      
      <section className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gradient mb-4">
            Featured Products
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover our most popular and spine-chilling Halloween items, handpicked for maximum scare factor.
          </p>
        </div>
        <FeaturedProducts products={featuredProducts as Product[]} />
      </section>

      <section className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gradient mb-4">
            Shop by Collection
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our carefully curated collections designed to create the perfect Halloween experience.
          </p>
        </div>
        <CollectionGrid collections={collections as Collection[]} />
      </section>

      <section className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gradient mb-4">
            Browse Categories
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Find exactly what you're looking for in our organized product categories.
          </p>
        </div>
        <CategoryGrid categories={categories as Category[]} />
      </section>
    </div>
  )
}