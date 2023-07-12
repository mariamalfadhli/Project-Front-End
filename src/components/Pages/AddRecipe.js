import React from "react";

const AddRecipe = ({ onClick }) => {
  return (
    <div className="border border-green-900 rounded-sm mt-3">
      <button onClick={onClick}>add new recipe</button>
    </div>
  );
};

export default AddRecipe;
