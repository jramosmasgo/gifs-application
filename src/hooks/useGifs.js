import { useState, useEffect } from "react";
import { getGifs } from "../services/search";

const INITIAL_PAGE = 1;

const useGifs = ({ keyword } = { keyword: null }) => {
  const [loading, setLoading] = useState(false);
  const [loadingNextPage, setLoadingNextPage] = useState(false);
  const [gifs, setGifs] = useState([]);
  const [page, setPage] = useState(1);

  // recuperamos la keyword del localStorage
  const keywordToUse =
    keyword || localStorage.getItem("lastKeyword") || "trend";

  useEffect(() => {
    setLoading(true);

    getGifs({ keyword: keywordToUse }).then((gifsGet) => {
      setGifs(gifsGet);
      setPage(INITIAL_PAGE);
      setLoading(false);
      // guardamos la keyword en el localStorage
      localStorage.setItem("lastKeyword", keyword);
    });
  }, [keyword, keywordToUse, setGifs]);

  useEffect(() => {
    if (page === INITIAL_PAGE) return;

    setLoadingNextPage(true);

    getGifs({ keyword: keywordToUse, page }).then((nextGifs) => {
      setGifs((prevGifs) => prevGifs.concat(nextGifs));
      setLoadingNextPage(false);
    });
  }, [keywordToUse, page, setGifs]);

  return [gifs, loading, setPage, loadingNextPage];
};

export default useGifs;
