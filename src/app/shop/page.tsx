// pages/sports-shop.tsx
'use client'
import Image from "next/image";
import React, { useState } from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import sportsData from "@/data/sports_products.json";

// Define Product and CartItem types
interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  price: number;
}

interface CartItem extends Product {
  quantity: number;
}

function SportsShopPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [cart, setCart] = useState<CartItem[]>([]); // Initialize cart as an array of CartItem
  const [isCartVisible, setCartVisible] = useState(false);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const addToCart = (product: Product) => {
    const existingItem = cart.find((item) => item.id === product.id);
    if (existingItem) {
      const updatedCart = cart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId: number) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
  };

  const updateQuantity = (productId: number, newQuantity: number) => {
    const updatedCart = cart.map((item) =>
      item.id === productId ? { ...item, quantity: newQuantity } : item
    );
    setCart(updatedCart);
  };

  const totalBill = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  const filteredProducts = sportsData.products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCheckout = () => {
    // Implement your checkout logic here, e.g., navigating to a checkout page
    console.log("Proceeding to checkout:", cart);
    // For demonstration, you could redirect to a checkout page or clear the cart
    // Example: history.push("/checkout"); or setCart([]);
  };

  return (
    <div className="min-h-screen bg-black py-12 pt-36 relative">
      <div className="flex justify-center mb-8">
        <input
          type="text"
          placeholder="Search Item"
          value={searchTerm}
          onChange={handleSearchChange}
          className="px-4 py-2 bg-gray-800 text-white placeholder-gray border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500"
        />
      </div>
      <h1 className="text-lg md:text-7xl text-center font-sans font-bold mb-8 text-white">Premium Products ({filteredProducts.length})</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-center">
        {filteredProducts.map((product) => (
          <CardContainer key={product.id} className="w-full sm:w-auto m-4">
            <CardBody className="bg-gray-50 relative group dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto h-auto rounded-xl p-6 border">
              <CardItem translateZ="50" className="text-xl font-bold text-neutral-600 dark:text-white">
                {product.name}
              </CardItem>
              <CardItem as="p" translateZ="60" className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
                {product.description}
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <Image
                  src={product.image}
                  height="400"
                  width="400"
                  className="h-40 sm:h-60 w-full object-cover rounded-xl group-hover:shadow-xl"
                  alt={product.name}
                />
              </CardItem>
              <div className="flex justify-between items-center mt-4">
                <CardItem translateZ="20" as="span" className="text-sm font-normal text-neutral-500 dark:text-white">
                  Price: ${product.price.toFixed(2)}
                </CardItem>
                <div className="flex space-x-4">
                  <div onClick={() => addToCart(product)}>
                  <CardItem translateZ="20" as="button"  className="px-4 py-2 rounded-xl text-xs font-normal text-white bg-blue-500 hover:bg-blue-600">
                    Add to Cart
                  </CardItem>
                  </div>
                  <CardItem translateZ="20" as="button" className="px-4 py-2 rounded-xl text-xs font-bold bg-black text-white hover:bg-gray-800">
                    Buy Now
                  </CardItem>
                </div>
              </div>
            </CardBody>
          </CardContainer>
        ))}
      </div>

      {/* Cart Summary */}
      {isCartVisible && (
        <div className="fixed bottom-0 left-0 right-0 bg-gray-800 text-white p-4 z-50">
          <h2 className="text-lg font-bold">Shopping Cart</h2>
          {cart.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <div>
              {cart.map((item) => (
                <div key={item.id} className="flex items-center justify-between mt-2">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-20 w-20">
                      <Image src={item.image} layout="responsive" width="100" height="100" alt={item.name} />
                    </div>
                    <div className="ml-4">
                      <p className="text-sm">{item.name}</p>
                      <p className="text-sm">Price: ${item.price.toFixed(2)}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="px-2 py-1 bg-blue-500 text-white rounded-md mx-1">-</button>
                    <p className="text-sm">{item.quantity}</p>
                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="px-2 py-1 bg-blue-500 text-white rounded-md mx-1">+</button>
                    <button onClick={() => removeFromCart(item.id)} className="px-2 py-1 bg-red-500 text-white rounded-md mx-1">Remove</button>
                  </div>
                </div>
              ))}
              <hr className="my-2" />
              <p className="font-bold">Total Bill: ${totalBill.toFixed(2)}</p>
              <button onClick={handleCheckout} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">Proceed to Checkout</button>
            </div>
          )}
        </div>
      )}

      {/* Cart Icon */}
      <button
        onClick={() => setCartVisible(!isCartVisible)}
        className="fixed bottom-4 right-4 z-50 bg-blue-500 text-white p-4 rounded-full shadow-lg hover:bg-blue-600"
      >
        {/* Cart SVG Icon */}
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="h-6 w-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l3.4-8H5.4M7 13l-1.4 5h12.8L17 13M7 13h10M9 16h6m-6 0a2 2 0 100 4 2 2 0 000-4m6 0a2 2 0 100 4 2 2 0 000-4" />
        </svg>
        {cart.length > 0 && (
          <div className="absolute top-0 right-0 h-4 w-4 bg-red-500 rounded-full text-white flex items-center justify-center text-xs font-bold">
            {cart.length}
          </div>
        )}
      </button>
    </div>
  );
}

export default SportsShopPage;

