import React from "react";

// ✅ API fetch
const fetchSingleMeals = async (id) => {
  try {
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    );
    const data = await res.json();
    return data.meals || [];
  } catch (error) {
    console.log(error);
    return [];
  }
};

// ✅ Metadata Generator
export async function generateMetadata({ params }) {
  const id = params.id;
  const mealArr = await fetchSingleMeals(id);
  const meal = mealArr[0];

  if (!meal) {
    return {
      title: "Meal Not Found",
      description: "No meal found with the provided ID.",
    };
  }

  return {
    title: meal.strMeal,
    description: meal.strInstructions?.slice(0, 150),
  };
}

// ✅ Page Component
export default async function SingleMealsPage({ params }) {
  const meals = await fetchSingleMeals(params.id);
  const meal = meals[0];

  if (!meal) {
    return <div className="text-red-500 text-xl">❌ Invalid Meal ID</div>;
  }

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-3xl font-bold">{meal.strMeal}</h1>
      <p><strong>Category:</strong> {meal.strCategory}</p>
      <p><strong>Area:</strong> {meal.strArea}</p>
      <img src={meal.strMealThumb} alt={meal.strMeal} className="w-96 rounded" />
      <p>{meal.strInstructions}</p>
    </div>
  );
}
