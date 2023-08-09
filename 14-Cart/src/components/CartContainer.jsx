import React from "react";
import EmptyCart from "./EmptyCart";
import CartItems from "./CartItems";
import Footer from "./Footer";
import { useGlobalContext } from "../context/context";

export default function CartContainer() {
  const { cartItems } = useGlobalContext();

  return (
    <main className="max-w-4xl mx-auto py-16 md:pb-4 md:py-16 px-4">
      {cartItems.length >= 1 && (
        <header className="text-4xl sm:text-5xl font-medium capitalize text-purple-900 text-center mb-6 sm:mb-8">
          your cart
        </header>
      )}

      {cartItems.length === 0 && <EmptyCart />}

      {cartItems.length >= 1 &&
        cartItems.map((item) => {
          return <CartItems key={item.id} {...item} />;
        })}

      {cartItems.length >= 1 && <Footer />}
    </main>
  );
}
