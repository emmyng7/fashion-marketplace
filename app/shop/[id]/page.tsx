"use client";

import React from "react";
import Link from "next/link";
import { useCart } from "@/components/CartProvider";
import { useEffect, useState } from "react";

type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
  rating: number;
};

export default function ProductDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = React.use(params);
  const { addToCart } = useCart();
  const [product, setProduct] = useState<Product | null>(null);
  
  // Interactive State
  const [selectedSize, setSelectedSize] = useState("M");
  const [selectedColor, setSelectedColor] = useState("#9DB8D4");
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [addedToWishlist, setAddedToWishlist] = useState(false);

  // Fetch product from our API
  useEffect(() => {
    fetch('/api/products')
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((p: Product) => p.id === Number(id));
        setProduct(found || data[0]); 
      });
  }, [id]);

  // Check if product is already in wishlist
  useEffect(() => {
    if (typeof window !== "undefined") {
      const wishlist = JSON.parse(localStorage.getItem("btm_wishlist") || "[]");
      setAddedToWishlist(wishlist.some((item: any) => item.id === Number(id)));
    }
  }, [id]);

  if (!product) {
    return <div className="min-h-screen flex items-center justify-center text-gray-500">Loading product...</div>;
  }

  // Mock data for colors and sizes
  const colors = ["#9DB8D4", "#2F4F4F", "#DAA520", "#000000"];
  const sizes = ["S", "M", "L", "XL", "XXL"];

  // Build the product object to send to cart
  const buildCartItem = () => ({
    id: product.id,
    name: product.name,
    price: product.price,
    image: product.image,
    quantity: quantity,
    size: selectedSize,
    color: selectedColor,
  });

  // Add to Cart
  const handleAddToCart = () => {
    addToCart(buildCartItem());
  };

  // Buy Now: Add to cart and go to checkout
  const handleBuyNow = () => {
    addToCart(buildCartItem());
    window.location.href = "/checkout";
  };

  // Add to Wishlist
  const handleAddToWishlist = () => {
    if (typeof window !== "undefined") {
      const wishlist = JSON.parse(localStorage.getItem("btm_wishlist") || "[]");
      const exists = wishlist.some((item: any) => item.id === product.id);
      
      if (!exists) {
        const newItem = {
          id: product.id,
          name: product.name,
          price: product.price,
          image: product.image,
          size: selectedSize,
          color: selectedColor,
          addedOn: new Date().toLocaleDateString("en-US", { month: 'short', day: 'numeric', year: 'numeric' })
        };
        wishlist.push(newItem);
        localStorage.setItem("btm_wishlist", JSON.stringify(wishlist));
        setAddedToWishlist(true);
        alert("Added to Wishlist!");
      } else {
        alert("Already in Wishlist!");
      }
    }
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
              <div className="flex md:flex-col gap-3 overflow-x-auto md:overflow-visible">
                {[0, 1, 2, 3, 4].map((imgIndex) => (
                  <button 
                    key={imgIndex}
                    onClick={() => setSelectedImage(imgIndex)}
                    className={`w-16 h-20 rounded-[12px] overflow-hidden border-2 flex-shrink-0 transition-all ${selectedImage === imgIndex ? 'border-black' : 'border-transparent hover:border-gray-200'}`}
                  >
                    <img 
                      src={product.image} 
                      alt={`${product.name} ${imgIndex + 1}`} 
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
              
              <div className="flex-1 bg-gray-50 rounded-[24px] overflow-hidden aspect-square relative">
                <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm p-2 rounded-full cursor-pointer hover:bg-white shadow-sm z-10">
                  <span className="text-lg">🔍</span>
                </div>
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* RIGHT COLUMN: DETAILS */}
            <div className="flex flex-col justify-start">
              
              <div className="flex gap-2 mb-3">
                <span className="bg-green-50 text-green-700 text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider">New Arrival</span>
                <span className="bg-orange-50 text-orange-700 text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider">Best Seller</span>
              </div>

              <h1 className="text-3xl font-bold text-[#111827] mb-2">{product.name}</h1>
              <div className="flex items-center gap-3 mb-4">
                <div className="flex text-yellow-500 text-sm">
                  {'★'.repeat(Math.floor(product.rating))}
                  {product.rating % 1 !== 0 && '★'}
                </div>
                <span className="text-sm font-medium text-gray-700">{product.rating}</span>
                <span className="text-sm text-gray-400">(128 reviews)</span>
                <span className="text-sm text-green-600 font-medium">🔥 1,250+ bought in past month</span>
              </div>

              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl font-bold text-[#111827]">${product.price}</span>
                <span className="text-lg text-gray-400 line-through">${(product.price * 1.33).toFixed(2)}</span>
                <span className="bg-red-100 text-red-600 text-xs font-bold px-2 py-0.5 rounded-full">-25%</span>
              </div>

              <p className="text-gray-600 leading-relaxed mb-6 text-sm">{product.description}</p>

              <div className="mb-6">
                <p className="text-sm font-semibold mb-3">Color: <span className="font-normal text-gray-500">Light Blue</span></p>
                <div className="flex gap-3">
                  {colors.map((color, idx) => (
                    <button 
                      key={idx} 
                      onClick={() => setSelectedColor(color)}
                      className={`w-8 h-8 rounded-full border-2 transition-all ${selectedColor === color ? 'border-black' : 'border-gray-200 hover:border-gray-400'}`}
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <div className="flex justify-between items-center mb-3">
                  <p className="text-sm font-semibold">Size: <span className="font-normal text-gray-500">{selectedSize}</span></p>
                  <button className="text-xs text-gray-500 hover:text-black underline">Size Guide</button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {sizes.map(size => (
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
                  {/* ADD TO CART */}
                  <button 
                    onClick={handleAddToCart}
                    className="flex-1 bg-black text-white py-3.5 rounded-full font-semibold hover:bg-gray-800 transition-colors flex items-center justify-center gap-2"
                  >
                    🛒 Add to Cart
                  </button>
                  
                  {/* BUY NOW - GOES TO CHECKOUT */}
                  <button 
                    onClick={handleBuyNow}
                    className="flex-1 border border-gray-300 text-black py-3.5 rounded-full font-semibold hover:bg-gray-50 transition-colors"
                  >
                    Buy Now
                  </button>
                </div>
              </div>
              
              {/* ADD TO WISHLIST - SAVES TO LOCAL STORAGE */}
              <button 
                onClick={handleAddToWishlist}
                className="mt-4 flex items-center gap-2 text-sm text-gray-500 hover:text-black cursor-pointer transition"
              >
                <span>{addedToWishlist ? "♥️" : "♡"}</span> 
                {addedToWishlist ? "Added to Wishlist" : "Add to Wishlist"}
              </button>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}