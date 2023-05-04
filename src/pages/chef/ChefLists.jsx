import { useLoaderData } from "react-router-dom";
import Chefs from "../../components/chefs/Chefs";

const ChefLists = () => {
  const chefs = useLoaderData();
  return <Chefs chefs={chefs} />;
};

export default ChefLists;
