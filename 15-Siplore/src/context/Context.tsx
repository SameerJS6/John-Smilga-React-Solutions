import axios from "axios";
import {
  useState,
  useContext,
  createContext,
  ReactNode,
  useEffect,
  Dispatch,
} from "react";

// Types
type AppContextType = {
  isLoading: boolean;
  showAlert: boolean;
  setShowAlert: Dispatch<React.SetStateAction<boolean>>;
  cocktails: Cocktail[];
  setSearchTerm: Dispatch<React.SetStateAction<string>>;
};

type AppProviderProp = {
  children: ReactNode;
};

type Cocktail = {
  id: number;
  DrinkName: string;
  Tags: string;
  Category: string;
  Alcoholic: string;
  Instructions: string;
  DrinkImage: string;
};

const CocktailUrl: string =
  "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=";

const AppContext = createContext({} as AppContextType);

const AppProvider = ({ children }: AppProviderProp) => {
  const [isLoading, setIsLoading] = useState(true);
  const [showAlert, setShowAlert] = useState(false);
  const [searchTerm, setSearchTerm] = useState("a");
  const [cocktails, setCocktails] = useState<Cocktail[]>([]);

  const fetchCocktails = async () => {
    try {
      setIsLoading(true);

      const response = await axios.get(`${CocktailUrl}${searchTerm}`);
      const {
        data: { drinks },
      } = response;

      if (drinks) {
        // Destructing the requires property and renaming it for ease-of-use
        const newCocktails = drinks.map((item: any) => {
          const {
            idDrink,
            strDrink,
            strTags,
            strCategory,
            strAlcoholic,
            strInstructions,
            strDrinkThumb,
          } = item;

          return {
            id: parseInt(idDrink),
            DrinkName: strDrink,
            Tags: strTags,
            Category: strCategory,
            Alcoholic: strAlcoholic,
            Instructions: strInstructions,
            DrinkImage: strDrinkThumb,
          };
        });
        setCocktails(newCocktails);
      } else {
        setCocktails([]);
      }

      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCocktails();
  }, [searchTerm]);

  useEffect(() => {
    let timeout = setTimeout(() => {
      setShowAlert(false);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [showAlert]);

  return (
    <AppContext.Provider
      value={{ isLoading, showAlert, cocktails, setSearchTerm, setShowAlert }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = (): AppContextType => {
  return useContext(AppContext);
};

export { AppProvider, useGlobalContext };
