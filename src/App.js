import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

const App = () => {
    const [gif, setGif] = useState(["Messi"]);

    const onAddCategory = (newCategory) => {
        if (gif.includes(newCategory)) return;
        setGif([newCategory]);
    };

    return (
        <div className="flex flex-col justify center m-5">
            <h1>GIF APP</h1>
            <h3>Busca tu gif favorito</h3>
            <AddCategory onNewCategory={(value) => onAddCategory(value)} />
            {gif && gif.map((img) => <GifGrid key={img} category={img} />)}
        </div>
    );
};

export default App;
