import axios from "axios";

export const getGif = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
    category
  )}&limit=12&api_key=YpeEcBf4dKxVzjN9WMIV2br8mzN4OWEI`;

  const resp = await axios.get(url);
  const { data } = await resp.data;

  const gifs = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url,
  }));

  return gifs;
};
