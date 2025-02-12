import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Mealinfo.css";

const Mealinfo = () => {
  const { mealid } = useParams();
  const [recipeInfo, setRecipeInfo] = useState();

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealid}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.meals) {
          setRecipeInfo(data.meals[0]);
        }
      })
      .catch(() => setRecipeInfo(null));
  }, [mealid]);

  if (!recipeInfo) {
    return <h2 style={{ textAlign: "center" }}>No Recipe Found</h2>;
  }

  const ingredients = [];
  for (let i = 0; i < 20; i++) {
    const ingredient = recipeInfo[`strIngredient${i}`];
    const measure = recipeInfo[`strMeasure${i}`];
    if (ingredient && ingredient.trim() !== "") {
      ingredients.push(`${measure} ${ingredient}`);
    }
  }
  return (
    <div className="mealinfo">
      <div className="recipe-container">
        <div className="recipe-image">
          <img src={recipeInfo.strMealThumb} alt={recipeInfo.strMeal} />
        </div>
        <h1 style={{ margin: "0px" }} className="recipe-title">
          {recipeInfo.strMeal} Recipe
        </h1>
        <hr />
        <div className="ingredients">
          <h2>Ingredients</h2>
          <ul>
            {ingredients.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <hr />
        <div className="recipe-instructions">
          <h2>Instructions</h2>
          {recipeInfo.strInstructions.split("\r\n").map(
            (step, index) =>
              step.trim() && (
                <p key={index}>
                  {index + 1}. {step}
                </p>
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default Mealinfo;
