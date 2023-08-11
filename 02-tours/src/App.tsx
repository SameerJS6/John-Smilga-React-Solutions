import { useState, useEffect } from "react";
import Cards from "./components/Cards";
import Loading from "./components/Loading";
import Refresh from "./assets/refresh.svg";
import gsap from "gsap";

export interface Tours {
  id: string;
  name: string;
  info: string;
  image: string;
  price: string;
}

export default function App() {
  const [data, setData] = useState<any | string>([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState<boolean>(true);

  const url: string = "https://course-api.com/react-tours-project";

  const RemoveCard = (id: string) => {
    const NewCards = data.filter((tour: Tours) => tour.id !== id);
    setData(NewCards);
  };
  const FetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(
          `This is an HTTP Error: The status is ${response.status}`
        );
      }
      const Result = await response.json();
      setLoading(false);
      setData(Result);
    } catch (err: any) {
      setError(err.message);
      console.log(err);
      setLoading(false);
      setData(null);
    }
  };

  useEffect(() => {
    FetchData();
    gsap.to(".main", { duration: 0, css: { visibility: "visible" } });
  }, []);
  return (
    <>
      <main className="main max-w-[1440px] mx-auto invisible">
        {loading && <Loading />}
        {!loading && (
          <>
            <div className="title w-fit mx-auto">
              <h1
                style={{ "--duration": ` 1000ms` } as React.CSSProperties}
                className="anime text-4xl md:text-5xl p-8 pb-4 font-bold text-center text-blue-900"
              >
                {data.length === 0 ? "No Tours Left, Buddy" : "Our Tours"}
              </h1>
            </div>
            <div
              className={`layout ${
                data.length === 0 ? " " : "grid p-4 md:p-8 lg:py-12"
              } `}
            >
              {data.map((items: Tours) => {
                return (
                  <Cards key={items.id} {...items} removeCard={RemoveCard} />
                );
              })}
            </div>
            <div
              className={`max-w-lg ${
                data.length === 0 ? "scale-in block" : "scale-in hidden"
              }`}
            >
              <img src={Refresh} alt="Refresh Svg" />
            </div>
            <div className="refresh-btn mx-auto grid justify-center">
              <button
                onClick={FetchData}
                className={`gap-2 items-center text-white shadow bg-blue-500 rounded-lg text-xl py-3 px-8 font-bold transition-all duration-500 ease-in-out hover:shadow-xl hover:scale-110 hover:-translate-y-1 mt-4 ${
                  data.length === 0 ? "flex anime" : "anime hidden"
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
                  />
                </svg>
                Refresh
              </button>
            </div>
          </>
        )}
      </main>
    </>
  );
}
