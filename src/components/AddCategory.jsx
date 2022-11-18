import { useState } from 'react';

export const AddCategory = ({ onNewCategory }) => {

    const [ input, setInput ] = useState('');

    const onInputChange = ({ target }) => {
        setInput( target.value );
    }

    const onSubmit = ( event ) => {
        event.preventDefault();
        if( input.trim().length <= 1) return;
        setInput("");
        onNewCategory( input.trim() );
    }

    return (
        <form onSubmit={ onSubmit }>
            <input 
                type="text"
                placeholder="Buscar gifs"
                value={ input }
                onChange={ onInputChange }
            />
        </form>
    )
}