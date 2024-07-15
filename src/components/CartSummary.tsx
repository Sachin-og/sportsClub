// Example of displaying cart summary in another component
import React from "react";
import { useCart } from "@/context/CartContext";

const CartSummary = () => {
  const { cart } = useCart();

  return (
    <div>
      <h2>Cart Summary</h2>
      <p>Total Items: {cart.length}</p>
      <ul>
        {cart.map((item) => (
          <li key={item.product.id}>
            {item.product.name} - Quantity: {item.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CartSummary;
