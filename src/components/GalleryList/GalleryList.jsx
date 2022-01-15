import GalleryItem from "../GalleryItem/GalleryItem";

function GalleryList ({ galleryList }) {
//galleryList is array of objects

    console.log(galleryList);
    return (
    <>
        <div className="container">
            {galleryList.map(image => (
                <GalleryItem
                    key={image.id}
                    image={image}
                />
            ))}
        </div>
    </>
    )
}

export default GalleryList;