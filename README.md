# Halloween Thrills E-commerce Store

![App Preview](https://imgix.cosmicjs.com/0eea9140-b34e-11f0-9a17-9dccadd5a4ca-photo-1514888286974-6c03e2ca1dba-1761580827432.jpg?w=1200&h=300&fit=crop&auto=format,compress)

A spooky and immersive Halloween e-commerce platform built with Next.js 16 and Cosmic CMS. Features a complete product catalog, customer reviews, and curated collections with a dark, Halloween-themed design.

## Features

- 🎃 **Product Catalog** - Browse Halloween costumes, decorations, and accessories
- ⭐ **Customer Reviews** - Star ratings and verified purchase reviews
- 👻 **Curated Collections** - Themed product collections like "Scary Classics"
- 🏷️ **Category Filtering** - Easy navigation by product categories
- 📱 **Responsive Design** - Optimized for mobile, tablet, and desktop
- 🌙 **Dark Theme** - Atmospheric Halloween-inspired design
- ⚡ **Fast Performance** - Optimized images and modern Next.js architecture

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmicjs.com/projects/new?clone_bucket=68ff95f9539cba1f0d16e271&clone_repository=68ff9806539cba1f0d16e2a9)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Design a content model for a Halloween e-commerce store with products, collections, and customer reviews"

### Code Generation Prompt

> "Based on the content model I created for "Design a content model for a Halloween e-commerce store with products, collections, and customer reviews", now build a complete web application that showcases this content. Include a modern, responsive design with proper navigation, content display, and user-friendly interface."

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies Used

- **Next.js 16** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Cosmic CMS** - Headless CMS for content management
- **Lucide React** - Modern icon library

## Getting Started

### Prerequisites

- Node.js 18+ or Bun
- A Cosmic account and bucket

### Installation

1. Clone this repository
2. Install dependencies:
   ```bash
   bun install
   ```

3. Set up your environment variables in `.env.local`:
   ```env
   COSMIC_BUCKET_SLUG=your-bucket-slug
   COSMIC_READ_KEY=your-read-key
   COSMIC_WRITE_KEY=your-write-key
   ```

4. Run the development server:
   ```bash
   bun dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Cosmic SDK Examples

### Fetch Products with Categories and Collections
```typescript
const { objects: products } = await cosmic.objects
  .find({ type: 'products' })
  .props(['title', 'slug', 'metadata'])
  .depth(1)

// Access related data
const category = product.metadata?.category
const collections = product.metadata?.collections || []
```

### Get Featured Products
```typescript
const { objects: featured } = await cosmic.objects
  .find({ 
    type: 'products',
    'metadata.featured_product': true 
  })
  .depth(1)
```

### Fetch Product Reviews
```typescript
const { objects: reviews } = await cosmic.objects
  .find({
    type: 'reviews',
    'metadata.product': productId
  })
  .depth(1)
```

## Cosmic CMS Integration

This application integrates with four main content types in your Cosmic bucket:

- **Products** - Halloween items with pricing, images, categories, and collections
- **Categories** - Product organization (Costumes, Decorations)
- **Collections** - Curated groups like "Scary Classics" and "Haunted House Essentials"
- **Reviews** - Customer feedback with star ratings and verified purchase status

All content is fetched server-side for optimal performance and SEO.

## Deployment Options

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Add your environment variables in the Vercel dashboard
3. Deploy automatically on every push

### Netlify
1. Connect your repository to Netlify
2. Set build command: `bun build`
3. Set publish directory: `.next`
4. Add environment variables in Netlify dashboard

Make sure to add your Cosmic environment variables in your deployment platform's dashboard.

<!-- README_END -->