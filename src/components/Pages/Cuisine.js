import React from "react";

const Cuisine = ({ category }) => {
  return (
    <div className="flex justify-items-center">
      <div className="text-[30px] mt-7 mb-7 text-orange-400 m-10 ">
        <button className=" border border-spacing-1 border-green-900 rounded-md ">
          {category.name}
        </button>
        <div>
          {category.recipes?.map((recipe) => {
            return <div>{recipe.name}</div>;
          })}
        </div>
      </div>
    </div>
  );
};

export default Cuisine;
