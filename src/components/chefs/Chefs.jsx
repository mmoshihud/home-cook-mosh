import { faClock, faHeart } from "@fortawesome/free-regular-svg-icons";
import { faGlobe, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Chefs = (props) => {
  const [countFavorite, setCountFavorite] = useState([]);
  const handleFavorite = (id) => {
    toast("Nice! successfully added to Favorites");
    setCountFavorite([...countFavorite, id]);
  };
  return (
    <div className="grid grid-cols-3 gap-8">
      {props.chefs.map((chef) => (
        <div key={chef.id} className="rounded shadow-lg">
          <img
            className="h-96 w-full object-cover"
            src={chef.imageURL}
            alt="Chef Picture"
          />
          <div className="px-6 py-4">
            <div className="mb-2 text-4xl font-bold">{chef.name}</div>
            <div className="my-4">
              <div className="flex items-center space-x-1">
                <span className="mr-2">
                  <FontAwesomeIcon
                    className="text-xl text-amber-900"
                    icon={faClock}
                  />
                </span>
                <p className="text-xl font-normal">
                  {chef.experience_years} Years of Experience
                </p>
              </div>
              <div className="flex items-center space-x-1">
                <span className="mr-2">
                  <FontAwesomeIcon
                    className="text-xl text-amber-900"
                    icon={faGlobe}
                  />
                </span>
                <p className="text-xl font-normal">
                  {chef.num_recipes} Recipes
                </p>
              </div>
              <div className="flex items-center space-x-1">
                <span className="mr-2">
                  <FontAwesomeIcon
                    className="text-xl text-amber-900"
                    icon={faThumbsUp}
                  />
                </span>
                <p className="text-xl font-normal">{chef.likes}</p>
              </div>
              <div className="mb-4 flex items-center space-x-1">
                <span className="mr-2">
                  <FontAwesomeIcon
                    className="text-xl text-amber-900"
                    icon={faHeart}
                  />
                </span>
                <button
                  disabled={countFavorite.find((x) => chef.id === x)}
                  onClick={() => handleFavorite(chef.id)}
                  className={
                    countFavorite.find((x) => chef.id === x)
                      ? "cursor-not-allowed text-xl font-normal"
                      : "text-xl font-normal"
                  }
                >
                  Add to Favorite
                </button>
                <ToastContainer
                  position="top-center"
                  autoClose={1300}
                  hideProgressBar={false}
                  newestOnTop={false}
                  closeOnClick
                  rtl={false}
                  pauseOnFocusLoss
                  draggable
                  pauseOnHover
                  theme="dark"
                />
              </div>
              <Link
                to={`/chef/${chef.id}`}
                className="btn-brown block w-full px-5 py-2 text-center text-xl font-medium"
              >
                View Recipes
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Chefs;
