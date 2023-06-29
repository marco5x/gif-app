import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";
import { Footer } from "./components/Footer";
import { AiOutlineFileGif } from "react-icons/ai";

const App = () => {
    const [gif, setGif] = useState(["Messi"]);
    const onAddCategory = (newCategory) => {
        if (gif.includes(newCategory)) return;
        setGif([newCategory]);
    };

    return (
        <div className="flex flex-col justify-center m-0 p-0">
            <h1 className="animate-pulse mt-8 ml-8 text-6xl text-sky-500 font-bold ">GIF APP</h1>
            <h3 className="flex justify-items-center ml-8 text-xl text-gray-400 font-semibold ">
                <AiOutlineFileGif className="mt-1 mr-1" /> Busca tu gif favorito
            </h3>
            <AddCategory onNewCategory={(value) => onAddCategory(value)} />
            {!gif ? (
                <h2>Error en el servidor</h2>
            ) : (
                gif.map((img) => <GifGrid key={img} category={img} />)
            )}
            <Footer />
        </div>
    );
};

export default App;
