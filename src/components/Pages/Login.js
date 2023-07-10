import { useMutation } from "@tanstack/react-query";
import React, { useState } from "react";
import { login } from "../../api/auth";
import ErrorMsg from "../ErrorMsg";

const Login = () => {
  const [userInfo, setUserInfo] = useState({});
  const { mutate: loginFun, error } = useMutation({
    mutationFn: () => login(userInfo),
  });

  const handleChange = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  const handleLogin = () => {
    loginFun();
  };

  return (
    <div className="">
      <input placeholder="Username" onChange={handleChange} name="username" />
      <input
        placeholder="Password"
        type="password"
        onChange={handleChange}
        name="password"
      />
      <ErrorMsg error={error} />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
