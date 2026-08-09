export default function Home() {
  return (
    <main className="min-h-screen bg-[#F9F6F0] text-[#1A1A1A]">
      
      {/* --- NAVBAR --- */}
      <nav className="flex items-center justify-between px-8 py-6 max-w-7xl mx-auto">
        <div className="text-2xl font-bold tracking-tight">Nextgen</div>
        <div className="hidden md:flex space-x-8 text-sm font-medium text-gray-600">
          <a href="/shop" className="hover:text-black">Shop All</a>
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
            <a href="/shop" className="inline-block mt-6 bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors shadow-lg">
              EXPLORE PRODUCT
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}