import { useState } from "react";
import { useEffect } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Recipe from "../../components/recipe/Recipe";

const ChefDetails = () => {
  const { id } = useParams();
  const chefDetails = useLoaderData();
  const [recipe, setRecipe] = useState([]);
  useEffect(() => {
    fetch("https://chef-backend-eta.vercel.app/recipe/" + id)
      .then((response) => response.json())
      .then((data) => setRecipe(data));
  }, [chefDetails]);
  return (
    <>
      <div className="mb-4 flex flex-col items-center justify-center gap-4">
        <img
          src={chefDetails.imageURL}
          alt="Chef"
          className="h-80 w-80 rounded-full object-cover"
        />
        <h2 className="text-4xl font-bold">{chefDetails.name}</h2>
        <p className="w-2/3 text-center text-2xl">{chefDetails.bio}</p>
        <div className="text-lg font-bold">{chefDetails.likes} likes</div>
        <div className="text-lg font-bold">
          {chefDetails.num_recipes} recipes
        </div>
        <div className="text-lg font-bold">
          {chefDetails.experience_years} years of experience
        </div>
      </div>
      <Recipe recipes={recipe} />
    </>
  );
};

export default ChefDetails;
