import React from "react";

const ModalRecipe = ({
  showModalR,
  setShowModalR,
  handleRecipe,
  handleCreateRecipe,
}) => {
  if (!showModalR) return "";
  return (
    <div className="w-[100vw] h-[100vh] inset-0 z-[10] absolute flex justify-center items-center">
      <div
        onClick={() => setShowModalR(false)}
        className=" bg-black w-[100%] h-[100%] opacity-60 absolute"
      ></div>
      <div className="w-[300px] h-[100px] bg-green-900 z-10 rounded-lg relative border">
        <button
          className="border-red-30 border p-1 text-red-300 rounded-md absolute mb-8 right-2 top-2"
          onClick={() => setShowModalR(false)}
        >
          X
        </button>
        <input
          className=" text-green-900 font-serif text-xl mt-5 ml-3 rounded-lg"
          placeholder="Recipe name"
          name="name"
          onChange={handleRecipe}
        />
        <button
          className=" text-yellow-100 font-serif text-xl flex mb-5 ml-3 mt-2 border rounded-lg "
          onClick={handleCreateRecipe}
        >
          Create
        </button>
      </div>
    </div>
  );
};

export default ModalRecipe;
