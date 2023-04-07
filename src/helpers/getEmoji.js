//* Get Emoji from API

export const getEmoji = async (category) => {
    const url = `https://api.giphy.com/v1/stickers/search?api_key=R1sgIxnMweToL4LHCuHAkxnRnF2IFTrU&q=${category}&limit=1`;

    const resp = await fetch(url);

    const { data } = await resp.json();

    const emoji = data.map((EmojiDataApi) => ({
        id: EmojiDataApi.id,
        title: EmojiDataApi.title,
        url: EmojiDataApi.images.fixed_height_small.url,
        img: EmojiDataApi.images.original.mp4,
    }));

    return emoji;
};
