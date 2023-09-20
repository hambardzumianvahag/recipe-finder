// Layout.js
import React from "react";
import Header from "./Header";
import Main from "./Main";
import { Route, Routes } from "react-router-dom";
import Recipes from "./Recipes";
import EachPizza from "./EachPizza"; // Import EachPizza component

const Layout = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/recipe-finder" element={<Main />} />
        <Route path="/recipe-finder/recipes" element={<Recipes />} />
        <Route path="/recipe-finder/recipes/:recipeId" element={<EachPizza />} /> {/* Add route for EachPizza */}
      </Routes>
    </div>
  );
};

export default Layout;
