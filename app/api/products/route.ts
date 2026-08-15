import { NextResponse } from 'next/server';

const products = [
  { id: 1, name: "Casual Cotton Jacket", price: 55.99, rating: 4.6, image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=600", category: "Men" },
  { id: 2, name: "Oversized Sweater", price: 39.99, rating: 4.7, discount: 20, image: "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?auto=format&fit=crop&w=600", category: "Women" },
  { id: 3, name: "Minimal Sneakers", price: 69.99, rating: 4.8, image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=600", category: "Shoes" },
  { id: 4, name: "Leather Duffle Bag", price: 129.99, rating: 4.9, image: "https://images.unsplash.com/photo-1584916201218-f4242ceb4809?auto=format&fit=crop&w=600", category: "Bags" },
  { id: 5, name: "Classic Watch", price: 89.99, rating: 4.6, image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&w=600", category: "Accessories" },
  { id: 6, name: "Polarized Sunglasses", price: 24.99, rating: 4.5, image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=600", category: "Accessories" },
  { id: 7, name: "Eau de Parfum", price: 49.99, rating: 4.7, image: "https://images.unsplash.com/photo-1596462502278-27bfdd403348?auto=format&fit=crop&w=600", category: "Beauty" },
  { id: 8, name: "Classic Baseball Cap", price: 19.99, rating: 4.6, image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89d?auto=format&fit=crop&w=600", category: "Accessories" },
  { id: 9, name: "Comfort Hoodie", price: 44.99, rating: 4.6, image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=600", category: "Men" },
  { id: 10, name: "Chelsea Boots", price: 99.99, rating: 4.8, image: "https://images.unsplash.com/photo-1542272617-08f3dd4b4032?auto=format&fit=crop&w=600", category: "Shoes" },
  { id: 11, name: "Leather Belt", price: 29.99, rating: 4.7, image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=600", category: "Accessories" },
  { id: 12, name: "Canvas Tote Bag", price: 34.99, rating: 4.6, image: "https://images.unsplash.com/photo-1584916201218-f4242ceb4809?auto=format&fit=crop&w=600", category: "Bags" },
];

export async function GET() {
  return NextResponse.json(products);
}