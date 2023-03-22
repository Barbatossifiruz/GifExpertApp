/*
//! Orden de importaciones
 *1 - React
 *2- Importaciones de terceros
 *3- Nuestro codigo
 *4- Funciones
*/

import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { Loading } from "./Loading";

export const GifGrid = ({ category }) => {
    //! Loading
    const { images, isLoading } = useFetchGifs(category);

    return (
        <>
            <h3>{category}</h3>
            <Loading isLoading={isLoading} />

            <div className="card-grid">
                {images.map((image) => (
                    <GifItem key={image.id} {...image} />
                ))}
            </div>
        </>
    );
};
