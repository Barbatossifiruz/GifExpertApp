/*
//! Orden de importaciones
 *1 - React
 *2- Importaciones de terceros
 *3- Nuestro codigo
 *4- Funciones
*/

import { GifItem } from "./GifItem";
import { EmojiItem } from "./EmojiItem";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { Loading } from "./Loading";
import { getEmoji } from "../helpers/getEmoji";
import { useEffect, useState } from "react";

export const GifGrid = ({ category }) => {
    //! Loading
    const { images, isLoading } = useFetchGifs(category);

    //! Emoji
    const [emojis, setEmojis] = useState([]);

    const getEmojis = async () => {
        const newEmojis = await getEmoji(category);
        setEmojis(newEmojis);
    };

    useEffect(() => {
        getEmojis(category);
    }, []);

    return (
        <>
            <div className="flex font-semibold flex-row my-10">
                <h3 className="text-6xl text-white w-full text-end p-4">{category} </h3>
                {emojis.map((emoji) => (
                    <EmojiItem key={emoji.id} title={emoji.title} url={emoji.url} />
                ))}
            </div>

            <Loading isLoading={isLoading} />

            <div className="flex flex-row flex-wrap gap-5 justify-center">
                {images.map((image) => (
                    <GifItem key={image.id} {...image} />
                ))}
            </div>
        </>
    );
};
