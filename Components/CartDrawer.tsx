"use client";

interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
}

export default function CartDrawer({ isOpen, onClose, items }: CartDrawerProps) {
  // Calculate the total price
  const totalPrice = items.reduce((total, item) => total + item.price * item.quantity, 0);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Dark Overlay Background */}
      <div 
        className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />
      
      {/* Slide-out Panel */}
      <div className="relative w-full max-w-md bg-[#F9F6F0] h-full shadow-2xl p-6 transform transition-transform duration-300 animate-slide-in">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">Shopping Cart</h2>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-gray-200 rounded-full transition"
          >
            ✕
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-60 text-gray-500">
            <span className="text-6xl mb-4">🛒</span>
            <p>Your cart is empty.</p>
          </div>
        ) : (
          <div className="flex flex-col h-[calc(100vh-200px)]">
            <div className="flex-1 overflow-y-auto space-y-4">
              {items.map((item) => (
                <div key={item.id} className="flex items-center space-x-4 bg-white p-4 rounded-2xl shadow-sm">
                  <div className="w-16 h-16 bg-gray-200 rounded-xl overflow-hidden flex-shrink-0">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-sm">{item.name}</h4>
                    <p className="text-xs text-gray-500">Qty: {item.quantity}</p>
                  </div>
                  <p className="font-semibold text-sm">${(item.price * item.quantity).toFixed(2)}</p>
                </div>
              ))}
            </div>

            <div className="border-t border-gray-200 pt-6 mt-6">
              <div className="flex justify-between text-lg font-bold mb-6">
                <span>Total</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
              <button className="w-full bg-black text-white py-4 rounded-full font-semibold hover:bg-gray-800 transition-colors">
                Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}