import { useState } from "react";


function Form ({ addItem }) {
    const [imageTitle, setImageTitle] = useState('');
    const [imageDescription, setImageDesription] = useState('');
    const [imagePath, setImagePath] = useState('');
    
    const onSubmit = (event) => {
        event.preventDefault();
        //create object with new state
        let newItem = {
            title: imageTitle,
            description: imageDescription,
            path: imagePath
        };

        

    }


    return
}

export default Form;