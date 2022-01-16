import { useState } from "react";
import { TextField, Typography, Container, CssBaseline, Box, Button } from '@mui/material';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';


function Form ({ addItem }) {
    const [imageTitle, setImageTitle] = useState('');
    const [imageDescription, setImageDescription] = useState('');
    const [imagePath, setImagePath] = useState('');
    
    const onSubmit = (event) => {
        event.preventDefault();
        //create object with new state
        let newItem = {
            title: imageTitle,
            description: imageDescription,
            path: imagePath
        };

        //pass newItem to addItem POST in App.jsx
        addItem(newItem);
        console.log('newItem in form is:', newItem)
        console.log('imageTitle is:', imageTitle);

        //empty input fields
        setImageTitle('');
        setImageDescription('');
        setImagePath('');

    }

    return (
    <Container component="main" maxWidth="xs">
    <CssBaseline />
    <Box
        sx={{
        marginTop: 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    }}
    >
        <Typography variant="h4">Add an image:</Typography>
        <Box component="form" onSubmit={onSubmit} noValidate sx={{ mt: 1 }}>
        <TextField 
            label="Title" 
            variant="outlined" 
            margin="normal"
            autoFocus
            fullWidth
            required
            onChange={(event) => setImageTitle(event.target.value)}
        />
        <TextField 
            label="Description" 
            variant="outlined"
            margin="normal"
            fullWidth
            required
            onChange={(event) => setImageDescription(event.target.value)} 
        />
        <TextField 
            label="Path" 
            variant="outlined"
            margin="normal"
            fullWidth  
            required
            onChange={(event) => setImagePath(event.target.value)} 
        />
        <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
        >
            Submit <PhotoCameraIcon />
        </Button>
        </Box>
    </Box>
    </Container>
    )
}

export default Form;