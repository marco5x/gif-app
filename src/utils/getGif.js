import axios from "axios";

export const getGif = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=kaJ1JwD4CuQgYun7YpTQpTr5p1qs1sQn&q=${category}&limit=12`;

    const resp = await axios.get(url);
    const { data } = await resp.data;

    const gifs = data.map((img) => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url,
    }));

    return gifs;
};
