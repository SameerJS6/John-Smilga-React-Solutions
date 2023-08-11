import { useState } from "react";
import Buttons from "./components/Buttons";
import Menus from "./components/Menus";
import Data from "./data";

// Step 1: To Map all the data and get only categories
// Step 2 : Use new Set to take only unique value or in this case category
// Step 3: Store it in a array
// Step 4: Add 'All' category in that array manualy and then destructure the whole new Set

interface DataCheck {
  id: number;
  title: string;
  category: string;
  price: number;
  img: string;
  desc: string;
}

const allCategories = [
  "all",
  ...new Set(Data.map((items: DataCheck) => items.category)),
];
console.log(allCategories);

export default function App() {
  const [menu, setMenu] = useState(Data);
  const [categories, setCategories] = useState(allCategories);

  const filterCategory = (category: string): void => {
    if (category === "all") {
      setMenu(Data);
      return;
    }
    const newMenu = Data.filter(
      (item: DataCheck) => item.category === category
    );
    setMenu(newMenu);
  };
  return (
    <>
      <main className="max-w-[1440px] mx-auto p-2">
        <div>
          <header className="main-heading slide-in | flex items-end w-full overflow-hidden rounded-3xl min-h-[45vh] md:min-h-[52vh]">
            <div className="p-6 lg:p-8 z-[1]">
              <h1 className="tracking-in | leading-none text-yellow-50 text-[55px] md:text-[88px] lg:text-[112px]">
                Our Menu
              </h1>
            </div>
          </header>
          <Buttons filter={filterCategory} category={categories} />
          <Menus menu={menu} />
        </div>
      </main>
    </>
  );
}
