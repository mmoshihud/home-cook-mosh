import Recipe from "../../components/recipe/Recipe";

const Home = () => {
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
      <Recipe />
    </>
  );
};

export default Home;
