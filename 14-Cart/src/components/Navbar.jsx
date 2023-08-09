import { useGlobalContext } from "../context/context";

export default function Navbar() {
  const {amount} = useGlobalContext()
  return (
    <nav className="flex items-center justify-between bg-purple-600 py-4 px-8 sm:px-10 md:px-12 lg:px-16 xl:px:24">
      <div>
        <h1 className="font-semibold text-2xl sm:text-3xl text-white">
          UseReducer
        </h1>
      </div>
      <div className="relative">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="white"
          className="w-7 h-7 md:w-8 md:h-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
          />
        </svg>

        <div className="absolute left-3 -top-2.5 md:-top-3 bg-white rounded-full font-medium px-2 md:text-lg">
          <p>{amount}</p>
        </div>
      </div>
    </nav>
  );
}
