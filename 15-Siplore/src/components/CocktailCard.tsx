import Tooltip from "../Elements/Tooltip";
import CustomLink from "../Elements/CustomLink";

type CocktailCardProps = {
  id: number;
  DrinkName: string;
  Alcoholic: string;
  DrinkImage: string;
  Instructions: string;
  Category: string;
};

export default function CocktailCard({
  id,
  DrinkImage,
  DrinkName,
  Alcoholic,
  Category,
}: CocktailCardProps) {
  return (
    <article className="slide-top card w-full bg-base-200 shadow-xl rounded-3xl active:rounded-[2.5rem] active:scale-[99%] active:-translate-y-1 transition-all">
      <figure>
        <img
          src={DrinkImage}
          className="aspect-video object-cover"
          alt={DrinkName + " Image"}
        />
      </figure>
      <div className="card-body gap-2 max-[350px]:p-3">
        <div className="flex justify-between items-center gap-4">
          <div className="space-y-2">
            <h2 className="card-title text-2xl xl:text-3xl ">{DrinkName}</h2>
            <p className="text-sm rounded-full bg-base-300 px-2 tracking-wide font-medium w-fit -ml-0.5">
              {Category}
            </p>
          </div>
          <Tooltip
            className="tooltip-left sm:tooltip-top"
            toolTipText={Alcoholic}
          >
            <div
              className={`border-2 w-fit p-1 ${
                Alcoholic === "Alcoholic" ? "border-error" : "border-success"
              }`}
            >
              <div
                className={`w-2 h-2  rounded-full ${
                  Alcoholic === "Alcoholic" ? "bg-error" : "bg-success"
                }`}
              ></div>
            </div>
          </Tooltip>
        </div>
        {/* <p>{Instructions}</p> */}
        <div className="card-actions justify-start mt-2">
          <CustomLink
            className="capitalize rounded-3xl bg-neutral-focus text-neutral-content text-base hover:bg-neutral active:rounded-lg transition-all btn-wide mx-auto"
            pathTo={`/cocktail/${id}`}
          >
            Click Me
          </CustomLink>
        </div>
      </div>
    </article>
  );
}
