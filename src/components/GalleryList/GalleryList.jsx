import GalleryItem from "../GalleryItem/GalleryItem";

function GalleryList ({ galleryList, onClickLike}) {
//galleryList is array of objects

    console.log(galleryList);
    return (
    <>
        <div className="container">
            {galleryList.map(image => (
                <GalleryItem
                    key={image.id}
                    image={image}
                    likes={image.likes}
                    onClickLike={onClickLike}
                />
            ))}
        </div>
    </>
    )
}

export default GalleryList;