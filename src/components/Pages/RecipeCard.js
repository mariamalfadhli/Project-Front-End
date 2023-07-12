import React from "react";
import { BASEURL } from "../../api";

const RecipeCard = ({ recipe }) => {
  console.log(recipe);
  return (
    <div className="max-w-[200px] min-h-[200px] m-10 text-[30px] flex flex-col justify-center rounded-lg">
      <div>{recipe.name}</div>

      {recipe.categories?.map((category) => {
        return <div>{category.name}</div>;
      })}

      <div>
        <img
          className=" rounded-lg object-fill"
          src={`${BASEURL}/${recipe.recImage}`}
          height={"200px"}
        />
      </div>
    </div>
  );
};

export default RecipeCard;
