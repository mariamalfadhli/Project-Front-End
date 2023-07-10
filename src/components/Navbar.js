import { React, useContext } from "react";
import { signOut } from "../api/auth";
import UserContext from "../context/UserContext";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [user, setUser] = useContext(UserContext);
  return (
    <div>
      <NavLink to="/">
        <div>Logo</div>
        <div>Home</div>
      </NavLink>
      <NavLink to="/Category">
        <div>Category</div>
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
