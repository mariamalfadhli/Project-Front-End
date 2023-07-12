import React from "react";

const AddRecipe = ({ onClick }) => {
  return (
    <div>
      <button onClick={onClick}>add new recipe</button>
    </div>
  );
};

export default AddRecipe;
