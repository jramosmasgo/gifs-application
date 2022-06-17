import { Button } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import ListGifs from "../../components/ListGifs";
import useGifs from "../../hooks/useGifs";

function SearchResults() {
  const { keyword } = useParams();
  const [gifs, loading, setPage] = useGifs({ keyword });

  return (
    <div>
      <ListGifs gifs={gifs} />
      <Button
        onClick={() => setPage((prev) => prev + 1)}
        fullWidth
        variant="outlined"
      >
        Cargar mas .....
      </Button>
    </div>
  );
}

export default SearchResults;
