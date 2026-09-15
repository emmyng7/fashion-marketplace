"use client";

import { createContext, useContext, useState, ReactNode, useEffect } from "react";

type CartItem = {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
  size?: string;
  color?: string;
};

type CartContextType = {
  items: CartItem[];
  addToCart: (product: any) => void;
  removeFromCart: (productId: number) => void;
  cartCount: number;
  totalPrice: number;
  wishlistCount: number;
  setWishlistCount: (count: number) => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  // Load cart from Local Storage when the app starts
  const [items, setItems] = useState<CartItem[]>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("shopigo_cart");
      return saved ? JSON.parse(saved) : [];
    }
    return [];
  });

  // ✅ Wishlist count state
  const [wishlistCount, setWishlistCount] = useState<number>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("btm_wishlist");
      return saved ? JSON.parse(saved).length : 0;
    }
    return 0;
  });

  // Save cart to Local Storage whenever it changes
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("shopigo_cart", JSON.stringify(items));
    }
  }, [items]);

  // ✅ Sync wishlist count from Local Storage whenever it changes
  useEffect(() => {
    const handleStorage = () => {
      const saved = localStorage.getItem("btm_wishlist");
      setWishlistCount(saved ? JSON.parse(saved).length : 0);
    };
    window.addEventListener("storage", handleStorage);
    // Also run on mount
    handleStorage();
    return () => window.removeEventListener("storage", handleStorage);
  }, []);

  const addToCart = (product: any) => {
    setItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { 
        id: product.id, 
        name: product.name, 
        price: product.price, 
        image: product.image, 
        quantity: 1,
        size: product.size,
        color: product.color
      }];
    });
  };

  const removeFromCart = (productId: number) => {
    setItems((prev) => prev.filter((item) => item.id !== productId));
  };

  const cartCount = items.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = items.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <CartContext.Provider value={{ 
      items, 
      addToCart, 
      removeFromCart, 
      cartCount, 
      totalPrice,
      wishlistCount,
      setWishlistCount
    }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}