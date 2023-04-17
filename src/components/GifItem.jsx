import propTypes from "prop-types";

export const GifItem = ({ title, url }) => {
    return (
        <>
            <div className="max-w-sm bg-white border-gray-200 rounded-lg   dark:bg-[#1f1f1f] drop-shadow-xl ">
                <img className="rounded-t-lg " src={url} alt={title} />
                <h5 className="font-bold text-md text-center text-white p-2">{title}</h5>
            </div>
        </>
    );
};

GifItem.propTypes = {
    title: propTypes.string.isRequired,
    url: propTypes.string.isRequired,
};
