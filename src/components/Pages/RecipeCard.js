import React from "react";

const RecipeCard = ({ recipe }) => {
  return (
    <div>
      <div>{recipe.name}</div>
      <div>{recipe.recImage}</div>
      <div>{recipe.categories}</div>
    </div>
  );
};

export default RecipeCard;
