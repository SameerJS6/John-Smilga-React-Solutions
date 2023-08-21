import Alert from "../components/Alert";
import CocktailGrid from "../components/CocktailGrid";
import SearchBar from "../components/SearchBar";
import { useGlobalContext } from "../context/Context";
import Hero from "./Hero";

type Props = {};

export default function Home({}: Props) {
  const { showAlert } = useGlobalContext();
  return (
    <main className="max-w-[1440px] mx-auto grid place-content-center space-y-24 py-24">
      <Hero />
      <SearchBar />
      <CocktailGrid />
      {showAlert && <Alert />}
    </main>
  );
}
