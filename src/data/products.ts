// src/data/products.ts

// Define an interface for the product structure (optional but good practice)
export interface Product {
  id: number;
  category: string;
  name: string;
  price: number;
  originalPrice: number | null;
  discount: number | null;
  rating: number | null;
  imageUrl: string;
  // Add more fields as needed: description, specifications, images array, etc.
  images?: string[]; // Optional array for multiple images
  description?: string;
}

// Mock data - replace with actual data source later
export const mockProducts: Product[] = [
  {
    id: 1,
    category: 'Black Dragon',
    name: 'BÀN BIDA WHITE DRANGON',
    price: 59000000,
    originalPrice: null,
    discount: null,
    rating: null,
    imageUrl: '/images/product-placeholder.png', 
    images: ['/images/product-placeholder.png', '/images/product-placeholder-2.png'], // Example multiple images
    description: 'Mô tả chi tiết cho Bàn Bida White Dragon...'
  },
  {
    id: 2,
    category: 'Hunter Royal',
    name: 'BÀN BIDA OlexRS HUNTER ROYAL (Đen)',
    price: 65000000,
    originalPrice: 70000000,
    discount: 7,
    rating: null,
    imageUrl: '/images/product-placeholder.png',
    images: ['/images/product-placeholder.png'],
    description: 'Mô tả chi tiết cho Bàn Bida OlexRS Hunter Royal (Đen)...'
  },
  {
    id: 3,
    category: 'OlexRS Hero',
    name: 'BÀN BIDA OlexRS HERO',
    price: 50000000,
    originalPrice: 55000000,
    discount: 9,
    rating: null,
    imageUrl: '/images/product-placeholder.png',
    images: ['/images/product-placeholder.png'],
    description: 'Mô tả chi tiết cho Bàn Bida OlexRS Hero...'
  },
  {
    id: 4,
    category: 'Hunter Royal',
    name: 'BÀN BIDA OlexRS HUNTER ROYAL',
    price: 65000000,
    originalPrice: 70000000,
    discount: 7,
    rating: null,
    imageUrl: '/images/product-placeholder.png',
    images: ['/images/product-placeholder.png'],
    description: 'Mô tả chi tiết cho Bàn Bida OlexRS Hunter Royal...'
  },
  {
    id: 5,
    category: '9023',
    name: 'BÀN BIDA 9023',
    price: 52000000,
    originalPrice: 55000000,
    discount: 5,
    rating: null,
    imageUrl: '/images/product-placeholder.png',
    images: ['/images/product-placeholder.png'],
    description: 'Mô tả chi tiết cho Bàn Bida 9023...'
  },
  {
    id: 6,
    category: 'Black heart',
    name: 'BÀN BIDA BLACK HEART',
    price: 65000000,
    originalPrice: 70000000,
    discount: 7,
    rating: null,
    imageUrl: '/images/product-placeholder.png',
    images: ['/images/product-placeholder.png'],
    description: 'Mô tả chi tiết cho Bàn Bida Black Heart...'
  },
  {
    id: 7,
    category: 'Black Dragon',
    name: 'BÀN BIDA BLACK DRANGON',
    price: 59000000,
    originalPrice: null,
    discount: null,
    rating: 5.0,
    imageUrl: '/images/product-placeholder.png',
    images: ['/images/product-placeholder.png'],
    description: 'Mô tả chi tiết cho Bàn Bida Black Dragon...'
  },
  // Add details (images, description) for other products if needed
];

// Helper function to get a product by ID (simulates data fetching)
export const getProductById = (id: number): Product | undefined => {
  return mockProducts.find(product => product.id === id);
}; 