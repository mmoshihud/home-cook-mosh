import { useLoaderData, useParams } from "react-router-dom";

const ChefDetails = () => {
  const { id } = useParams();
  const chefDetails = useLoaderData();
  return (
    <>
      <h1>{id}</h1>
      <h2>{chefDetails.name}</h2>
    </>
  );
};

export default ChefDetails;
