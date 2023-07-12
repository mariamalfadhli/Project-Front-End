import { React, useContext } from "react";
import { signOut, signUp } from "../api/auth";
import UserContext from "../context/UserContext";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [user, setUser] = useContext(UserContext);
  return (
    <div
      className="bg-green-900 text-white font-serif text-[20px]"
      style={{ display: "flex", gap: "50px" }}
    >
      <NavLink to="/">
        <div>Logo</div>
      </NavLink>
      <NavLink to="/">
        <div>Home</div>
      </NavLink>
      <NavLink to="/category">
        <div>Category</div>
      </NavLink>
      <NavLink to="/recipe">
        <div>Recipe</div>
      </NavLink>

      <div
        onClick={() => {
          signOut();
          setUser(false);
        }}
      >
        SignOut
      </div>

      {/* <div
        onClick={() => {
          setUser(false);
          // signUp();
        }}
      >
        SignUp
      </div> */}
    </div>
  );
};

export default Navbar;
