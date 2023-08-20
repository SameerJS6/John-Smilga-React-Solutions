import { useParams } from "react-router-dom";

type Props = {};

export default function CocktailPage({}: Props) {
  const {id} = useParams()
  return <div>CocktailPage {id}</div>;
}

// This page will show the deails of single Cocktails
