import React from "react";
import MealSearchInput from "./components/MealSearchInput";

export default async function MealsPage({ searchParams }) {
  const query = await searchParams;
  const fetchMeals = async () => {
    try {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${query.search}`
      );
      const data = await res.json();
      //   setMeals(data?.meals || []);
      return data.meals;
    } catch (error) {
      console.log(error);
      return [];
    }
  };

  const meals = await fetchMeals();

  return (
    <div>
      <div className="flex justify-center">
        <MealSearchInput></MealSearchInput>
      </div>

      <div className="grid grid-cols-4 gap-6">
        {meals?.map((singleMeal) => {
          return (
            <div key={singleMeal.idMeal}>
              <p>{singleMeal?.strMeal}</p>
              <p>{singleMeal?.strCategory}</p>
              <p>{singleMeal?.strArea}</p>
              <p>{singleMeal?.strInstructions}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
