import React from "react";
import Cuisine from "./Cuisine";
import AddCuisine from "./AddCuisine";
import Search from "./Search";
import { useQueryClient, useMutation, useQuery } from "@tanstack/react-query";
import { useState } from "react";
import ErrorMsg from "../ErrorMsg";
import { getCategory, createCategory } from "../../api/category";
import Modal from "./Modal";
import { useNavigate } from "react-router-dom";

const Category = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["Categories"],
    queryFn: getCategory,
  });

  const categoryList = data?.map((category) => <Cuisine category={category} />);
  const queryClient = useQueryClient();
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const [categoryInfo, setCategoryInfo] = useState({});
  const handleCategory = (e) => {
    setCategoryInfo({ ...categoryInfo, [e.target.name]: e.target.value });
  };

  const { mutate: createCategoryFun, error: errorCreate } = useMutation({
    mutationFn: () => createCategory(categoryInfo),
    onSuccess: () => {
      queryClient.invalidateQueries(["Categories"]);
      navigate("/category");
      setShowModal(false);
    },
  });

  const handleCreateCategory = () => {
    createCategoryFun();
  };

  return (
    <div
      className="bg-yellow-100 w-[300vh] h-[300vh]
    text-green-900 font-serif text-xl"
    >
      <div
        style={{
          display: "flex",
          gap: "15px",
        }}
      >
        {/*search bar */}
        <Search />
        {/*add cusine */}
        <AddCuisine
          onClick={() => {
            setShowModal(true);
          }}
        />
      </div>
      <ErrorMsg error={error} />
      <ErrorMsg error={errorCreate} />
      {/*cuisine list */}
      {categoryList}
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        handleCategory={handleCategory}
        handleCreateCategory={handleCreateCategory}
      />
    </div>
  );
};

export default Category;
