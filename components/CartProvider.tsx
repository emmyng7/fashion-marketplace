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
  removeFromCart: (productId: number) => void; // THIS IS WHAT'S MISSING!
  cartCount: number;
  totalPrice: number;
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

  // Save cart to Local Storage whenever it changes
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("shopigo_cart", JSON.stringify(items));
    }
  }, [items]);

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

  // NEW: Remove item from cart
  const removeFromCart = (productId: number) => {
    setItems((prev) => prev.filter((item) => item.id !== productId));
  };

  const cartCount = items.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = items.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <CartContext.Provider value={{ items, addToCart, removeFromCart, cartCount, totalPrice }}>
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