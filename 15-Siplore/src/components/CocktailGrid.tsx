import { useGlobalContext } from "../context/Context";
import Loader from "./Loader";
import CocktailCard from "./CocktailCard";
// import Button from "../Elements/Button";

type Props = {};

export default function CocktailGrid({}: Props) {
  const { isLoading, cocktails, searchTerm } = useGlobalContext();

  if (cocktails.length < 1 && !isLoading)
    return (
      <section className="slide-top space-y-6 grid justify-center">
        <div className="mx-auto">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-7 h-7"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <h1 className="font-medium text-center text-lg sm:text-2xl text-base-content px-4">
          We’re sorry we don’t have cocktails for "
          <span className="text-error">{searchTerm}</span>".
        </h1>
      </section>
    );

  return (
    <section className="space-y-20 p-4 sm:px-6 lg:px-10 xl:px-12">
      {cocktails.length > 0 && (
        <div className="flex items-center justify-between">
          <h1 className=" text-6xl text-left text-base-content slide-top">
            Cocktails
          </h1>

          {/* <div className="dropdown dropdown-left dropdown-bottom">
            <label tabIndex={0} className="btn m-1">
              Sort
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 gap-2 shadow bg-base-100 rounded-box w-52"
            >
              <Button onClick={() => Sorting("Alcoholic")}>
                <div
                  className="border-2 w-fit p-1 ml-3.5 
                      border-error"
                >
                  <div className="w-2 h-2 rounded-full bg-error"></div>
                </div>
                Alcoholic
              </Button>
              <Button onClick={() => Sorting("Non alcoholic")}>
                <div
                  className="border-2 w-fit p-1 ml-3.5 
                      border-success"
                >
                  <div className="w-2 h-2 rounded-full bg-success"></div>
                </div>
                Non Alcoholic
              </Button>
            </ul>
          </div> */}
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
