// Recipes.js (Updated)
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getRecipesAsync } from "../redux/slices/RecipesSlice";

const Recipes = () => {
  const pizzas = useSelector((state) => state.recipes.pizzas);
  const loading = useSelector((state) => state.recipes.loading);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRecipesAsync());
  }, []);
  return (
    <div className="recipes">
      {loading ? (
        <p>Loading data...</p>
      ) : (
        <>
          {pizzas &&
            pizzas?.recipes?.map((item, index) => {
              return (
                <div key={index} className="each-pizza">
                  <img src={item.image_url} alt="" />
                  <div className="pizza-information">
                    <h5>{item.title}</h5>
                    <p>{item.publisher}</p>
                    <hr />
                    <div className="btns">
                      <Link to={`/recipes/${item.recipe_id}`}>
                        <button className="details">Details</button>
                      </Link>
                      <a
                        href={item.source_url}
                        rel="noreferrer"
                        target="_blank"
                      >
                        {" "}
                        <button className="recipe">Recipe URL</button>{" "}
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
        </>
      )}
    </div>
  );
};

export default Recipes;
