import React from "react";
import { useParams } from "react-router-dom";
import ListGifs from "../../components/ListGifs";
import useGifs from "../../hooks/useGifs";

function SearchResults() {
  const { keyword } = useParams();
  const [gifs, loading] = useGifs({ keyword });

  return (
    <div>
      <ListGifs gifs={gifs} />
    </div>
  );
}

export default SearchResults;
