import axios from "axios";
import { API_KEY, API_URL } from "./settings";

const API_SEARCH = `${API_URL}/gifs/search`;

export const getGifs = async ({ keyword, page = 0 }) => {
  const params = {
    api_key: API_KEY,
    q: keyword,
    limit: 10,
    offset: 10 * page,
  };

  return await axios
    .get(API_SEARCH, {
      params: params,
    })
    .then((res) => {
      const data = res.data.data;
      const gifs = data.map((image) => {
        const { images, title, id } = image;
        const { url } = images.downsized_medium;
        return { title, id, url };
      });
      return gifs;
    });
};
