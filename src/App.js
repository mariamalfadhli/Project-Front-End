import "./App.css";
import Home from "./components/Pages/Home";
import Recipe from "./components/Pages/Recipe";
import SignIn from "./components/Pages/SignIn";
import SignUp from "./components/Pages/SignUp";
import { Navigate, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import UserContext from "./context/UserContext";
import Navbar from "./components/Navbar";
function App() {
  const [user, setUser] = useState(false);
  useEffect(() => {
    if (localStorage.getItem("token")) {
      setUser(true);
    }
  }, []);

  return (
    <div>
      <UserContext.Provider value={[user, setUser]}>
        {user ? (
          <>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/recipe" element={<Recipe />} />
              <Route path="/*" element={<Navigate to="/" />} />
            </Routes>
          </>
        ) : (
          <Routes>
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/*" element={<Navigate to="/signin" />} />
          </Routes>
        )}
      </UserContext.Provider>
    </div>
  );
}

export default App;
