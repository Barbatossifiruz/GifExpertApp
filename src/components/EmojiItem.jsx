export const EmojiItem = ({ title, url }) => {
    return (
        <>
            <div className="w-full">
                <img className="emoji" src={url} alt={title} />
            </div>
        </>
    );
};
