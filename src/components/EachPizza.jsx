// EachPizza.js (New Component)
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const EachPizza = () => {
  const { recipeId } = useParams();
  const [pizzaDetails, setPizzaDetails] = useState({});
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const fetchPizzaDetails = async () => {
      try {
        const response = await fetch(
          `https://forkify-api.herokuapp.com/api/get?rId=${recipeId}`
        );
        const result = await response.json();
        setPizzaDetails(result.recipe);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching pizza details: ", error);
        setLoading(false);
      }
    };

    fetchPizzaDetails();
  }, [recipeId]);

  return (
    <div className="pizza-recipe">
     <Link to='/recipe-finder/recipes'> <button>Back to main</button></Link>
      <div className="each-pizza-recipe">
      {loading ? (
        <p>Loading pizza details...</p>
      ) : (
        <>
        <div className="pizza-container">
          <img src={pizzaDetails.image_url} alt="" />
          <div className="pizza-information">
            <h5>{pizzaDetails.title}</h5>
            <p>{pizzaDetails.publisher}</p>
            <hr />
            <div className="recipe-details">
              <h4>Ingredients:</h4>
              <ul>
                {pizzaDetails.ingredients.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>
              <p>Instructions:</p>
              <p>{pizzaDetails.instructions}</p>
            </div>
          </div>
          </div>
        </>
      )}
      </div>
    </div>
  );
};

export default EachPizza;
