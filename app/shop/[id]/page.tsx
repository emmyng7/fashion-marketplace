import Link from "next/link";

// This tells Next.js to accept a dynamic ID in the URL
export default function ProductDetail({ params }: { params: { id: string } }) {
  // MOCK DATA - In a real app, we would fetch this based on params.id
  const product = {
    id: 1,
    name: "Classic White Sneakers",
    price: 89.99,
    description: "Step into timeless style with our Classic White Sneakers. Crafted from premium leather with a cushioned sole for all-day comfort.",
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=1200",
  };

  return (
    <div className="min-h-screen bg-[#F9F6F0] px-4 md:px-8 py-12 max-w-7xl mx-auto">
      {/* Back Button */}
      <Link href="/shop" className="inline-flex items-center mb-8 text-sm font-medium hover:underline">
        ← Back to Shop
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-white rounded-[40px] p-8 shadow-sm">
        {/* Left: Image */}
        <div className="relative aspect-square rounded-[24px] overflow-hidden bg-gray-100">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right: Details */}
        <div className="flex flex-col justify-center">
          <h1 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4">{product.name}</h1>
          <p className="text-2xl font-semibold mb-6">${product.price}</p>
          <p className="text-gray-600 leading-relaxed mb-8">{product.description}</p>

          {/* Size Selector (Professional touch) */}
          <div className="mb-8">
            <p className="text-sm font-semibold mb-3">Select Size</p>
            <div className="flex space-x-3">
              {['S', 'M', 'L', 'XL'].map((size) => (
                <button key={size} className="w-12 h-12 rounded-full border border-gray-300 hover:border-black transition-colors flex items-center justify-center text-sm font-medium bg-white">
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-4">
            <button className="flex-1 bg-black text-white py-4 rounded-full font-semibold hover:bg-gray-800 transition-colors">
              Add to Cart
            </button>
            <button className="w-14 h-14 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors">
              <span className="text-xl">♡</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}