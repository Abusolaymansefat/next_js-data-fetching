import React from "react";
import MealSearchInput from "./components/MealSearchInput";
import Link from "next/link";
import Image from "next/image";
import { Roboto } from "next/font/google";

const robotoFont = Roboto({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "ALL Meals ",
  description: "Meals loaded from MealDB API ", 
};

export default async function MealsPage({ searchParams }) {
  const query = searchParams || {};

  const fetchMeals = async () => {
    try {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${
          query.search || ""
        }`
      );
      const data = await res.json();
      return data.meals || [];
    } catch (error) {
      console.log(error);
      return [];
    }
  };

  const meals = await fetchMeals();

  return (
    <div className={robotoFont.className}>
      <div className="flex justify-center">
        <MealSearchInput />
      </div>

      <div className="grid grid-cols-4 gap-6 mt-8">
        {meals.map((singleMeal) => (
          <div
            key={singleMeal.idMeal}
            className="p-4 border rounded shadow hover:shadow-md transition "
          >
            <Image
              src={singleMeal?.strMealThumb}
              width={641}
              height={641}
              alt="singleMeal.strMeal"
            />
            <h2 className="font-bold text-lg">{singleMeal.strMeal}</h2>
            <p>{singleMeal.strCategory}</p>
            <p>{singleMeal.strArea}</p>
            <p>{singleMeal.strInstructions}</p>
            <Link
              href={`/meals/${singleMeal.idMeal}`}
              className="text-blue-500 underline mt-2 inline-block"
            >
              Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
