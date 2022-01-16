import { useState } from 'react';
import { Typography, Grid, Button, Card, CardMedia, CardContent } from '@mui/material';

function GalleryItem ({ image, onClickLike }) {
//image is series of individual objects

    const [isToggled, setIsToggled] = useState(false);


    return (
        
        <>
        <Grid item xs={12} sm={6} md={4}>
        <Card
            sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
        >
        {isToggled ? (
            <CardContent sx={{ flexGrow: 1 }}>
            <Typography 
                variant="h6" 
                onClick={() => setIsToggled(!isToggled)}>
                {image.description}        
            </Typography>
            </CardContent>
            ) : (
            <CardMedia
                onClick={() => setIsToggled(!isToggled)}
                sx={{
                    height: 400,
                    pt: '56.25%',
                }}
                //image.path is relative path of each jpg 
                image={image.path}
            />
        )}


        <Button //like button triggers axios PUT
            variant="contained" 
            onClick={() => onClickLike(image.id, {likes: image.likes + 1})} 
            type="button">Like
        </Button>
        
        {image.likes === 0 ? (
            //default state
            <Typography 
                sx={{
                padding: 2
                }}
                variant="h6">No likes yet
            </Typography>
        ) : (
            //image.likes increments
            <Typography
                sx={{
                    padding: 2
                }} 
                variant="h6">Likes: {image.likes}
            </Typography>
        )}
        </Card>
        </Grid>
        </>
    )
}

export default GalleryItem;