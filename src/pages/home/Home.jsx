import React from "react";
const Chefs = React.lazy(() => import("../../components/chefs/Chefs"));
import { useEffect } from "react";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const [blogs, setBlogs] = useState([]);
  const chefs = useLoaderData();

  useEffect(() => {
    fetch("https://chef-backend-eta.vercel.app/blog")
      .then((response) => response.json())
      .then((data) => setBlogs(data))
      .catch((error) => {
        console.log(error);
      });
  }, []);
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
      <h1 className="mb-8 text-center text-5xl font-extrabold">
        Explore Recipe by Our Chefs
      </h1>
      <React.Suspense fallback={<div>Loading...</div>}>
        <Chefs chefs={chefs} />
      </React.Suspense>
      <h1 className="mb-8 text-center text-5xl font-extrabold">
        Explore Our Special Category
      </h1>
      <div className="mb-8 grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6">
        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-white p-4 hover:shadow">
          <div className="h-16 w-16 rounded-lg bg-gray-100">
            <img
              src="http://neptune.pinsupreme.com/wp-content/uploads/2015/09/356.png"
              alt="Chicken"
            />
          </div>

          <h2 className="mt-2 line-clamp-1 text-sm font-semibold text-gray-800">
            Chicken
          </h2>
        </div>

        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-white p-4 hover:shadow">
          <div className="h-16 w-16 rounded-lg bg-gray-100">
            <img
              src="http://neptune.pinsupreme.com/wp-content/uploads/2015/09/341.png"
              alt="Fast-Food"
            />
          </div>

          <h2 className="mt-2 line-clamp-1 text-sm font-semibold text-gray-800">
            Fast Food
          </h2>
        </div>

        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-white p-4 hover:shadow">
          <div className="h-16 w-16 rounded-lg bg-gray-100">
            <img
              src="http://neptune.pinsupreme.com/wp-content/uploads/2015/09/349.png"
              alt="Fish"
            />
          </div>

          <h2 className="mt-2 line-clamp-1 text-sm font-semibold text-gray-800">
            Fish
          </h2>
        </div>

        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-white p-4 hover:shadow">
          <div className="h-16 w-16 rounded-lg bg-gray-100">
            <img
              src="http://neptune.pinsupreme.com/wp-content/uploads/2015/09/306.png"
              alt="Pizza"
            />
          </div>

          <h2 className="mt-2 line-clamp-1 text-sm font-semibold text-gray-800">
            Pizza
          </h2>
        </div>

        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-white p-4 hover:shadow">
          <div className="h-16 w-16 rounded-lg bg-gray-100">
            <img
              src="http://neptune.pinsupreme.com/wp-content/uploads/2015/09/45.png"
              alt="Salad"
            />
          </div>

          <h2 className="mt-2 line-clamp-1 text-sm font-semibold text-gray-800">
            Salad
          </h2>
        </div>

        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-white p-4 hover:shadow">
          <div className="h-16 w-16 rounded-lg bg-gray-100">
            <img
              src="http://neptune.pinsupreme.com/wp-content/uploads/2015/09/85.png"
              alt="Soup"
            />
          </div>

          <h2 className="mt-2 line-clamp-1 text-sm font-semibold text-gray-800">
            Soup
          </h2>
        </div>
      </div>
      <h1 className="mb-8 text-center text-5xl font-extrabold">Blogs & News</h1>
      <div className="grid grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <div key={blog.id} className="rounded shadow-lg">
            <img
              className="h-80 w-full object-cover"
              src={blog.imageURL}
              alt="Sunset in the mountains"
            />
            <div className="px-6 py-4">
              <div className="mb-2 text-xl font-bold">{blog.title}</div>
              <p className="text-base text-gray-700">{blog.description}</p>
            </div>
            <div className="px-6 pb-2 pt-4">
              {blog.tags.map((tag, index) => (
                <span
                  key={index}
                  className="mb-2 mr-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
