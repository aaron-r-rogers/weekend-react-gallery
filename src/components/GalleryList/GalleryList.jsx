import GalleryItem from "../GalleryItem/GalleryItem";

import { Grid, Container } from '@mui/material';

function GalleryList ({ galleryList, onClickLike, deleteItem }) {
//galleryList is array of objects

    console.log(galleryList);
    return (
    <>
    <Container maxWidth="md">
        <Grid container spacing={4} justify="center">
            {galleryList.map(image => (
                <GalleryItem
                    key={image.id}
                    image={image}
                    likes={image.likes}
                    onClickLike={onClickLike}
                    deleteItem={deleteItem}
                />
            ))}
        </Grid>
        </Container>
    </>
    )
}

export default GalleryList;