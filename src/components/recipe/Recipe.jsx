const Recipe = (props) => {
  return (
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
        {props.recipes.map((recipe) => (
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
  );
};

export default Recipe;
