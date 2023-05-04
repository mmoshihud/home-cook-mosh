import { useState } from "react";
import { useEffect } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const ChefDetails = () => {
  const { id } = useParams();
  const chefDetails = useLoaderData();
  const [recipe, setRecipe] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/recipe/" + id)
      .then((response) => response.json())
      .then((data) => setRecipe(data));
  }, [chefDetails]);
  return (
    <>
      <div className="mb-4 flex flex-col items-center justify-center gap-4">
        <img
          src={chefDetails.imageURL}
          alt="Chef"
          className="h-64 w-64 rounded-full object-cover"
        />
        <h2 className="text-4xl font-bold">{chefDetails.name}</h2>
        <p className="w-2/3 text-center text-xl">{chefDetails.bio}</p>
        <div className="text-lg font-bold">{chefDetails.likes} likes</div>
        <div className="text-lg font-bold">
          {chefDetails.num_recipes} recipes
        </div>
        <div className="text-lg font-bold">
          {chefDetails.experience_years} years of experience
        </div>
      </div>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
            >
              Recipe Name
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
            >
              Ingredients
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
            >
              Cooking Method
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
            >
              Rating
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 bg-white">
          {recipe.map((recipe) => (
            <tr key={recipe.id}>
              <td className="whitespace-nowrap px-6 py-4">
                {recipe.recipe_name}
              </td>
              <td className="whitespace-nowrap px-6 py-4">
                {recipe.ingredients[0] + recipe.ingredients[1]} etc.
              </td>
              <td className="px-6 py-4">{recipe.cooking_method}</td>
              <td className="whitespace-nowrap px-6 py-4">{recipe.rating}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default ChefDetails;
