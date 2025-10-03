import { useState } from 'react';
import { useRecipeStore } from './recipe-store'

const AddRecipeForm = () => {
    const addRecipe = useRecipeStore(state => state.addRecipe);

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        addRecipe({ id: Date.now(), title, description});
        setTitle('');
        setDescription('');
    };

    return (
        <form onSubmit= { handleSubmit}>
            <input 
            type= 'text'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            palceholder='Description'
            />
            <button type='submit'>Add Recipe</button>

        </form>
    );

};
export default AddRecipeForm;