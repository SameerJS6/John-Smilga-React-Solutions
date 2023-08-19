// import React from 'react'

import CocktailGrid from "../components/CocktailGrid";
import SearchBar from "../components/SearchBar";

type Props = {};

export default function Home({}: Props) {

  return (
    <main className="max-w-[1440px] mx-auto">
      <SearchBar />
      <CocktailGrid />
    </main>
  );
}
