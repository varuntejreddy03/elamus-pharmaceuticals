import { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState(() => {
    const saved = localStorage.getItem('enquiryCart');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('enquiryCart', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product) => {
    setCartItems((prev) => {
      if (prev.find((item) => item.slug === product.slug)) return prev;
      return [...prev, product];
    });
  };

  const removeFromCart = (slug) => {
    setCartItems((prev) => prev.filter((item) => item.slug !== slug));
  };

  const clearCart = () => setCartItems([]);

  const isInCart = (slug) => cartItems.some((item) => item.slug === slug);

  const getWhatsAppUrl = () => {
    if (cartItems.length === 0) return '';
    const productList = cartItems.map((item, i) => `${i + 1}. ${item.name}`).join('\n');
    const message = `Hello Elamus Pharmaceuticals, I would like to enquire about these products:\n\n${productList}\n\nPlease share more details.`;
    return `https://wa.me/917989005105?text=${encodeURIComponent(message)}`;
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart, isInCart, getWhatsAppUrl }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
