//* Importarciones
import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

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
            {categories.map((category) => (
                <GifGrid key={category} category={category} />
            ))}

            {/* Gif items */}
        </>
    );
};
