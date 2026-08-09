import Link from "next/link";

const mockProducts = [
  {
    id: 1,
    name: "Classic White Sneakers",
    price: 89.99,
    rating: 5,
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600",
    category: "Shoes",
  },
  {
    id: 2,
    name: "Leather Tote Bag",
    price: 120.00,
    rating: 4,
    image: "https://images.unsplash.com/photo-1584916201218-f4242ceb4809?w=600",
    category: "Bags",
  },
  {
    id: 3,
    name: "Oversized Cotton Tee",
    price: 34.99,
    rating: 4,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600",
    category: "T-Shirts",
  },
  {
    id: 4,
    name: "Sunglasses",
    price: 49.99,
    rating: 5,
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600",
    category: "Accessories",
  },
  {
    id: 5,
    name: "Wool Winter Scarf",
    price: 45.00,
    rating: 4,
    image: "https://images.unsplash.com/photo-1606791405798-4105d66c3df5?w=600",
    category: "Accessories",
  },
  {
    id: 6,
    name: "Slim Fit Denim Jeans",
    price: 79.99,
    rating: 5,
    image: "https://images.unsplash.com/photo-1542272617-08f3dd4b4032?w=600",
    category: "Clothing",
  },
];

export default function ShopPage() {
  return (
    <div className="px-4 md:px-8 py-12 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-[#1A1A1A]">New Arrivals</h1>
        <div className="flex space-x-2 text-sm font-medium">
          <span className="bg-black text-white px-4 py-2 rounded-full">All</span>
          <span className="px-4 py-2 rounded-full hover:bg-gray-200 cursor-pointer transition">Men</span>
          <span className="px-4 py-2 rounded-full hover:bg-gray-200 cursor-pointer transition">Women</span>
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {mockProducts.map((product) => (
          <Link key={product.id} href={`/shop/${product.id}`}>
            <div className="group bg-transparent cursor-pointer">
              <div className="relative bg-white rounded-[24px] overflow-hidden aspect-[4/5] mb-4 shadow-sm hover:shadow-xl transition-all duration-300">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold">
                  {product.category}
                </span>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-lg">{product.name}</h3>
                  <div className="flex items-center space-x-1 mt-1">
                    <span className="text-yellow-500 text-sm">★</span>
                    <span className="text-xs text-gray-500">{product.rating}.0</span>
                  </div>
                </div>
                <p className="font-bold text-lg">${product.price}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}