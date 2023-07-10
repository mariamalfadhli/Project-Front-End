import instance from "..";

const login = async (userInfo) => {
  const res = await instance.post("/user/signin", userInfo);
  return res.data;
};

export { login };
