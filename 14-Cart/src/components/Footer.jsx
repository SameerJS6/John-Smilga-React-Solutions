import React from 'react'
import Button from '../Elements/Button';

export default function Footer() {
  return (
    <footer>
      <hr className="m-6 sm:m-8" />
      <div className="flex items-center justify-between px-10 text-lg lg:text-2xl font-medium">
        <p>Total</p>
        <p className="font-bold ">$3000.00</p>
      </div>

      <div className="flex justify-center my-10">
        <Button
          RippleColor="rgb(239 68 68 / 0.3)"
          className="capitalize bg-red-100 px-4 sm:px-6 py-1.5 md:py-2 rounded-lg mx-auto w-fit active:rounded-3xl font-semibold sm:text-lg text-red-500 hover:shadow-md tracking-widest"
        >
          clear cart
        </Button>
      </div>
    </footer>
  );
}
