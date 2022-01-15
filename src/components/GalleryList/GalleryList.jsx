function GalleryList ({ galleryList }) {

    console.log(galleryList);

    return (
    <>
        <div className="container">
            {galleryList.map(image => 
                <p>{image.title}</p>
            )}
        </div>
    </>
    )
}

export default GalleryList;