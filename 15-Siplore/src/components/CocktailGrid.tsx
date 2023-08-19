import React from "react";
import { useGlobalContext } from "../context/Context";
import Loader from "./Loader";

type Props = {};

export default function CocktailGrid({}: Props) {
  const { isLoading, cocktails } = useGlobalContext();

  if (isLoading) return <Loader />;
  if (cocktails.length < 1) return <h1>No Cocktail Matches Your Search</h1>;

  return <div>CocktailGrid</div>;
}
