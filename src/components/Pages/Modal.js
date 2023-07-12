import React from "react";

const Modal = ({
  showModal,
  setShowModal,
  handleCategory,
  handleCreateCategory,
}) => {
  if (!showModal) return "";
  return (
    <div className="w-[100vw] h-[100vh] inset-0 z-[10] absolute flex justify-center items-center">
      <div
        onClick={() => setShowModal(false)}
        className=" bg-black w-[100%] h-[100%] opacity-60 absolute"
      ></div>
      <div className="w-[300px] h-[100px] bg-green-900 z-10 rounded-lg relative border">
        <button
          className="border-red-30 border p-1 text-red-300 rounded-md absolute top-5 right-5"
          onClick={() => setShowModal(false)}
        >
          X
        </button>
        <input
          className=" text-green-900 font-serif text-xl"
          placeholder="Cuisine name"
          name="name"
          onChange={handleCategory}
        />
        <button
          className=" text-yellow-100 font-serif text-xl"
          onClick={handleCreateCategory}
        >
          Create
        </button>
      </div>
    </div>
  );
};

export default Modal;
