import instance from "..";

const getCategory = async () => {
  const res = await instance.get("/category");
  return res.data;
};

const createCategory = async (categoryDetails) => {
  const res = await instance.post("/category", categoryDetails);
  return res.data;
};

export { getCategory, createCategory };
