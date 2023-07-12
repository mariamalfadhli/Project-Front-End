import React from "react";

const Cuisine = ({ category }) => {
  return (
    <div>
      <div>{category.name}</div>
      <div>
        {category.recipes?.map((recipe) => {
          return <div>{recipe.name}</div>;
        })}
      </div>
    </div>
  );
};

export default Cuisine;
