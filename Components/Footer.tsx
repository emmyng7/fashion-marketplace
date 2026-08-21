import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-20 bg-white border-t border-gray-200 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Brand */}
        <div>
          <Link href="/" className="text-2xl font-bold tracking-tighter flex items-center gap-2 mb-4">
            <span className="text-3xl">🛍️</span> BTM
          </Link>
          <p className="text-sm text-gray-500">Quality products, great prices and exceptional customer service.</p>
        </div>

        {/* Shop */}
        <div>
          <h4 className="font-medium text-sm mb-4">Shop</h4>
          <ul className="space-y-2 text-sm text-gray-500">
            <li><Link href="/shop" className="hover:text-black">All Products</Link></li>
            <li><Link href="/shop" className="hover:text-black">Best Sellers</Link></li>
            <li><Link href="/shop" className="hover:text-black">New Arrivals</Link></li>
            <li><Link href="/shop" className="hover:text-black">Deals</Link></li>
          </ul>
        </div>

        {/* Customer Service */}
        <div>
          <h4 className="font-medium text-sm mb-4">Customer Service</h4>
          <ul className="space-y-2 text-sm text-gray-500">
            <li><Link href="/contact" className="hover:text-black">Help Center</Link></li>
            <li><Link href="/track-order" className="hover:text-black">Track Order</Link></li>
            <li><Link href="/contact" className="hover:text-black">Returns & Refunds</Link></li>
            <li><Link href="/contact" className="hover:text-black">Shipping Info</Link></li>
          </ul>
        </div>

        {/* Stay Connected */}
        <div>
          <h4 className="font-medium text-sm mb-4">Stay Connected</h4>
          <div className="flex bg-gray-100 rounded-full overflow-hidden">
            <input type="email" placeholder="Enter your email" className="flex-1 bg-transparent px-4 py-2 text-sm outline-none" />
            <button className="bg-black text-white px-4 py-2 text-sm font-medium hover:bg-gray-800 transition">Subscribe</button>
          </div>
          <div className="flex gap-4 mt-4 text-gray-500">
            <span className="hover:text-black cursor-pointer text-lg">📘</span>
            <span className="hover:text-black cursor-pointer text-lg">🐦</span>
            <span className="hover:text-black cursor-pointer text-lg">📸</span>
            <span className="hover:text-black cursor-pointer text-lg">▶️</span>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="max-w-7xl mx-auto px-4 mt-8 pt-8 border-t border-gray-100 text-xs text-gray-500 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p>© 2024 BTM. All rights reserved.</p>
        <div className="flex gap-4">
          <Link href="#" className="hover:text-black">Privacy Policy</Link>
          <Link href="#" className="hover:text-black">Terms & Conditions</Link>
        </div>
      </div>
    </footer>
  );
}