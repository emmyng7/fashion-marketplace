const mockProducts = [
  {
    id: 1,
    name: "Classic White Sneakers",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600",
  },
  {
    id: 2,
    name: "Leather Tote Bag",
    price: 120.00,
    image: "https://images.unsplash.com/photo-1584916201218-f4242ceb4809?w=600",
  },
  {
    id: 3,
    name: "Oversized Cotton Tee",
    price: 34.99,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600",
  },
  {
    id: 4,
    name: "Sunglasses",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600",
  },
];

export default function ShopPage() {
  return (
    <div className="px-8 py-12 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-[#1A1A1A]">Shop All</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {mockProducts.map((product) => (
          <div key={product.id} className="bg-white rounded-[24px] p-4 shadow-sm hover:shadow-md transition-all cursor-pointer">
            <div className="h-48 bg-gray-100 rounded-[16px] overflow-hidden mb-4 relative">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="font-semibold text-sm">{product.name}</h3>
            <p className="text-sm text-gray-500 mt-1">${product.price.toFixed(2)}</p>
          </div>
        ))}
      </div>
    </div>
  );
}