import instance from "..";

const signIn = async (userInfo) => {
  const res = await instance.post("/user/signin", userInfo);
  return res.data;
};

const signUp = async (userInfo) => {
  const formData = new FormData();

  for (const key in userInfo) {
    formData.append(key, userInfo[key]);
  }

  const res = await instance.post("/user/signup", formData);
  return res.data;
};

const storeToken = (token) => {
  localStorage.setItem("token", token);
};

const signOut = () => {
  localStorage.removeItem("token");
};
export { signIn, signUp, storeToken, signOut };
