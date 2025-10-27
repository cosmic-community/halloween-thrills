import Link from 'next/link'
import { Ghost, Heart } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background/50">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <Ghost className="h-6 w-6 text-primary" />
              <span className="text-lg font-bold text-gradient">
                Halloween Thrills
              </span>
            </Link>
            <p className="text-muted-foreground mb-4 max-w-md">
              Your one-stop shop for all things spooky and scary. From bone-chilling costumes to haunting decorations, we've got everything you need for the perfect Halloween.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Shop</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/products" className="hover:text-primary transition-colors">
                  All Products
                </Link>
              </li>
              <li>
                <Link href="/categories/costumes" className="hover:text-primary transition-colors">
                  Costumes
                </Link>
              </li>
              <li>
                <Link href="/categories/decorations" className="hover:text-primary transition-colors">
                  Decorations
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Size Guide
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Returns
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © 2024 Halloween Thrills. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground flex items-center gap-1 mt-4 md:mt-0">
            Made with <Heart className="h-4 w-4 text-primary" /> for Halloween lovers
          </p>
        </div>
      </div>
    </footer>
  )
}