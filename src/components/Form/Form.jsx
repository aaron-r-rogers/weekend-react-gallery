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

        //pass newItem to addItem POST in App.jsx
        addItem(newItem);


    }


    return
}

export default Form;