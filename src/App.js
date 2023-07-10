import "./App.css";
import Home from "./components/Pages/Home";
import Recipe from "./components/Pages/Recipe";
import Login from "./components/Pages/Login";
import Register from "./components/Pages/Register";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
function App() {
  const [user, setUser] = useState(false);

  return (
    <div>
      {user ? (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipe" element={<Recipe />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      )}
    </div>
  );
}

export default App;
