
export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  category: string;
  featured: boolean;
}

export interface Review {
  id: number;
  productId: number;
  author: string;
  rating: number;
  comment: string;
  date: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Elegant Tote Bag",
    description: "A spacious and elegant tote bag perfect for everyday use. Features multiple compartments and a sturdy design that combines style with functionality.",
    price: 79.99,
    imageUrl: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    category: "Tote Bags",
    featured: true
  },
  {
    id: 2,
    name: "Designer Crossbody",
    description: "A chic crossbody bag with adjustable strap and golden hardware accents. Perfect for a night out or casual day wear.",
    price: 89.99,
    imageUrl: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    category: "Crossbody",
    featured: true
  },
  {
    id: 3,
    name: "Classic Leather Satchel",
    description: "Timeless leather satchel with multiple compartments. The vintage-inspired design offers both style and practicality.",
    price: 129.99,
    imageUrl: "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    category: "Satchels",
    featured: false
  },
  {
    id: 4,
    name: "Mini Shoulder Bag",
    description: "Compact yet spacious mini shoulder bag with chain detail. Perfect for carrying your essentials in style.",
    price: 69.99,
    imageUrl: "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    category: "Shoulder Bags",
    featured: true
  },
  {
    id: 5,
    name: "Luxury Clutch",
    description: "Elegant evening clutch with detachable chain strap. Features a satin lining and secure clasp closure.",
    price: 59.99,
    imageUrl: "https://images.unsplash.com/photo-1575714097867-a3f58ae34d8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    category: "Clutches",
    featured: false
  },
  {
    id: 6,
    name: "Leather Hobo Bag",
    description: "Slouchy, casual hobo bag made from premium leather. Spacious interior with multiple pockets for organization.",
    price: 99.99,
    imageUrl: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    category: "Hobo Bags",
    featured: true
  },
  {
    id: 7,
    name: "Structured Handbag",
    description: "Sophisticated structured handbag with top handle and optional shoulder strap. Perfect for business or formal occasions.",
    price: 119.99,
    imageUrl: "https://images.unsplash.com/photo-1564422170194-896b89110ef8?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    category: "Handbags",
    featured: false
  },
  {
    id: 8,
    name: "Boho Fringe Bag",
    description: "Bohemian-inspired fringe bag with intricate detailing. Made from sustainable materials with a cotton lining.",
    price: 84.99,
    imageUrl: "https://images.unsplash.com/photo-1566150902887-9679ecc155ba?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    category: "Boho Bags",
    featured: true
  }
];

export const reviews: Review[] = [
  {
    id: 1,
    productId: 1,
    author: "Emma Thompson",
    rating: 5,
    comment: "This tote bag is amazing! It's spacious enough for all my daily essentials and looks so elegant. The quality is outstanding!",
    date: "2025-04-15"
  },
  {
    id: 2,
    productId: 1,
    author: "Sophia Rodriguez",
    rating: 4,
    comment: "Love this bag! The only reason I'm giving 4 stars is because I wish it had more color options.",
    date: "2025-04-02"
  },
  {
    id: 3,
    productId: 2,
    author: "Olivia Wilson",
    rating: 5,
    comment: "Perfect size crossbody, looks exactly like the photos. I've received so many compliments!",
    date: "2025-05-10"
  },
  {
    id: 4,
    productId: 3,
    author: "Charlotte Davis",
    rating: 4,
    comment: "Beautiful leather and craftsmanship. It's a bit heavier than I expected, but that speaks to its quality.",
    date: "2025-04-25"
  },
  {
    id: 5,
    productId: 4,
    author: "Amelia Jones",
    rating: 5,
    comment: "This mini bag fits way more than you'd think! The chain detail is gorgeous and not too heavy.",
    date: "2025-05-01"
  },
  {
    id: 6,
    productId: 5,
    author: "Isabella Martinez",
    rating: 5,
    comment: "Used this clutch for my friend's wedding and it was perfect. Elegant and practical!",
    date: "2025-03-20"
  },
  {
    id: 7,
    productId: 6,
    author: "Ava Garcia",
    rating: 4,
    comment: "So comfortable to carry! The leather is buttery soft and seems like it will age beautifully.",
    date: "2025-04-18"
  },
  {
    id: 8,
    productId: 7,
    author: "Mia Brown",
    rating: 5,
    comment: "This structured bag holds its shape perfectly even when full. It elevates any outfit!",
    date: "2025-05-05"
  }
];

export function getProductById(id: number): Product | undefined {
  return products.find(product => product.id === id);
}

export function getFeaturedProducts(): Product[] {
  return products.filter(product => product.featured);
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter(product => 
    product.category.toLowerCase() === category.toLowerCase()
  );
}

export function getProductReviews(productId: number): Review[] {
  return reviews.filter(review => review.productId === productId);
}

export function getAverageRating(productId: number): number {
  const productReviews = getProductReviews(productId);
  if (productReviews.length === 0) return 0;
  
  const sum = productReviews.reduce((total, review) => total + review.rating, 0);
  return parseFloat((sum / productReviews.length).toFixed(1));
}
