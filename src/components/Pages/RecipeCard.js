import React from "react";
import { BASEURL } from "../../api";

const RecipeCard = ({ recipe }) => {
  console.log(recipe);
  return (
    <div className="w-[200px] min-h-[200px] flex flex-col items-center">
      <div>{recipe.name}</div>

      {recipe.categories?.map((category) => {
        return <div>{category.name}</div>;
      })}

      <div>
        <img src={`${BASEURL}/${recipe.recImage}`} height={"200px"} />
      </div>
    </div>
  );
};

export default RecipeCard;
