import { FormEvent, ChangeEvent, useState } from "react";
import { useGlobalContext } from "../context/Context";
import Button from "../Elements/Button";

type Props = {};

export default function SearchBar({}: Props) {
  const { setSearchTerm } = useGlobalContext();
  const [inputValue, setInputValue] = useState<string>("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearchTerm(inputValue);
  };

  return (
    <div className="mx-auto w-full lg:w-[35rem] max-w-lg px-4">
      <form onSubmit={handleSubmit}>
        <div className="flex border-2 gap-2 py-2 px-2 border-gray-400 rounded-full items-center justify-between">
          <input
            type="text"
            autoFocus
            value={inputValue}
            placeholder="Search Cocktails"
            className="input w-full"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setInputValue(e.target.value)
            }
          />
          <Button className="rounded-3xl bg-base-200 active:bg-neutral-focus active:text-neutral-content">
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
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
             Search
          </Button>
        </div>
      </form>
    </div>
  );
}
// background-color: hsl(var(--n) / var(--tw-bg-opacity));
//     --tw-text-opacity: 1;
//     color: hsl(var(--nc) / var(--tw-text-opacity));