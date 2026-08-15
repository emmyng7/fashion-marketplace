"use client";

import Link from "next/link";
import { useCart } from "@/components/CartProvider";
import { useState } from "react";

export default function ProductDetail({ params }: { params: { id: string } }) {
  const { addToCart } = useCart();
  const [selectedSize, setSelectedSize] = useState("M");
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  // Mock Data - In a real app, you would fetch this from the API using the ID
  const product = {
    id: 1,
    name: "Classic Denim Jacket",
    price: 59.99,
    originalPrice: 79.99,
    rating: 4.7,
    reviewCount: 128,
    description: "A wardrobe staple that never goes out of style. This classic denim jacket features a comfortable fit, durable stitching, and timeless design that pairs perfectly with any outfit.",
    images: [
      "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?auto=format&fit=crop&w=800",
      "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?auto=format&fit=crop&w=800",
      "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800",
      "https://images.unsplash.com/photo-1534694127542-23a5f07b4a1f?auto=format&fit=crop&w=800",
      "https://images.unsplash.com/photo-1542272617-08f3dd4b4032?auto=format&fit=crop&w=800",
    ],
    colors: ["#9DB8D4", "#2F4F4F", "#DAA520", "#000000"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    tags: ["New Arrival", "Best Seller"],
    features: [
      "100% Premium Cotton Denim",
      "Button-up front closure",
      "Two chest pockets with button flap",
      "Side pockets for added convenience",
      "Adjustable cuffs",
      "Machine washable"
    ]
  };

  const handleAddToCart = () => {
    // Add the product with the selected size and quantity
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
      quantity: quantity,
      size: selectedSize
    });
  };

  return (
    <div className="min-h-screen bg-[#F5F5F5] pb-20">
      
      

      {/* --- BREADCRUMB --- */}
      <div className="max-w-7xl mx-auto px-4 pt-6 pb-2 text-sm text-gray-500">
        <Link href="/" className="hover:text-black">Home</Link> <span className="mx-1">/</span> 
        <Link href="/shop" className="hover:text-black">Shop</Link> <span className="mx-1">/</span> 
        <span className="text-black font-medium">{product.name}</span>
      </div>

      {/* --- MAIN PRODUCT SECTION --- */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="bg-white rounded-[30px] p-6 md:p-10 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            
            {/* LEFT COLUMN: IMAGES */}
            <div className="flex flex-col-reverse md:flex-row gap-4">
              {/* Thumbnails */}
              <div className="flex md:flex-col gap-3 overflow-x-auto md:overflow-visible">
                {product.images.map((img, idx) => (
                  <button 
                    key={idx}
                    onClick={() => setSelectedImage(idx)}
                    className={`w-16 h-20 rounded-[12px] overflow-hidden border-2 flex-shrink-0 transition-all ${selectedImage === idx ? 'border-black' : 'border-transparent hover:border-gray-200'}`}
                  >
                    <img src={img} alt={`Thumbnail ${idx}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
              
              {/* Main Image */}
              <div className="flex-1 bg-gray-50 rounded-[24px] overflow-hidden aspect-square relative">
                <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm p-2 rounded-full cursor-pointer hover:bg-white shadow-sm z-10">
                  <span className="text-lg">🔍</span>
                </div>
                <img 
                  src={product.images[selectedImage]} 
                  alt={product.name} 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* RIGHT COLUMN: DETAILS */}
            <div className="flex flex-col justify-start">
              
              {/* Tags */}
              <div className="flex gap-2 mb-3">
                {product.tags.map(tag => (
                  <span key={tag} className="bg-green-50 text-green-700 text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider">{tag}</span>
                ))}
              </div>

              {/* Title & Rating */}
              <h1 className="text-3xl font-bold text-[#111827] mb-2">{product.name}</h1>
              <div className="flex items-center gap-3 mb-4">
                <div className="flex text-yellow-500 text-sm">
                  {'★'.repeat(Math.floor(product.rating))}
                  {product.rating % 1 !== 0 && '★'}
                </div>
                <span className="text-sm font-medium text-gray-700">{product.rating}</span>
                <span className="text-sm text-gray-400">({product.reviewCount} reviews)</span>
                <span className="text-sm text-green-600 font-medium">🔥 1,250+ bought in past month</span>
              </div>

              {/* Price */}
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl font-bold text-[#111827]">${product.price}</span>
                {product.originalPrice && (
                  <>
                    <span className="text-lg text-gray-400 line-through">${product.originalPrice}</span>
                    <span className="bg-red-100 text-red-600 text-xs font-bold px-2 py-0.5 rounded-full">-{Math.round((1 - product.price/product.originalPrice) * 100)}%</span>
                  </>
                )}
              </div>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed mb-6 text-sm">{product.description}</p>

              {/* Color Picker */}
              <div className="mb-6">
                <p className="text-sm font-semibold mb-3">Color: <span className="font-normal text-gray-500">Light Blue</span></p>
                <div className="flex gap-3">
                  {product.colors.map((color, idx) => (
                    <button 
                      key={idx} 
                      className={`w-8 h-8 rounded-full border-2 transition-all ${idx === 0 ? 'border-black' : 'border-gray-200 hover:border-gray-400'}`}
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
              </div>

              {/* Size Picker */}
              <div className="mb-6">
                <div className="flex justify-between items-center mb-3">
                  <p className="text-sm font-semibold">Size: <span className="font-normal text-gray-500">{selectedSize}</span></p>
                  <button className="text-xs text-gray-500 hover:text-black underline">Size Guide</button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map(size => (
                    <button 
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`w-10 h-10 rounded-full border text-sm font-medium transition-all ${selectedSize === size ? 'bg-black text-white border-black' : 'border-gray-200 hover:border-black'}`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity & Actions */}
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-4">
                  <div className="flex items-center border border-gray-200 rounded-full bg-gray-50 px-3 py-1.5">
                    <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="w-6 h-6 flex items-center justify-center text-gray-500 hover:text-black text-lg">−</button>
                    <span className="w-8 text-center text-sm font-medium">{quantity}</span>
                    <button onClick={() => setQuantity(quantity + 1)} className="w-6 h-6 flex items-center justify-center text-gray-500 hover:text-black text-lg">+</button>
                  </div>
                  <span className="text-xs text-gray-500">Only <span className="font-bold text-black">12</span> left in stock</span>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 mt-2">
                  <button 
                    onClick={handleAddToCart}
                    className="flex-1 bg-black text-white py-3.5 rounded-full font-semibold hover:bg-gray-800 transition-colors flex items-center justify-center gap-2"
                  >
                    🛒 Add to Cart
                  </button>
                  <button className="flex-1 border border-gray-300 text-black py-3.5 rounded-full font-semibold hover:bg-gray-50 transition-colors">
                    Buy Now
                  </button>
                </div>
              </div>
              
              <div className="mt-4 flex items-center gap-2 text-sm text-gray-500 hover:text-black cursor-pointer">
                <span>♡</span> Add to Wishlist
              </div>

            </div>
          </div>
        </div>

        {/* --- BOTTOM SECTION: TABS & TRUST --- */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
          
          {/* Tabs (Left 2/3) */}
          <div className="lg:col-span-2 bg-white rounded-[30px] p-6 md:p-8 shadow-sm">
            <div className="flex border-b border-gray-100 mb-6">
              {["Description", "Additional Information", "Reviews (128)", "Shipping & Returns"].map((tab, idx) => (
                <button 
                  key={tab} 
                  className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors ${idx === 0 ? 'border-black text-black' : 'border-transparent text-gray-500 hover:text-black'}`}
                >
                  {tab}
                </button>
              ))}
            </div>
            
            <div className="text-sm text-gray-600 space-y-4">
              <p>{product.description}</p>
              <ul className="list-disc pl-5 space-y-1">
                {product.features.map(f => <li key={f}>{f}</li>)}
              </ul>
            </div>
          </div>

          {/* Trust Badge (Right 1/3) */}
          <div className="bg-white rounded-[30px] p-6 md:p-8 shadow-sm flex flex-col justify-center h-fit">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center text-xl">👥</div>
                <div>
                  <p className="font-semibold text-sm">Trusted by 10,000+ Customers</p>
                  <p className="text-xs text-gray-500">Quality products you can trust</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center text-xl">🏷️</div>
                <div>
                  <p className="font-semibold text-sm">Best Price Guarantee</p>
                  <p className="text-xs text-gray-500">We offer competitive prices</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center text-xl">🔒</div>
                <div>
                  <p className="font-semibold text-sm">Secure Shopping</p>
                  <p className="text-xs text-gray-500">Your data is always protected</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}