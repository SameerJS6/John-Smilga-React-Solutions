import Ripples from "react-ripples";

export default function Buttons({ filter, category }: void | any) {
  return (
    <div className="my-8 md:my-12 xl:my-16">
      <div className="flex flex-wrap gap-3 px-4 items-center justify-center">
        {category.map((item: string[], index: number) => {
          return (
            <Ripples color="rgb(253, 224, 71)" during={1200}>
              <button
                key={index}
                onClick={() => filter(item)}
                className="slide-in | rounded-[48px] px-4 py-2 capitalize font-medium md:text-lg text-slate-800 bg-yellow-100 transition-all duration-300 hover:bg-yellow-200 hover:shadow active:rounded-xl bg-yellow"
              >
                {item}
              </button>
            </Ripples>
          );
        })}
      </div>
    </div>
  );
}
