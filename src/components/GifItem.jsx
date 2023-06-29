export const GifItem = ({ title, url, id }) => {

    return (
        <div className="card-item ">
            <img className="w-32 md:w-48 lg:w-96"src={url} alt={title}  />
            <p className="text-xs text-transparent sm:text-xs text-justify md:text-base">{title}</p>
        </div>
    )
}