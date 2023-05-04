import React from "react";
const Chefs = React.lazy(() => import("../../components/chefs/Chefs"));
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const chefs = useLoaderData();
  return (
    <>
      <div className="carousel-center carousel rounded-box mb-8">
        <div className="carousel-item">
          <img
            src="https://good-food.cmsmasters.net/wp-content/uploads/2015/11/slide-1.jpg"
            alt="Pizza"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://good-food.cmsmasters.net/wp-content/uploads/2017/07/slide-5.jpg"
            alt="Pizza"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://good-food.cmsmasters.net/wp-content/uploads/2017/07/slide-4.jpg"
            alt="Pizza"
          />
        </div>
      </div>
      <h1 className="mb-8 text-center text-2xl font-bold">
        Explore Recipe by Our Chefs
      </h1>
      <React.Suspense fallback={<div>Loading...</div>}>
        <Chefs chefs={chefs} />
      </React.Suspense>
    </>
  );
};

export default Home;
