import React from "react";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div className="main">
      <div className="main-container">
        <h1>Find Your Recipes</h1>
        <Link to='/recipes'>
          <button>SEARCH RECIPES</button>
        </Link>
      </div>
    </div>
  );
};

export default Main;
