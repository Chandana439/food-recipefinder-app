import React from "react";
import "./App.css";
import { NavLink } from "react-router-dom";

export default function MealList({ mealsList }) {
  return (
    <div className="meals">
      {!mealsList
        ? null
        : mealsList.map((item) => {
            return (
              <div key={item.idMeal} className="meal-card">
                <br />
                <img src={item.strMealThumb} alt={item.strMeal}></img>
                <p>{item.strMeal}</p>
                <NavLink to={`/meal/${item.idMeal}`}>
                  <button>Recipe</button>
                </NavLink>
              </div>
            );
          })}
    </div>
  );
}
