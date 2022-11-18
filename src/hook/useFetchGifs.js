import { useEffect, useState } from "react";
import { getGif } from "../utils/getGif";

export const useFetchGifs = (category) => {
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getImages = async () => {
        const newImages = await getGif(category);
        setImages(newImages);
        setIsLoading(false);
    };

    useEffect(() => {
        getImages();
    }, []);

    return {
        images,
        isLoading,
    };
};
