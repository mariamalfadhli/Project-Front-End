import instance from "..";

const getRecipe = async () => {
  const res = await instance.get("/recipe");
  return res.data;
};

const createRecipe = async (recipeDetails) => {
  const res = await instance.post("/recipe", recipeDetails);
  return res.data;
};

export { getRecipe, createRecipe };
