import { useState, useEffect } from "react";
import { getGifs } from "../services/search";

const INITIAL_PAGE = 0;

const useGifs = function ({ keyword, rating } = { keyword: null }) {
  const [loading, setLoading] = useState(false);
  const [loadingNextPage, setLoadingNextPage] = useState(false);
  const [gifs, setGifs] = useState([]);
  const [page, setPage] = useState(1);

  // recuperamos la keyword del localStorage
  const keywordToUse =
    keyword || localStorage.getItem("lastKeyword") || "trend";

  useEffect(
    function () {
      setLoading(true);

      getGifs({ keyword: keywordToUse, rating }).then((gifs) => {
        setGifs(gifs);
        setLoading(false);
        // guardamos la keyword en el localStorage
        localStorage.setItem("lastKeyword", keyword);
      });
    },
    [keyword, keywordToUse, rating, setGifs]
  );

  useEffect(
    function () {
      if (page === INITIAL_PAGE) return;

      setLoadingNextPage(true);

      getGifs({ keyword: keywordToUse, page, rating }).then((nextGifs) => {
        setGifs((prevGifs) => prevGifs.concat(nextGifs));
        setLoadingNextPage(false);
      });
    },
    [keywordToUse, page, rating, setGifs]
  );

  return [gifs, loading, setPage, loadingNextPage];
};

export default useGifs;
