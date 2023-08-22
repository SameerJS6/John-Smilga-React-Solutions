import { useGlobalContext } from "../context/Context";
import Loader from "./Loader";
import CocktailCard from "./CocktailCard";

type Props = {};

export default function CocktailGrid({}: Props) {
  const { isLoading, cocktails } = useGlobalContext();

  if (cocktails.length < 1 && !isLoading)
    return (
      <h1 className="tracking-in font-medium text-center text-2xl text-error sm:text-3xl lg:text-4xl xl:text-5xl px-4">
        No Cocktail Matches Your Search
      </h1>
    );

  return (
    <section className="space-y-20 p-4 sm:px-6 lg:px-10 xl:px-12">
      {cocktails.length > 0 && (
        <div className="flex items-center justify-between">
          <h1 className=" text-6xl text-left text-neutral tracking-in">
            Cocktails
          </h1>
        </div>
      )}

      {isLoading && <Loader LoaderType="loading-dots" />}

      {!isLoading && (
        <div className="grid gap-4 gap-y-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
          {cocktails.map((drink) => {
            return <CocktailCard key={drink.id} {...drink} />;
          })}
        </div>
      )}
    </section>
  );
}
