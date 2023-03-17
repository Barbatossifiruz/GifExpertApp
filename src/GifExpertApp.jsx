//* Importar UseState
import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(["One Punch", " Dragon Ball"]);

    const onAddCategory = (newCategory) => {
        if (categories.some((category) => category.toLowerCase() === newCategory.toLowerCase())) {
            return;
        }
        setCategories([newCategory, ...categories]);
    };

    return (
        <>
            {/* Titulo */}

            <h1>GifExpertApp</h1>

            {/* Input */}

            <AddCategory
                // setCategories={setCategories}
                onNewCategory={(value) => onAddCategory(value)}
            />

            {/* Listado de Gif */}

            <ol>
                {categories.map((category) => (
                    <div key={category}>
                        <h3>{category}</h3>
                        <li> {category} </li>
                    </div>
                ))}
            </ol>

            {/* Gif items */}
        </>
    );
};
