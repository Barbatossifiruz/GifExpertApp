//* Exporta los gif
export const getGifs = async (category) => {
    const url = `http://api.giphy.com/v1/gifs/search?api_key=R1sgIxnMweToL4LHCuHAkxnRnF2IFTrU&q=${category}&limit=10`;

    const resp = await fetch(url);

    const { data } = await resp.json();

    const gifs = data.map((DataApi) => ({
        id: DataApi.id,
        title: DataApi.title,
        url: DataApi.images.downsized_medium.url,
    }));

    console.log(gifs);
    return gifs;
};
