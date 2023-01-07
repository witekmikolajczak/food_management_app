import { useState } from "react";

export const useAddRecipe = () => {
  const [recipes, setRecipes] = useState<ReciptInterface[]>([]);

  function handleSaveUrl() {
   console.log('save url')
  }
  function handleSaveRecipes() {
   console.log('save recipes')
  }
  return {
    recipes,
    setRecipes,
    handleSaveRecipes,
    handleSaveUrl,
  };
};
