import { useState, useEffect } from "react";
import { getGifs } from "../services/search";

const INITIAL_PAGE = 1;

const useGifs = function ({ keyword } = { keyword: null }) {
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

      getGifs({ keyword: keywordToUse }).then((gifs) => {
        setGifs(gifs);
        setPage(INITIAL_PAGE);
        setLoading(false);
        // guardamos la keyword en el localStorage
        localStorage.setItem("lastKeyword", keyword);
      });
    },
    [keyword, keywordToUse, setGifs]
  );

  useEffect(
    function () {
      console.log(page);
      if (page === INITIAL_PAGE) return;

      setLoadingNextPage(true);

      getGifs({ keyword: keywordToUse, page }).then((nextGifs) => {
        setGifs((prevGifs) => prevGifs.concat(nextGifs));
        setLoadingNextPage(false);
      });
    },
    [keywordToUse, page, setGifs]
  );

  return [gifs, loading, setPage, loadingNextPage];
};

export default useGifs;
