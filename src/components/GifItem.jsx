export const GifItem = ({ title, url, id }) => {

    return (
        <div className="card-item ">
            <img class="w-32 md:w-48 lg:w-96"src={url} alt={title}  />
            <p class="text-xs text-transparent sm:text-xs text-justify md:text-base">{title}</p>
        </div>
    )
}