import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hook/useFetchGifs";

export const GifGrid = ({ category }) => {
  const { images, isLoading } = useFetchGifs(category);

  return (
    <>
      <h3 className="text-center text-inherit text-2xl font-bold uppercase text-slate-400 hover:text-slate-500">
        # {category}
      </h3>
      {isLoading && (
        <div className="mt-10 animate-pulse text-center text-2xl delay-100 duration-150">
          😁 Espere por favor...
        </div>
      )}
      <div className="mx-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mb-24 place-items-center">
        {images.length === 0 ? (
          <p className="w-[90vw] h-[90vh] flex place-items-center place-content-center text-center text-xl text-bold ">
            Upss!! 🤦🏻‍♂️ Intenta buscar con otro significado
          </p>
        ) : (
          images.map((image) => <GifItem key={image.id} {...image} />)
        )}
      </div>
    </>
  );
};
