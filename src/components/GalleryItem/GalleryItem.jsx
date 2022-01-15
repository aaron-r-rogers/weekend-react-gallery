function GalleryItem ({ image }) {
//image is series of individual objects

    return (
        //image.path is relative path of each jpg
        //className used to resize in App.css
        <>
            <img className="child" src={image.path}/>
        </>
    )
}

export default GalleryItem;