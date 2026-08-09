import Image from "next/image";

// Hardcoded mock data so we don't need a database
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

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F9F6F0] text-[#1A1A1A]">
      
      {/* --- NAVBAR --- */}
      <nav className="flex items-center justify-between px-8 py-6 max-w-7xl mx-auto">
        <div className="text-2xl font-bold tracking-tight">Nextgen</div>
        <div className="hidden md:flex space-x-8 text-sm font-medium text-gray-600">
          <a href="#" className="hover:text-black">New Product</a>
          <a href="#" className="hover:text-black">Support</a>
        </div>
        <div className="flex items-center space-x-4">
          <button className="text-sm font-semibold">Sign In</button>
          <button className="bg-black text-white px-4 py-2 rounded-full text-sm font-medium">Cart (0)</button>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="relative w-full max-w-7xl mx-auto mt-4 px-4">
        <div className="relative w-full h-[500px] md:h-[600px] rounded-[40px] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400/30 to-purple-400/30 z-10" />
          <img 
            src="https://images.unsplash.com/photo-1529139574466-a302a2debb6e?q=80&w=2000&auto=format&fit=crop" 
            alt="Fashion Hero"
            className="object-cover w-full h-full"
          />
          <div className="absolute bottom-12 left-12 z-20 max-w-lg text-white">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-tight drop-shadow-sm">
              Summer Arrival of Outfit
            </h1>
            <p className="mt-4 text-lg font-light opacity-90 drop-shadow-md">
              Discover today's trends that define your unique style.
            </p>
            <button className="mt-6 bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors shadow-lg">
              EXPLORE PRODUCT
            </button>
          </div>
        </div>
      </section>

      {/* --- PRODUCTS SECTION --- */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold mb-8">Latest Arrivals</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {mockProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-[24px] p-4 shadow-sm hover:shadow-md transition-shadow">
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
      </section>

    </main>
  );
}