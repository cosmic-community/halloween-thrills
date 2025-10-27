// Base Cosmic object interface
interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, any>;
  type: string;
  created_at: string;
  modified_at: string;
}

// Product interface with comprehensive metadata
export interface Product extends CosmicObject {
  type: 'products';
  metadata: {
    product_name?: string;
    description?: string;
    price: number;
    sale_price?: number | null;
    sku?: string;
    stock_quantity?: number;
    featured_image?: {
      url: string;
      imgix_url: string;
    };
    product_images?: Array<{
      url: string;
      imgix_url: string;
    }>;
    category?: Category;
    collections?: Collection[];
    available_sizes?: string[];
    available_colors?: string[];
    scare_level?: {
      key: string;
      value: ScareLevel;
    };
    featured_product?: boolean;
    product_tags?: string;
  };
}

// Category interface
export interface Category extends CosmicObject {
  type: 'categories';
  metadata: {
    category_name?: string;
    description?: string;
    category_image?: {
      url: string;
      imgix_url: string;
    };
  };
}

// Collection interface
export interface Collection extends CosmicObject {
  type: 'collections';
  metadata: {
    collection_name?: string;
    description?: string;
    featured_image?: {
      url: string;
      imgix_url: string;
    };
    display_order?: number;
  };
}

// Review interface
export interface Review extends CosmicObject {
  type: 'reviews';
  metadata: {
    customer_name?: string;
    rating?: {
      key: string;
      value: string;
    };
    review_text?: string;
    product?: Product;
    verified_purchase?: boolean;
    review_date?: string;
  };
}

// Type literals for select-dropdown values
export type ScareLevel = 'Friendly Fun' | 'Mildly Spooky' | 'Scary' | 'Very Scary' | 'Terrifying';
export type RatingValue = '1 Star' | '2 Stars' | '3 Stars' | '4 Stars' | '5 Stars';

// API response types
export interface CosmicResponse<T> {
  objects: T[];
  total: number;
}

// Utility types
export type ProductWithReviews = Product & {
  reviews?: Review[];
  averageRating?: number;
  reviewCount?: number;
};