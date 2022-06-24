import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import ListGifs from "../../components/ListGifs";
import useGifs from "../../hooks/useGifs";
import { disable, enable } from "../../redux/slices/loading/loadingSlice";

function SearchResults() {
  const { keyword } = useParams();
  const dispatch = useDispatch();
  const [gifs, loading, setPage, loadingNextPage] = useGifs({ keyword });

  useEffect(() => {
    if (loading || loadingNextPage) {
      dispatch(enable());
    } else {
      dispatch(disable());
    }
  }, [loading, loadingNextPage, dispatch]);

  return (
    <div>
      <Box width="90vw" margin="0 auto">
        <Typography
          color="primary"
          variant="h5"
          style={{ margin: "40px 0" }}
          fontWeight={500}
        >
          Resultados para: {keyword}
        </Typography>
      </Box>
      <ListGifs gifs={gifs} />
      <Box width="90vw" height="70px" margin="30px auto 0 auto">
        <Button
          fullWidth
          onClick={() => setPage((prev) => prev + 1)}
          variant="outlined"
        >
          Cargar mas .....
        </Button>
      </Box>
    </div>
  );
}

export default SearchResults;
