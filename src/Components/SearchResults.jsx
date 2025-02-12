import { useState, useEffect, React } from "react";
import { useParams } from "react-router-dom";
import MealList from "./MealList";

const SearchResults = () => {
  const { query } = useParams();
  const [mealList, setMealList] = useState([]);
  const [msg, setMsg] = useState("");

  useEffect(() => {
    if (query) {
      fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)
        .then((response) => response.json())
        .then((data) => {
          if (data.meals) {
            setMealList(data.meals);
            setMsg("");
          } else {
            setMealList([]);
            setMsg("No meals found for this category.");
          }
        })
        .catch(() => setMsg("Error fetching meals. Try again later."));
    }
  }, [query]);

  return (
    <div>
      <center>
        <h1 style={{ color: "palevioletred" }}>
          "{query.toUpperCase()}" Recipes
        </h1>
        <h2>{msg}</h2>
      </center>
      <MealList mealsList={mealList} />
    </div>
  );
};

export default SearchResults;
