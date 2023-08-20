// import React from 'react'

import CocktailGrid from "../components/CocktailGrid";
import SearchBar from "../components/SearchBar";

type Props = {};

export default function Home({}: Props) {

  return (
    <main className="max-w-[1440px] mx-auto grid place-content-center space-y-24 py-24">
      <SearchBar />
      <CocktailGrid />
    </main>
  );
}
