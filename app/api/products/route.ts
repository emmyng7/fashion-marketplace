import { NextResponse } from 'next/server';

const products = [
  {
    id: 1,
    name: "Classic White Sneakers",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600",
    category: "Shoes",
    rating: 4.8,
    description: "A wardrobe essential for any season."
  },
  {
    id: 2,
    name: "Leather Tote Bag",
    price: 120.00,
    image: "https://images.unsplash.com/photo-1584916201218-f4242ceb4809?auto=format&fit=crop&w=600",
    category: "Bags",
    rating: 4.6,
    description: "A luxurious everyday bag."
  },
  {
    id: 3,
    name: "Comfort Hoodie",
    price: 44.99,
    image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=600",
    category: "Clothing",
    rating: 4.9,
    description: "Stay cozy and stylish."
  },
  {
    id: 4,
    name: "Minimal Sunglasses",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=600",
    category: "Accessories",
    rating: 4.5,
    description: "Protect your eyes in style."
  },
  {
    id: 5,
    name: "Classic Wristwatch",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&w=600",
    category: "Watches",
    rating: 4.7,
    description: "Timeless elegance."
  },
  {
    id: 6,
    name: "Eau de Parfum",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1596462502278-27bfdd403348?auto=format&fit=crop&w=600",
    category: "Beauty",
    rating: 4.8,
    description: "A signature scent."
  },
  {
    id: 7,
    name: "Canvas Tote Bag",
    price: 34.99,
    image: "https://images.unsplash.com/photo-1584916201218-f4242ceb4809?auto=format&fit=crop&w=600",
    category: "Bags",
    rating: 4.4,
    description: "Lightweight and stylish."
  },
  {
    id: 8,
    name: "Slim Fit Denim",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1542272617-08f3dd4b4032?auto=format&fit=crop&w=600",
    category: "Clothing",
    rating: 4.6,
    description: "The perfect fit."
  },
  {
    id: 9,
    name: "Leather Belt",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=600",
    category: "Accessories",
    rating: 4.5,
    description: "Complete your look."
  },
  {
    id: 10,
    name: "Running Shoes",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600",
    category: "Shoes",
    rating: 4.9,
    description: "Built for speed."
  },
  {
    id: 11,
    name: "Backpack",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=600",
    category: "Bags",
    rating: 4.7,
    description: "Carry everything you need."
  },
  {
    id: 12,
    name: "Winter Coat",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?auto=format&fit=crop&w=600",
    category: "Clothing",
    rating: 4.8,
    description: "Stay warm in style."
  }
];

export async function GET() {
  return NextResponse.json(products);
}