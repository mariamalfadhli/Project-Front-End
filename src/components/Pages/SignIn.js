import { useMutation } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import { signIn, storeToken } from "../../api/auth";
import ErrorMsg from "../ErrorMsg";
import UserContext from "../../context/UserContext";
import { NavLink } from "react-router-dom";

const SignIn = () => {
  const [userInfo, setUserInfo] = useState({});
  const [user, setUser] = useContext(UserContext);
  const { mutate: SignInFun, error } = useMutation({
    mutationFn: () => signIn(userInfo),
    onSuccess: (data) => {
      storeToken(data.token);
      setUser(true);
    },
  });

  const handleChange = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  const handleSignIn = () => {
    SignInFun();
  };

  return (
    <div
      style={{
        displey: "flex",
        flexDirection: "column",
        gap: "10px",
        width: "300px",
      }}
    >
      <input placeholder="email" onChange={handleChange} name="email" />
      <input
        placeholder="Password"
        type="password"
        onChange={handleChange}
        name="password"
      />
      <ErrorMsg error={error} />
      <div>
        <button onClick={handleSignIn}>SignIn</button>
      </div>
      <div>
        <NavLink to="/signup">
          <button className="text-red-600">Don't have account, Signup</button>
        </NavLink>
      </div>
    </div>
  );
};

export default SignIn;
