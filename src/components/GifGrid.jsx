import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hook/useFetchGifs";

export const GifGrid = ({ category }) => {
    const { images, isLoading } = useFetchGifs(category);

    return (
        <>
            <h3 className="text-center text-inherit text-2xl font-bold uppercase text-slate-400 hover:text-slate-500">#{" "}{category}</h3>
            {isLoading && <h2>Cargando...</h2>}
            <div className="mx-4 grid grid-cols-1 md:grid grid-cols-2 sm:grid-cols-3">
                {images.map((image) => (
                    <GifItem key={image.id} {...image} />
                ))}
            </div>
        </>
    );
};
