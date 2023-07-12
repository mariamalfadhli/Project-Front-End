import { React, useContext } from "react";
import { signOut } from "../api/auth";
import UserContext from "../context/UserContext";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [user, setUser] = useContext(UserContext);
  return (
    <div
      className="bg-green-900 text-white font-serif"
      style={{ display: "flex", gap: "15px" }}
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
    </div>
  );
};

export default Navbar;
