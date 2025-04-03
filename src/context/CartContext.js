import React, { createContext, useContext, useState, useEffect } from 'react';

// Create cart context
const CartContext = createContext();

// Custom hook to use the cart context
export const useCart = () => {
  return useContext(CartContext);
};

// Cart provider component
export const CartProvider = ({ children }) => {
  // Initialize cart from localStorage or empty array
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Update localStorage whenever cart changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  // Add item to cart
  const addToCart = (product) => {
    setCartItems(prevItems => {
      // Check if item already exists in cart
      const existingItem = prevItems.find(item => item.id === product.id);
      
      if (existingItem) {
        // Increase quantity if item exists
        return prevItems.map(item => 
          item.id === product.id 
            ? { ...item, quantity: item.quantity + 1 } 
            : item
        );
      } else {
        // Add new item with quantity 1
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  // Update quantity of an item
  const updateQuantity = (id, newQuantity) => {
    if (newQuantity >= 0) {
      setCartItems(prevItems => 
        prevItems.map(item => 
          item.id === id ? { ...item, quantity: newQuantity } : item
        ).filter(item => item.quantity > 0)
      );
    }
  };

  // Remove item from cart
  const removeItem = (id) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  // Clear entire cart
  const clearCart = () => {
    setCartItems([]);
  };

  // Calculate cart totals
  const cartTotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const itemCount = cartItems.reduce((count, item) => count + item.quantity, 0);

  // Context value
  const value = {
    cartItems,
    addToCart,
    updateQuantity,
    removeItem,
    clearCart,
    cartTotal,
    itemCount
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};
