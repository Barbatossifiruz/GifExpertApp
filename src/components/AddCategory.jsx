import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
    const [inputValue, setInputValue] = useState("");

    //! Validacion to lower case
    const search = inputValue.toLowerCase();

    //! Constante en cambio (Buscador)
    const onInputChange = ({ target }) => {
        setInputValue(target.value);
    };

    //! Informacion de (Buscador)
    const onSubmit = (event) => {
        //! Validacion en Buscador
        event.preventDefault();
        if (search.trim().length <= 1) return;

        setInputValue("");
        onNewCategory(search.trim());
    };

    return (
        <>
            <form onSubmit={onSubmit}>
                <input type="text" placeholder="Buscar Gif" value={inputValue} onChange={onInputChange} />;
            </form>
        </>
    );
};
