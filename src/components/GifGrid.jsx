import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hook/useFetchGifs";

export const GifGrid = ({ category }) => {
  const { images, isLoading } = useFetchGifs(category);

  return (
    <>
      <h3 className="text-center text-inherit text-2xl font-bold uppercase text-slate-400 hover:text-slate-500">
        # {category}
      </h3>
      {isLoading && <div className="mt-10 animate-pulse text-center text-2xl delay-100 duration-150">😁 Espere por favor...</div>}
      <div className="mx-4 grid grid-cols-1 md:grid grid-cols-2 sm:grid-cols-3">
        {images.length === 0 ? (
          <p className="flex w-full text-xl text-bold mt-16 ml-16 mb-96" >
            Upss!! 🤦🏻‍♂️
            Intenta buscar con otro significado
            </p>
        ) : (
          images.map((image) => <GifItem key={image.id} {...image} />)
        )}
      </div>
    </>
  );
};
