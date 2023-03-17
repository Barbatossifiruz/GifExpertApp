import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
    const [inputValue, setInputValue] = useState("");

    //! Validacion to lower case
    const search = inputValue.toLowerCase();

    //! Capitalizer

    //* V1 solo en mayuscula la primera letra
    // const CapFirsLetter = (str) => {
    //     return str.charAt(0).toUpperCase() + str.slice(1);
    // };

    //* V2 Capitalizar con RegEx
    const TittleRegEx = inputValue.replace(/(^\w{1})|(\s+\w{1})/g, (letra) => letra.toUpperCase());

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

        //!Muestra el resultado Capitalizado
        onNewCategory(TittleRegEx);
    };

    return (
        <>
            <form onSubmit={onSubmit}>
                <input type="text" placeholder="Buscar Gif" value={inputValue} onChange={onInputChange} />
            </form>
        </>
    );
};
