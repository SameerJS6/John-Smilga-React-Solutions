import BlurPattern from "../components/BlurPattern";
import RandomCocktail from "./RandomCocktail";

export default function Hero() {
  return (
    <div className="bg-base-100">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <BlurPattern
          containerClassName="-top-40 sm:-top-80"
          elementClassName="left-[calc(50%-11rem)] bg-gradient-to-tr from-secondary to-primary sm:left-[calc(50%-30rem)]"
          clipingPath="polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
        />
        <div className="mx-auto max-w-2xl">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-neutral sm:text-6xl">
              Explore Mixology's Essence
            </h1>
            <p className="mt-6 text-lg leading-8 text-neutral text-opacity-50">
              Indulge in a captivating journey of flavors and tales with
              Siplore. Discover the origins, ingredients, and stories behind
              your favorite cocktails.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <RandomCocktail />
            </div>
          </div>
        </div>

        <BlurPattern
          containerClassName="top-[calc(100%-13rem)] sm:top-[calc(100%-30rem)]"
          elementClassName="left-[calc(50%+3rem)] bg-gradient-to-tr from-accent to-secondary sm:left-[calc(50%+36rem)]"
          clipingPath="polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
        />
      </div>
    </div>
  );
}
