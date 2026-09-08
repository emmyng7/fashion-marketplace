import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* TOP SECTION: Brand & Newsletter (Shown on ALL screens) */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 pb-10 border-b border-gray-100">
          
          {/* Logo & Tagline */}
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
            <Link href="/" className="flex items-center gap-2 text-3xl font-bold tracking-tighter text-[#111827]">
              <span className="text-4xl">🛍️</span> BTM
            </Link>
            <div className="text-sm text-gray-500">
              <p className="hidden md:block">Quality products, great prices and exceptional customer service.</p>
              <p className="md:hidden mt-1">Quality products &amp; exceptional service.</p>
            </div>
          </div>

          {/* Newsletter */}
          <div className="w-full md:w-auto">
            <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">Stay Connected</p>
            <div className="flex bg-gray-100 rounded-full overflow-hidden max-w-[400px] w-full">
              <input type="email" placeholder="Enter your email" className="flex-1 bg-transparent px-5 py-3 text-sm outline-none placeholder:text-gray-400" />
              <button className="bg-[#111827] text-white px-6 py-3 text-sm font-semibold hover:bg-gray-800 transition">Subscribe</button>
            </div>
          </div>
        </div>

        {/* MIDDLE SECTION: Links (Responsive Grid) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-10">
          
          {/* Shop */}
          <div className="col-span-1">
            <h4 className="font-semibold text-[#111827] text-sm mb-4">Shop</h4>
            <ul className="space-y-2.5 text-sm text-gray-500">
              <li><Link href="/shop" className="hover:text-black transition">All Products</Link></li>
              <li><Link href="/shop" className="hover:text-black transition">Best Sellers</Link></li>
              <li><Link href="/shop" className="hover:text-black transition">New Arrivals</Link></li>
              <li><Link href="/shop" className="hover:text-black transition">Deals</Link></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div className="col-span-1">
            <h4 className="font-semibold text-[#111827] text-sm mb-4">Customer Service</h4>
            <ul className="space-y-2.5 text-sm text-gray-500">
              <li><Link href="/contact" className="hover:text-black transition">Help Center</Link></li>
              <li><Link href="/track-order" className="hover:text-black transition">Track Order</Link></li>
              <li><Link href="/contact" className="hover:text-black transition">Returns &amp; Refunds</Link></li>
              <li><Link href="/contact" className="hover:text-black transition">Shipping Info</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div className="col-span-1">
            <h4 className="font-semibold text-[#111827] text-sm mb-4">Company</h4>
            <ul className="space-y-2.5 text-sm text-gray-500">
              <li><Link href="#" className="hover:text-black transition">About Us</Link></li>
              <li><Link href="#" className="hover:text-black transition">Careers</Link></li>
              <li><Link href="#" className="hover:text-black transition">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-black transition">Terms &amp; Conditions</Link></li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="col-span-1">
            <h4 className="font-semibold text-[#111827] text-sm mb-4">Follow Us</h4>
            <div className="flex gap-3">
              <span className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-xl hover:bg-gray-200 transition cursor-pointer">📘</span>
              <span className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-xl hover:bg-gray-200 transition cursor-pointer">🐦</span>
              <span className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-xl hover:bg-gray-200 transition cursor-pointer">📸</span>
              <span className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-xl hover:bg-gray-200 transition cursor-pointer">▶️</span>
            </div>
          </div>
        </div>

        {/* BOTTOM SECTION: Copyright */}
        <div className="pt-8 border-t border-gray-100 text-xs text-gray-500 flex flex-col md:flex-row justify-between items-center gap-2">
          <p>© 2024 BTM. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-black transition">Privacy Policy</Link>
            <Link href="#" className="hover:text-black transition">Terms &amp; Conditions</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}