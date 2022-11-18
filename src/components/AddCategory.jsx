import { useState } from 'react';
import { BiSearchAlt } from "react-icons/bi"
 

export const AddCategory = ({ onNewCategory }) => {

    const [ input, setInput ] = useState("");

    const onInputChange = (event) => {
        setInput( event.target.value );
    }

    const onSubmit = ( event ) => {
        event.preventDefault();
        if( input.trim().length <= 1) return;
        setInput("");
        onNewCategory( input.trim() );
    }

    return (
        <form onSubmit={ onSubmit } className="flex justify-center justify-items-center my-8">
            <input
                className="p-2 rounded border-4 border-blue-500/50  bg-white w-8/12 hover:ring-1 ring-sky-500"
                type="text"
                placeholder="Buscar gifs"
                value={ input }
                onChange={ onInputChange }
            /> 
            <button className='btn-primary' type="submit" ><BiSearchAlt /></button>
        </form>
    )
}