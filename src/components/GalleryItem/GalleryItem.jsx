import { useState } from 'react';

function GalleryItem ({ image }) {
//image is series of individual objects

    const [isToggled, setIsToggled] = useState(false);

    return (
        //image.path is relative path of each jpg
        //className used to resize in App.css
        <>
            
        {isToggled ? (
            <p 
                onClick={() => setIsToggled(!isToggled)}
                className="child">
                {image.description}        
            </p>
            ) : (
            <img
                onClick={() => setIsToggled(!isToggled)} 
                className="child" 
                src={image.path}
            />
        )}

        </>
    )
}

export default GalleryItem;