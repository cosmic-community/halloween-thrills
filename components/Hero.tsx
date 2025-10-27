import Link from 'next/link'
import { ArrowRight, Sparkles } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://imgix.cosmicjs.com/0eea9140-b34e-11f0-9a17-9dccadd5a4ca-photo-1514888286974-6c03e2ca1dba-1761580827432.jpg?w=1920&h=1080&fit=crop&auto=format,compress"
          alt="Spooky Halloween background"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-background/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 container text-center">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Sparkles className="h-6 w-6 text-primary animate-pulse" />
            <span className="text-primary font-semibold">Limited Time Halloween Collection</span>
            <Sparkles className="h-6 w-6 text-primary animate-pulse" />
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="text-gradient">Unleash Your</span>
            <br />
            <span className="text-white">Dark Side</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Discover spine-chilling costumes, haunting decorations, and terrifying accessories. 
            Transform your Halloween into an unforgettable nightmare.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              href="/products"
              className="btn btn-primary px-8 py-3 text-lg shadow-glow hover-lift"
            >
              Shop Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            
            <Link 
              href="/categories/costumes"
              className="btn btn-outline px-8 py-3 text-lg hover-lift"
            >
              Browse Costumes
            </Link>
          </div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-primary rounded-full animate-float opacity-60" />
      <div className="absolute top-40 right-20 w-6 h-6 bg-orange-500 rounded-full animate-float opacity-40" style={{ animationDelay: '0.5s' }} />
      <div className="absolute bottom-32 left-20 w-3 h-3 bg-primary rounded-full animate-float opacity-50" style={{ animationDelay: '1s' }} />
    </section>
  )
}