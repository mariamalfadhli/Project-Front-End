import React from "react";
import Search from "./Search";
import AddRecipe from "./AddRecipe";
import RecipeCard from "./RecipeCard";
import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import { useState } from "react";
import ErrorMsg from "../ErrorMsg";
import { getRecipe, createRecipe } from "../../api/recipe";
import { useNavigate } from "react-router-dom";
import ModalRecipe from "./ModalRecipe";

const Recipe = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["Recipes"],
    queryFn: getRecipe,
  });

  const recipeList = data?.map((recipe) => <RecipeCard recipe={recipe} />);
  const queryClient = useQueryClient();
  const [showModalR, setShowModalR] = useState(false);
  const navigate = useNavigate();
  const [recipeInfo, setRecipeInfo] = useState({});
  const handleRecipe = (e) => {
    setRecipeInfo({ ...recipeInfo, [e.target.name]: e.target.value });
  };

  const { mutate: createRecipeFun, error: errorCreate } = useMutation({
    mutationFn: () => createRecipe(recipeInfo),
    onSuccess: () => {
      queryClient.invalidateQueries(["Recipe"]);
      navigate("/recipe");
      setShowModalR(false);
    },
  });

  const handleCreateRecipe = () => {
    createRecipeFun();
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
        {/*add recipe */}
        <AddRecipe
          onClick={() => {
            setShowModalR(true);
          }}
        />
        <ErrorMsg error={error} />
        <ErrorMsg error={errorCreate} />
      </div>
      {/*recipe list */}
      {recipeList}
      <ModalRecipe
        showModalR={showModalR}
        setShowModalR={setShowModalR}
        handleCategory={handleRecipe}
        handleCreateCategory={handleCreateRecipe}
      />
    </div>
  );
};

export default Recipe;
