import { useGlobalContext } from "../context/Context";
import Loader from "./Loader";
import CocktailCard from "./CocktailCard";

type Props = {};

export default function CocktailGrid({}: Props) {
  const { isLoading, cocktails } = useGlobalContext();

  if (isLoading) return <Loader />;
  if (cocktails.length < 1)
    return (
      <h1 className="tracking-in font-medium text-center text-2xl sm:text-3xl lg:text-4xl xl:text-5xl px-4 text-error">
        No Cocktail Matches Your Search
      </h1>
    );

  return (
    <section className="space-y-20 p-4 sm:px-6 lg:px-10 xl:px-12">
      <div className="text-5xl font-medium text-center tracking-in">
        <h1>Cocktails</h1>
      </div>
      <div className="grid gap-4 gap-y-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
        {cocktails.map((drink) => {
          return <CocktailCard key={drink.id} {...drink} />;
        })}
      </div>
    </section>
  );
}
