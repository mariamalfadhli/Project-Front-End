import React from "react";

const AddCuisine = ({ onClick }) => {
  return (
    <div className="border border-green-900 rounded-sm mt-3">
      <button onClick={onClick}>add new cusine</button>
    </div>
  );
};

export default AddCuisine;
