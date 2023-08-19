// import React from 'react'

type Props = {};

export default function About({}: Props) {
  return (
    <main className="space-y-8 text-center py-24 lg:py-32 relative">
      <div className="space-y-6 ">
        <h3 className="text-3xl capitalize font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
          Siplore - Elevate your sip
        </h3>
        <p className="text-gray-800 text-base leading-6 mx-auto max-w-[67ch]">
          Welcome to Siplore, your ultimate destination for exploring the
          captivating world of cocktails. At Siplore, we're passionate about
          mixology and the stories behind every sip.
        </p>
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-y-[40%] -translate-x-[50%] max-w-5xl w-full blur-3xl  h-full -z-10">
        <div className="path w-full h-full bg-yellow-500"></div>
      </div>
    </main>
  );
}
