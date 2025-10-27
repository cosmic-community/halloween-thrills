import Link from 'next/link'
import { ShoppingBag, Ghost, Menu, X } from 'lucide-react'
import Navigation from '@/components/Navigation'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-sm">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Ghost className="h-8 w-8 text-primary animate-float" />
            <span className="text-xl font-bold text-gradient">
              Halloween Thrills
            </span>
          </Link>
        </div>

        <Navigation />

        <div className="flex items-center space-x-4">
          <button className="btn btn-outline p-2">
            <ShoppingBag className="h-5 w-5" />
            <span className="sr-only">Shopping cart</span>
          </button>
        </div>
      </div>
    </header>
  )
}