import { useState } from 'react';

function GalleryItem ({ image, onClickLike, likes }) {
//image is series of individual objects

    const [isToggled, setIsToggled] = useState(false);

    return (
        
        <>
            
        {isToggled ? (
            <p 
                onClick={() => setIsToggled(!isToggled)}
                //className used to resize in App.css
                className="child">
                {image.description}        
            </p>
            ) : (
            <img
                onClick={() => setIsToggled(!isToggled)} 
                //className used to resize in App.css
                className="child"
                //image.path is relative path of each jpg 
                src={image.path}
            />
        )}

        <button //like button triggers axios PUT
            onClick={() => onClickLike(image.id)} 
            type="button">Like👍
        </button>
        
        {image.likes === 0 ? (
            //default state
            <p>No likes yet</p>
        ) : (
            //image.likes increments
            <p>Likes: {image.likes}</p>
        )}

        </>
    )
}

export default GalleryItem;