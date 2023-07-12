import React, { useContext } from "react";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { signUp, storeToken } from "../../api/auth";
import ErrorMsg from "../ErrorMsg";
import UserContext from "../../context/UserContext";
import { NavLink } from "react-router-dom";
const SignUp = () => {
  const [userInfo, setUserInfo] = useState({});
  const [user, setUser] = useContext(UserContext);
  const {
    mutate: signInFun,
    isLoading,
    error,
  } = useMutation({
    mutationFn: () => signUp(userInfo),
    onSuccess: (data) => {
      storeToken(data.token);
      setUser(true);
    },
  });

  const handleChange = (e) => {
    if (e.target.files) {
      setUserInfo({ ...userInfo, [e.target.name]: e.target.files[0] });
    } else {
      setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
    }
  };

  const handleSignUp = () => {
    signInFun();
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
      <input placeholder="Email" onChange={handleChange} name="email" />
      <input
        placeholder="Password"
        type="password"
        onChange={handleChange}
        name="password"
      />

      <input
        placeholder="Image"
        type="file"
        multiple
        onChange={handleChange}
        name="image"
      />
      <ErrorMsg error={error} />
      <div>
        <button className="text-blue-600" onClick={handleSignUp}>
          SignUp
        </button>
      </div>
      <div>
        <NavLink to="/signin">
          <button className="text-red-600">Have account?, Signin</button>
        </NavLink>
      </div>
    </div>
  );
};

export default SignUp;
