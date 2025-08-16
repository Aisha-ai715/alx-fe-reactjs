import { useState } from 'react';
import { useRecipeStore } from './recipeStore'; // adjust if your store path is different

const EditRecipeForm = ({ recipe, onFinish }) => {
  const updateRecipe = useRecipeStore((state) => state.updateRecipe);

  const [title, setTitle] = useState(recipe.title);
  const [description, setDescription] = useState(recipe.description);

  const handleSubmit = (event) => {
    event.preventDefault(); // ✅ Required to prevent page reload

    updateRecipe({ ...recipe, title, description });
    onFinish(); // Signal to parent to exit editing mode
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Edit Recipe</h2>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <br />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <br />
      <button type="submit">Save</button>
      <button type="button" onClick={onFinish}>
        Cancel
      </button>
    </form>
  );
};

export default EditRecipeForm;
